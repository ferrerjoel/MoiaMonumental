import React, {useRef} from 'react';
import MapView from 'react-native-maps';
import { Marker, Callout } from "react-native-maps";
import { StyleSheet, View, Image, TouchableOpacity, Text} from 'react-native';
import { Dimensions } from 'react-native'

export default function App() {

  const mapViewRef = useRef(null);
  // Zooms into a marker
  function goToLocation(loc) {
    const newRegion = {
      latitude: loc.latitude,
      longitude: loc.longitude,
      latitudeDelta: 0.001,
      longitudeDelta: 0.001,
    };
    // Zooms smothly into a location, in the time defined in the second parameter
    mapViewRef.current.animateToRegion(newRegion, 500);
  }

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
  }

  const rafaelCasanova = {
    latitude: 41.81183556786147,
    longitude: 2.099205493186476,
  }

  const santSebastia = {
    latitude: 41.813182411538286,
    longitude: 2.097266689415215,
  }

  const museuCoves = {
    latitude: 41.81162647084912,
    longitude: 2.0982430399961873,
  }

  const ajuntament = {
    latitude: 41.81308189705902,
    longitude: 2.097091539131859,
  }

  const moliNou = {
    latitude: 41.820339869173644,
    longitude: 2.10341206611254,
  }

  return (
    <View style={styles.container}>
      <Text>HOLA</Text>
      <Image style={[styles.banner, { width: Dimensions.get('window').width }]} source={require("./assets/moia_banner.png")} />
      <View style={[styles.horizontalContainer, { top: "13%" }]}>
        <TouchableOpacity onPress={() => goToLocation(ajuntament)}><Image source={require("./assets/photo_markers/ajuntament.png")} style={styles.markerImage} /></TouchableOpacity>
        <TouchableOpacity onPress={() => goToLocation(rafaelCasanova)}><Image source={require("./assets/photo_markers/casanova.png")} style={styles.markerImage} /></TouchableOpacity>
        <TouchableOpacity onPress={() => goToLocation(covesDelToll)}><Image source={require("./assets/photo_markers/coves.png")} style={styles.markerImage} /></TouchableOpacity>
      </View>
      <View style={[styles.horizontalContainer, { top: "26%" }]}>
        <TouchableOpacity onPress={() => goToLocation(moliNou)}><Image source={require("./assets/photo_markers/moli_nou.png")} style={styles.markerImage} /></TouchableOpacity>
        <TouchableOpacity onPress={() => goToLocation(museuCoves)}><Image source={require("./assets/photo_markers/museu_coves.png")} style={styles.markerImage} /></TouchableOpacity>
        <TouchableOpacity onPress={() => goToLocation(santSebastia)}><Image source={require("./assets/photo_markers/sebastia.png")} style={styles.markerImage} /></TouchableOpacity>
      </View>
      <MapView
      style={styles.map}
      initialRegion={moia}
      customMapStyle={require("./assets/map_style.json")}
      ref={mapViewRef}>
      <Marker coordinate={covesDelToll} pinColor="green">
        <Callout>
          <Text style={styles.calloutText}>Coves del Toll</Text>
        </Callout>
      </Marker>
      <Marker coordinate={rafaelCasanova} pinColor="yellow">
        <Callout>
          <Text style={styles.calloutText}>Rafael Casanova</Text>
        </Callout>
      </Marker>
      <Marker coordinate={santSebastia} pinColor="yellow">
        <Callout>
          <Text style={styles.calloutText}>Sant Sebastià</Text>
        </Callout>
      </Marker>
      <Marker coordinate={museuCoves} pinColor="aqua">
        <Callout>
          <Text style={styles.calloutText}>Museu de les Coves</Text>
        </Callout>
      </Marker>
      <Marker coordinate={ajuntament} pinColor="violet">
        <Callout>
          <Text style={styles.calloutText}>Ajuntament</Text>
        </Callout>
      </Marker>
      <Marker coordinate={moliNou} pinColor="violet">
        <Callout>
          <Text style={styles.calloutText}>Molí Nou</Text>
        </Callout>
      </Marker>
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
  callout: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    zIndex: 2
  },
  calloutText: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  siteText: {
    zIndex: 2,
    position: "absolute",
    fontSize: 22,
  }
});
