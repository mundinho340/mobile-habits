import { ScrollView, View ,Text} from "react-native";
import '../lib/dayjs'
import { useRoute } from "@react-navigation/native";
import { BackButton } from "../components/BackButton";
import dayjs from "dayjs";
import { ProgressBar } from "../components/ProgressBar";
import { CheckBox } from "../components/CheckBox";
interface Params {
    date: string;
}
export function Habit(){
    const route = useRoute();
    const {date} = route.params as Params;
    console.log(date)
    const parsedDate = dayjs(date);
    const dayOfWeek = parsedDate.format('dddd');
    const dayAndMonth= parsedDate.format("DD/MM");
    return(
        <View className="flex-1 bg-background px-8 pt-16">
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{paddingBottom:100}}
            >
                <BackButton/>
                <Text className="text-zinc-400 mt-6 font-semibold text-base lowercase">
                    {dayOfWeek}
                </Text>
                <Text  className="text-white font-extrabold text-3l=xl">
                    {dayAndMonth}
                </Text>
                <ProgressBar
                progress={80}
                />
                <View>
                    <CheckBox
                    title="beber 2L de agua"
                    checked={true}
                    />
                    <CheckBox
                        title="ir ao gym"
                        checked={false}
                    />
                       <CheckBox
                        title="exercicio python"
                        checked={false}
                    />
                       <CheckBox
                        title="exercicio JS"
                        checked={true}
                    />

                    <CheckBox 
                    title="Beijar mor"
                    checked={true}/>
                </View>
            </ScrollView>

        </View> 
    )
  
}