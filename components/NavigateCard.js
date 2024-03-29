import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import { SafeAreaView } from 'react-native-safe-area-context'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from 'react-redux'
import { setDestination } from '../slices/navSlice'
import { useNavigation } from '@react-navigation/native'

const NavigateCard = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();

  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
                <Image
                    style={{
                        width:40,
                        height:40,
                        marginTop:-40,
                        zIndex:-1
                    }}

                    source={{uri:"https://github.com/mundinho340/mobile-habits/blob/main/img/home%20page/Burger%20Menu.png?raw=true"}}
                />
            <View>
        {/* <Text style={tw`text-center py-5 text-xl `}></Text> */}
        <View style={tw`border-t border-gray-200 flex-shrink`}>
                <GooglePlacesAutocomplete
                    styles={toInputBoxStyles}
                    fetchDetails={true}
                    returnKeyType={"search"}
                    enablePoweredByContainer={false}
                    minLength={2}
                    onPress={(data, details = null)=>{
                        dispatch(setDestination({
                            location: details.geometry.location,
                            description: data.description,
                        }))

                        navigation.navigate('RideOptionCard')
                    }}
                    query={{
                        key:GOOGLE_MAPS_APIKEY,
                        language:"en"
                    }}
                    placeholder='Para onde vais?'
                    nearbyPlacesAPI='GooglePlacesSearch'
                    debounce={400}
                />
                <View className="origin" style={tw`bg-gray-100 rounded-lg h-10 mt-5 w-80 ml-5 flex`}> 
                    <Image 
                        style={{
                            marginTop:12,
                            marginLeft:12,
                            width:20,
                            height:20
                        }}
                        source={{uri:"https://github.com/mundinho340/mobile-habits/blob/main/img/home%20page/Ellipse%205.png?raw=true"}}
                    />
                    <Text style={tw`text-gray-500 text-center`}>selecione ponto de partida</Text>
                </View>
                  <View  className="origin" style={tw`bg-gray-100 rounded-lg h-10 mt-5 w-80 ml-5`}> 
                         <Image 
                        style={{
                            marginTop:12,
                            marginLeft:12,
                            width:20,
                            height:20,
    
                        }}
                        source={{uri:"https://github.com/mundinho340/mobile-habits/blob/main/img/home%20page/ic_pin.png?raw=true"}}
                    />
                    <Text style={tw`text-gray-500 text-center`}>selecione o teu destino</Text>
                </View>
            </View>
        </View>

    </SafeAreaView>
  )
}

export default NavigateCard

const toInputBoxStyles = StyleSheet.create({
    container:{
        backgroundColor: "white",
        paddingTop: 20,
        flex: 0,
    },

    textInput: {
        backgroundColor: "#DDDDDF",
        borderRadius:0,
        fontSize: 18,
    },
    textInputContainer:{
        paddingHorizontal:20,
        paddingBottom:0,
    }

});