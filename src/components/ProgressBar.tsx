import { View } from "react-native";
interface Props{
    progress?: number;
}
export function ProgressBar({progress=0}: Props){
    <View className="w-full h-3 rounded-xl bg-zinc-700 mt-4">
        <View
            className="w-full h-3 rounded-xl bg-zinc-700 mt-4"
            style={{width: `${progress}`}}
        >
            
        </View>
    </View>
}   