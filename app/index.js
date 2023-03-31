import { Text, TextInput, View, ScrollView, SafeAreaView } from "react-native";
import { Stack, useRouter } from "expo-router";

const Homepage = () => {

    const router = useRouter();

    return (
        <SafeAreaView style={{flex:1, backgroundColor:"#FFFFFF"}}>
            <Stack.Screen
            options={{
                headerStyle:{backgroundColor:"#FFC0CB"},
                headerTitle: "Driver App",
            }}
            />
            <TextInput style={{
                height:40, 
                color:"#808080", 
                width:"50%", 
                textAlign:"center",
                marginLeft:"25%",
                justifyContent:"center",
                marginTop:"30%",
                borderRadius:"30px",
                borderColor:"#FFC0CB",
                borderWidth:2,
            }}
                placeholderTextColor="gray"
                placeholder="Type here"
                defaultValue=""/>
        </SafeAreaView>
    )
}

export default Homepage;