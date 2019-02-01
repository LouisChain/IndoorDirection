import React, { PureComponent } from "react";
import MapboxGL from "@mapbox/react-native-mapbox-gl";
import PropTypes from "prop-types";

export default class CircleLayer extends PureComponent {
  static propTypes = {
    origin: PropTypes.array,
    compareLayer: PropTypes.string,
    currentPoint: PropTypes.object
  };

  render() {
    let backgroundColor = "gray";

    if (this.props.currentPoint) {
      backgroundColor = "#314ccd";
    }
    const style = [styles.origin, { circleColor: backgroundColor }];
    return (
      <MapboxGL.ShapeSource
        id="origin"
        shape={MapboxGL.geoUtils.makePoint(this.props.origin)}
      >
        <MapboxGL.Animated.CircleLayer
          id="originInnerCircle"
          style={style}
          belowLayerID={this.props.compareLayer}
        />
      </MapboxGL.ShapeSource>
    );
  }
}

const styles = MapboxGL.StyleSheet.create({
  origin: {
    circleRadius: 5,
    circleColor: "gray"
  }
});
