import { View,Text } from "react-native"
import { Header } from "../components/Header"
import { generateDatesFromYearBeginning } from "../lib/utils/generate-dates-from-year-beginning"
import { HabitDay, DAY_SIZE } from "../components/HabitDay"

const weekDays =['D', 'S', 'T', 'Q', 'Q','S','S']
const datesFromYearStart = generateDatesFromYearBeginning()

export default function Home(){
    return(
        <View className="flex-1 bg-background px-8 pt-16">
            <Header/>
                <View className="flex-row mt-6 mb-2">
                    {
                        weekDays.map((weekday ,i) =>
                           (
                            <Text key={`${weekday} - ${i}`}
                                className="text-zinc-400 text-xl font-bold text-center mx-1"
                                style={{width:DAY_SIZE}}
                            >
                                {weekday}
                            </Text>
                           )
                        )
                    }
                </View>

                <View className="flex-row flex-wrap">
                    {
                        datesFromYearStart.map(date =>(
                            <HabitDay
                                key={date.toISOString()}
                            />

                        ))
                    }
                </View>
        
        </View>
    )



}



