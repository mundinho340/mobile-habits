import {StyleSheet,Text, View, SafeAreaView} from 'react-native';
import {Provider} from "react-redux";
import {store} from "./store";
import HomeScreens from './screens/HomeScreens';
import MapScreen from './screens/MapScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';

//set up redux



export default function App() {
  const Stack = createStackNavigator();
 
  return (
    <Provider store={store}>
          <NavigationContainer>
              <SafeAreaProvider>
                <Stack.Navigator>
                  <Stack.Screen 
                    name="HomeScreen"
                    component={HomeScreens}
                    options={{
                      headerShown:false,
                    }}
                  />

                  <Stack.Screen 
                    name="MapScreen"
                    component={MapScreen}
                    options={{
                      headerShown:false,
                    }}
                  />
                </Stack.Navigator>
               
              </SafeAreaProvider>
          </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:"#fff",
    alignItems:"center",
    justifyContent:"center",
  },
})

;
