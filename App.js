import React from 'react';
import MapView from 'react-native-maps';
import { Marker } from "react-native-maps";
import { StyleSheet, View, Image } from 'react-native';
import { Dimensions } from 'react-native'


export default function App() {

  // Main town
  const moia = {
    latitude: 41.8098263799972,
    longitude: 2.0972582839203664,
    latitudeDelta: 0.02,
    longitudeDelta: 0.02,
  }
  // Points of interest
  const covesDelToll = {
    latitude: 41.805818795206555,
    longitude: 2.151204112151171,
    latitudeDelta: 0.02,
    longitudeDelta: 0.02,
  }

  const rafaelCasanova = {
    latitude: 41.81183556786147,
    longitude: 2.099205493186476,
    latitudeDelta: 0.005,
    longitudeDelta: 0.005,
  }

  const santSebastia = {
    latitude: 41.813182411538286,
    longitude: 2.097266689415215,
    latitudeDelta: 0.005,
    longitudeDelta: 0.005,
  }

  const museuCoves = {
    latitude: 41.81162647084912,
    longitude: 2.0982430399961873,
    latitudeDelta: 0.005,
    longitudeDelta: 0.005,
  }

  const ajuntament = {
    latitude: 41.81308189705902,
    longitude: 2.097091539131859,
    latitudeDelta: 0.005,
    longitudeDelta: 0.005,
  }

  const moliNou = {
    latitude: 41.820339869173644,
    longitude: 2.10341206611254,
    latitudeDelta: 0.005,
    longitudeDelta: 0.005,
  }

  return (
    <View style={styles.container}>
      <Image style={[styles.banner, { width: Dimensions.get('window').width }]} source={require("./assets/moia_banner.png")} />
      <View style={[styles.horizontalContainer, { top: "15%" }]}>
        <Image source={require("./assets/photo_markers/ajuntament.png")} style={styles.markerImage} />
        <Image source={require("./assets/photo_markers/casanova.png")} style={styles.markerImage} />
        <Image source={require("./assets/photo_markers/coves.png")} style={styles.markerImage} />
      </View>
      <View style={[styles.horizontalContainer, { top: "30%" }]}>
        <Image source={require("./assets/photo_markers/moli_nou.png")} style={styles.markerImage} />
        <Image source={require("./assets/photo_markers/museu_coves.png")} style={styles.markerImage} />
        <Image source={require("./assets/photo_markers/sebastia.png")} style={styles.markerImage} />
      </View>
      <MapView
        style={styles.map}
        initialRegion={moia}
        customMapStyle={require("./assets/map_style.json")}>
        <Marker coordinate={covesDelToll} pinColor="green" />
        <Marker coordinate={rafaelCasanova} pinColor="yellow" />
        <Marker coordinate={santSebastia} pinColor="yellow" />
        <Marker coordinate={museuCoves} pinColor="aqua" />
        <Marker coordinate={ajuntament} pinColor="violet" />
        <Marker coordinate={moliNou} pinColor="violet" />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  horizontalContainer: {
    flexDirection: 'row',
    justifyContent: "center",
    position: "absolute",
    top: "20%",
    left: 0,
    right: 0,
    zIndex: 1,
  },
  markerImage: {
    width: 100,
    height: 100,
    marginHorizontal: 10,
  },
  banner: {
    height: 100,
    position: "absolute",
    zIndex: 1,
  },
});
