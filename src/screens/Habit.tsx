import { ScrollView, View } from "react-native";
import { useRoute } from "@react-navigation/native";
interface Params {
    date: string;
}
export function Habit(){
    const route = useRoute();
    const {date} = route.params as Params;
    console.log(date)
    return(
        <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingBottom:100}}
        >
          <View className="flex-1 bg-background px-8 pt-16">

         </View> 
        </ScrollView>
    )
  
}