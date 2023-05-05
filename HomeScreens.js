import React from 'react'
import {SafeAreaView ,StyleSheet,View, Text, Image } from 'react-native'
import tw from "tailwind-react-native-classnames"
import NavOptions from '../components/NavOptions'
import { Icon } from 'react-native-elements'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {GOOGLE_MAPS_APIKEY}  from "@env"
import { useDispatch } from 'react-redux'
import { setDestination, setOrigin } from '../slices/navSlice'

const HomeScreens = () => {
const dispatch= useDispatch();


  return (
    <SafeAreaView style={tw`bg-yellow-500 h-full`}>
      <View style={tw`p-5`}>
          <Image
            style={{
              width:100,
              height:100,
              resizeMode:"contain",
            }}

            source={{
              uri:"https://links.papareact.com/gzs"
            }}
          />
          <GooglePlacesAutocomplete
            placeholder='Where from ?'
            styles={{
              container:{
                flex:0,
              },
              textInput:{
                fontSize:18,
              },
            }}
            onPress={(data, details= null)=>{
              
               dispatch(
                setOrigin({
                  location: details?.geometry.location,
                  description: data.description,
                })
              );
            dispatch(setDestination(null));
              console.log(data);
              console.log(details)
            }}
            fetchDetails={true}
            miniLenght={2}
            enablePoweredByContainer={false}
            query={{
              key: GOOGLE_MAPS_APIKEY,
              language:"pt"
            }}
            nearbyPlacesAPI='GooglePlaceSearch'
            debounce={400}
          />
          <NavOptions/>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreens

const styles = StyleSheet.create({
  text: {
    color: "blue",
  },
});