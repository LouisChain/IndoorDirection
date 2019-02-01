import React, { PureComponent } from "react";
import MapboxGL from "@mapbox/react-native-mapbox-gl";
import PropTypes from "prop-types";

export default class RouteLayer extends PureComponent {
  static propTypes = {
    route: PropTypes.object,
    compareLayer: PropTypes.string
  };

  render() {
    if (!this.props.route) {
      return null;
    }

    return (
      <MapboxGL.ShapeSource id="routeSource" shape={this.props.route}>
        <MapboxGL.LineLayer
          id="routeFill"
          style={styles.route}
          belowLayerID={this.props.compareLayer}
        />
      </MapboxGL.ShapeSource>
    );
  }
}

const styles = MapboxGL.StyleSheet.create({
  route: {
    lineColor: "gray",
    lineWidth: 3,
    lineOpacity: 0.84
  }
});
