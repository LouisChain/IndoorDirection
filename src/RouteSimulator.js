import { Animated, Easing } from "react-native";
import MapboxGL from "@mapbox/react-native-mapbox-gl";
import along from "@turf/along";
import findDistance from "@turf/distance";
import bearing from "@turf/bearing";

class Polyline {
  constructor(lineStringFeature) {
    this._coordinates = lineStringFeature.geometry.coordinates;
    this._lineStringFeature = lineStringFeature;

    this._totalDistance = 0;
    for (let i = 1; i < this._coordinates.length; i++) {
      this._totalDistance += findDistance(this.get(i - 1), this.get(i));
    }
  }

  coordinateFromStart(distance, nextIndexOfPoint) {
    const pointAlong = along(this._lineStringFeature, distance);
    pointAlong.properties.distance = distance;
    pointAlong.properties.nearestIndex = this.findNearestFloorIndex(distance);
    pointAlong.properties.icon = "airport-15";
    pointAlong.properties.bearing = this.computeHeading(
      pointAlong,
      nextIndexOfPoint
    );
    return pointAlong;
  }

  findNearestFloorIndex(currentDistance) {
    let runningDistance = 0;

    for (let i = 1; i < this._coordinates.length; i++) {
      runningDistance += findDistance(this.get(i - 1), this.get(i));

      if (runningDistance >= currentDistance) {
        return i - 1;
      }
    }

    return -1;
  }

  computeHeading = (p1, index) => {
    return bearing(p1, this.get(index)) || 0;
  };

  findDistanceFromPointToPoint = (i, j) => {
    let options = { units: "kilometers" };
    if (i <= j) {
      return findDistance(this.get(i), this.get(j));
    } else {
      return findDistance(this.get(j), this.get(i));
    }
  };

  get(index) {
    return MapboxGL.geoUtils.makePoint(this._coordinates[index]);
  }

  get totalDistance() {
    return this._totalDistance;
  }
}

class RouteSimulator {
  constructor(lineString, speed = 0.04, duration = 5) {
    this._polyline = new Polyline(lineString);
    this._previousDistance = 0;
    this._currentDistance = 0;
    this._speed = speed;
    this._duration = duration;
    this._count = 0;
  }

  addListener(listener) {
    this._listener = listener;
  }

  start() {
    this.tick(0);
  }

  reset() {
    this._previousDistance = 0;
    this._currentDistance = 0;
    this.start();
  }

  stop() {
    if (this._anim) {
      this._anim.stop();
    }
  }

  tick(index) {
    console.log("---", "begin function " + new Date().getTime())
    // requestAnimationFrame((t) => {
      console.log("BBB", "start animation " + new Date().getTime())
      this._previousDistance = this._currentDistance;
      let moreDistance = this._polyline.findDistanceFromPointToPoint(
        index,
        ++index
      );
      this._currentDistance += moreDistance;

      // interpolate between previous to current distance
      const listener = step => {
        const currentPosition = this._polyline.coordinateFromStart(
          step.value,
          index
        );
        this.emit(currentPosition);
      };

      this._animatedValue = new Animated.Value(this._previousDistance);
      this._animatedValue.addListener(listener);

      this._anim = Animated.timing(this._animatedValue, {
        toValue: this._currentDistance,
        duration: this._duration * moreDistance * 1000,
        easing: Easing.linear,
        useNativeDriver: true
      });

      this._anim.start(() => {
        console.log("AAA", "stop animation " + new Date().getTime())
        this._animatedValue.removeListener(listener);

        if (this._currentDistance >= this._polyline.totalDistance) {
          this.reset();
          return;
        }

        this.tick(index);
      });
    // });
  }

  emit(pointFeature) {
    this._listener(pointFeature);
  }
}

export default RouteSimulator;
