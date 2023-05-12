

import { View, Text,Platform, PermissionsAndroid,Dimensions } from 'react-native'
import React, { useEffect,useState } from 'react'
import MapView,{ Marker } from 'react-native-maps'
import tw from 'tailwind-react-native-classnames'
import { useSelector } from 'react-redux'
import { useRef } from 'react'
import {GOOGLE_MAPS_APIKEY} from "@env"
import MapViewDirections from "react-native-maps-directions"
import { selectDestination, selectOrigin } from '../slices/navSlice'


const Map = () => {
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);
  const mapRef = useRef(null);  
     useEffect(() => {
        if (!origin || !destination) return;
        mapRef.current.fitToSuppliedMarkers(["origin", "destination"], {
            edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
        });
    }, [origin, destination]);


  return (
    <MapView
      ref={mapRef}
      onMapReady={()=>{
        Platform.OS === "android"?
        PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION)
        .then(()=>{
          console.log("Usuario on")
        }):""
        
      }}
        style={tw`flex-1`}
        mapType="mutedStandard"
        initialRegion={{
        latitude: origin?.location.lat || 37.78825,
        longitude: origin?.location.lng || -122.4324,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
    >
      {origin && destination &&(
        <MapViewDirections
          origin={origin.description}
          destination={destination.description}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeWidth={3}
          strokeColor="green"
        />
      )}
      {origin?.location && (
        <Marker
          coordinate={{
            latitude: origin.location.lat,
            longitude: origin.location.lng
          }}
          title="Origin"
          description={origin?.description}
          identifier='origin'
        />
      )}
      {destination?.location && (
        <Marker
          coordinate={{
            latitude: destination.location.lat,
            longitude: destination.location.lng
          }}
          title="Destination"
          description={destination?.description}
          identifier='destination'
        />
      )}
  </MapView>)
};
export default Map