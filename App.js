/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Modal,
  TouchableOpacity,
  Platform
} from "react-native";

import MapboxGL from "@mapbox/react-native-mapbox-gl";
import { IS_ANDROID, onSortOptions } from "./src/utils";
import * as MapwizeApi from "./src/mapwizeApi";
import RouteView from "./src/RouteView";

MapboxGL.setAccessToken(
  "sk.eyJ1IjoibG91aXNjaGFpbiIsImEiOiJjanJhNGx6MGYwbWEyM3ltbG5zMmc5ZW5lIn0.ny4mprCoOHELrX6jAtMOWg"
);
const defaultCoordinate = {
  lat: 10.8231,
  long: 106.6297
};

export default class App extends Component {
  constructor(props) {
    super(props);

    this._mapOptions = Object.keys(MapboxGL.StyleURL)
      .map(key => {
        return {
          label: key,
          data: MapboxGL.StyleURL[key]
        };
      })
      .sort(onSortOptions);

    this.state = {
      isFetchingAndroidPermission: IS_ANDROID,
      isAndroidPermissionGranted: false,
      styleURL: this._mapOptions[0].data,
      featureCollection: MapboxGL.geoUtils.makeFeatureCollection(),
      externalIcons: {}
    };

    this._defaultLayerIndex = 0;
    this._map = null;
    this._layers = MapwizeApi.getLayersFromVanue();
    this._places = MapwizeApi.getPlacesInVenue();
    this._routeView = React.createRef();
  }

  renderAnnotations() {
    return (
      <MapboxGL.PointAnnotation
        key="pointAnnotation"
        id="pointAnnotation"
        coordinate={[defaultCoordinate.long, defaultCoordinate.lat]}
      >
        <View style={styles.annotationContainer}>
          <View style={styles.annotationFill} />
        </View>
        <MapboxGL.Callout title="Look! An annotation!" />
      </MapboxGL.PointAnnotation>
    );
  }

  async componentWillMount() {
    if (IS_ANDROID) {
      const isGranted = await MapboxGL.requestAndroidLocationPermissions();
      this.setState({
        isAndroidPermissionGranted: isGranted,
        isFetchingAndroidPermission: false
      });
    }
  }

  componentDidMount() {
    this.addHistoryLayer(0);
  }

  addHistoryLayer = floor => {
    let features = this.state.featureCollection;
    let externalIcons = {};
    for (let i = 0; i < this._places.length; i++) {
      let item = this._places[i];
      if (item.floor === floor) {
        let feature = {
          // a default feature in somewhere
          type: "Feature",
          id: "9d10456e-bdda-4aa9-9269-04c1667d4552",
          properties: {},
          geometry: {
            type: "Point",
            coordinates: [-117.20611157485, 52.180961084261]
          }
        };
        feature.id = item._id;
        feature.properties = {
          name: item.name,
          icon: item._id
        };
        feature.geometry.coordinates = [
          item.marker.longitude,
          item.marker.latitude
        ];
        features = MapboxGL.geoUtils.addToFeatureCollection(features, feature);

        // Add external icons
        externalIcons[item._id] = { uri: item.placeType.style.markerUrl };
      }
    }
    this.setState({ featureCollection: features, externalIcons });
  };

  async zoomMap() {
    await this._map.zoomTo(17, 2000);
    if (this._layers)
      await this._map.flyTo(
        [
          this._layers[this._defaultLayerIndex].longitudeMin,
          this._layers[this._defaultLayerIndex].latitudeMin
        ],
        2000
      );
  }

  onSourceLayerPress = e => {
    const feature = e.nativeEvent.payload;
    console.log("You pressed a layer here is your feature", feature); // eslint-disable-line
    console.log(this._routeView);
    this._routeView.current.onStart();
  };

  render() {
    if (IS_ANDROID && !this.state.isAndroidPermissionGranted) {
      if (this.state.isFetchingAndroidPermission) {
        return null;
      }
      return (
        <View style={styles.container}>
          <Text style={styles.noPermissionsText}>
            You need to accept location permissions in order to use this example
            applications
          </Text>
        </View>
      );
    }
    const { corners } = this._layers[this._defaultLayerIndex].importJob;
    const coordQuad = [
      [corners[0].lng, corners[0].lat], // top left
      [corners[1].lng, corners[1].lat], // top right
      [corners[3].lng, corners[3].lat], // bottom right
      [corners[2].lng, corners[2].lat] // bottom left
    ];
    return (
      <View style={styles.container}>
        <MapboxGL.MapView
          ref={c => (this._map = c)}
          styleURL={MapboxGL.StyleURL.Street}
          zoomLevel={17}
          centerCoordinate={[
            this._layers[this._defaultLayerIndex].longitudeMin,
            this._layers[this._defaultLayerIndex].latitudeMin
          ]}
          style={styles.container}
        >
          <MapboxGL.ImageSource
            key={this._layers[this._defaultLayerIndex]._id}
            id={this._layers[this._defaultLayerIndex]._id}
            coordinates={coordQuad}
            url={this._layers[this._defaultLayerIndex].importJob.imageURL}
          >
            <MapboxGL.RasterLayer id="imageLayer" />
          </MapboxGL.ImageSource>
          <RouteView ref={this._routeView} layerName="iconLayers" />
          <MapboxGL.ShapeSource
            id="shapeId"
            onPress={this.onSourceLayerPress}
            hitbox={{ width: 30, height: 30 }}
            shape={this.state.featureCollection}
            images={this.state.externalIcons}
          >
            <MapboxGL.SymbolLayer
              id="iconLayers"
              minZoomLevel={5}
              aboveLayerID="imageLayer"
              style={sourceLayerStyles.icon}
            />
          </MapboxGL.ShapeSource>
        </MapboxGL.MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  noPermissionsText: {
    fontSize: 18,
    fontWeight: "bold"
  },
  annotationContainer: {
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 15
  },
  annotationFill: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "orange",
    transform: [{ scale: 0.6 }]
  }
});

const sourceLayerStyles = MapboxGL.StyleSheet.create({
  icon: {
    iconImage: "{icon}",
    iconSize: 1.5,
    iconAllowOverlap: true,
    textField: "{name}",
    textSize: 12,
    textAnchor: "top"
  }
});
