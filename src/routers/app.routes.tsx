import { createNativeStackNavigator } from "@react-navigation/native-stack";

const {Navigator, Screen } = createNativeStackNavigator()

import {Home} from '../screens/Home'
import {Newh} from '../screens/Newh'
import {Habit} from '../screens/Habit'

export function AppRoutes(){
    return(
         <Navigator>
        <Screen
            name="home"
            component={Home}
        />

        <Screen
            name="new"
            component={Newh}
        />

        <Screen
            name="habit"
            component={Habit}
        />

    </Navigator>
    )
   
}