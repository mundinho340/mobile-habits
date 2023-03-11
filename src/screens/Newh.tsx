import { useState } from "react";
import { View , Text, TextInput} from "react-native";
import {ScrollView} from 'react-native'
import { BackButton } from "../components/BackButton";
import { CheckBox } from "../components/CheckBox";


export function Newh(){
    const [weekDays, setWeekDays]= useState<number[]>([])
    function handleToggleWeekDay(weekDayIndex:number){
        if(weekDays.includes(weekDayIndex)){
            setWeekDays(prevState => prevState.filter(weekDay => weekDay !== weekDayIndex))
    }else{
        setWeekDays(prevState => [...prevState, weekDayIndex])
    }
    }
    const availableWeekDays = ["Domingo","Segunda-feira","Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sabado"]
    return(
          <View className="flex-1 bg-background px-8 pt-16">
                <ScrollView showsVerticalScrollIndicator={false}>
                    <BackButton/>

                    <Text className="mt-6 text-white font-extrabold text-3xl">
                        Criar hábito                      
                    </Text>

                      <Text className="mt-6 text-white font-semibold text-base">
                        Qual é o seu comportamento
                    </Text>

                    <TextInput
                        className="h-12 pl-4 rounded-lg mt-3 bg-zinc-800 text-white focus:border-2 focus:border-green-600"
                    />
                    <Text className="font-semibold mt-4 mb-3 text-white text-base">
                        Qual é a recorrência?
                    </Text>
                    {
                        availableWeekDays.map((weekDay, index)=>(
                        <CheckBox   
                        key={weekDay}
                        title={weekDay}
                        checked={weekDays.includes(index)}
                        onPress={()=>handleToggleWeekDay(index)}
                    />
                        ))
                    }
                    
                </ScrollView>
         </View> 
    )
  
} 