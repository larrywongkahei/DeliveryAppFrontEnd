import { View, Text, SafeAreaView } from "react-native";
import { Stack } from "expo-router";
const Newpage = () =>{
    return (
        <SafeAreaView>
            <Stack.Screen 
            options={{
                headerStyle:{backgroundColor:"#FFC0CB"},
                headerTitle:"Signup"
            }}
            />
            <Text>
                Hi
            </Text>
        </SafeAreaView>
    )
}

export default Newpage;