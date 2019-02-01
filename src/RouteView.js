import React from "react";
import MapboxGL from "@mapbox/react-native-mapbox-gl";

import { View, StyleSheet } from "react-native";
import PulseCircleLayer from "./components/common/PulseCircleLayer";
import RouteSimulator from "./RouteSimulator";
import * as MapwizeApi from "./mapwizeApi";
import { lineString as makeLineString } from "@turf/helpers";
import CircleLayer from "./CircleLayer";
import RouteLayer from "./RouteLayer";

const ORIGIN = [106.70153617858888, 10.778110515231079];
const DESTINATION = [106.70205384496968, 10.778051230141877];
const layerStyles = MapboxGL.StyleSheet.create({
  destination: {
    circleRadius: 5,
    circleColor: "gray"
  },
  progress: {
    lineColor: "#314ccd",
    lineWidth: 3
  }
});

export default class RouteView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      route: null,
      currentPoint: null,
      routeSimulator: null
    };
  }

  onStart = () => {
    const routeSimulator = new RouteSimulator(this.state.route, 0.002, 200);
    routeSimulator.addListener(currentPoint =>
      this.setState({ currentPoint: currentPoint })
    );
    routeSimulator.start();
    this.setState({ routeSimulator: routeSimulator });
  };

  async componentDidMount() {
    const res = await MapwizeApi.getDirections();
    let route = res.route[0].path;
    let reverse = [];
    for (let i = 0; i < route.length; i++) {
      reverse.push([route[i][1], route[i][0]]);
    }
    this.setState({
      route: makeLineString(reverse)
    });
  }

  componentWillUnmount() {
    if (this.state.routeSimulator) {
      this.state.routeSimulator.stop();
    }
  }

  renderOrigin() {
    return (
      <CircleLayer
        origin={ORIGIN}
        compareLayer={this.props.layerName}
        currentPoint={this.state.currentPoint}
      />
    );
  }

  renderRoute() {
    return (
      <RouteLayer route={this.state.route} compareLayer="originInnerCircle" />
    );
  }

  renderCurrentPoint() {
    if (!this.state.currentPoint) {
      return null;
    }
    const point = MapboxGL.StyleSheet.create({
      a: {
        iconImage: this.state.currentPoint.properties.icon,
        iconSize: 1.2,
        iconAllowOverlap: true,
        iconIgnorePlacement: true,
        textRotationAlignment: "map",
        iconRotate: this.state.currentPoint.properties.bearing
      }
    });
    return (
      <MapboxGL.ShapeSource id="pointSource" shape={this.state.currentPoint}>
        <MapboxGL.SymbolLayer
          id="pointRotateIcon"
          style={point.a}
          aboveLayerID="destinationInnerCircle"
        />
      </MapboxGL.ShapeSource>
    );
  }

  renderProgressLine() {
    if (!this.state.currentPoint) {
      return null;
    }

    const nearestIndex = this.state.currentPoint.properties.nearestIndex;
    const coords = this.state.route.geometry.coordinates.filter(
      (c, i) => i <= nearestIndex
    );
    coords.push(this.state.currentPoint.geometry.coordinates);

    if (coords.length < 2) {
      return null;
    }

    const lineString = makeLineString(coords);
    return (
      <MapboxGL.Animated.ShapeSource id="progressSource" shape={lineString}>
        <MapboxGL.Animated.LineLayer
          id="progressFill"
          style={layerStyles.progress}
          aboveLayerID="routeFill"
        />
      </MapboxGL.Animated.ShapeSource>
    );
  }

  render() {
    return (
      <View>
        {this.renderOrigin()}
        {this.renderRoute()}
        {this.renderCurrentPoint()}
        {this.renderProgressLine()}
        <MapboxGL.ShapeSource
          id="destination"
          shape={MapboxGL.geoUtils.makePoint(DESTINATION)}
        >
          <MapboxGL.CircleLayer
            id="destinationInnerCircle"
            style={layerStyles.destination}
            belowLayerID={this.props.layerName}
          />
        </MapboxGL.ShapeSource>
      </View>
    );
  }
}
