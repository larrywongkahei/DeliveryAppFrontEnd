import { SafeAreaView, Text, TouchableOpacity } from "react-native";
import { Stack, useRouter } from "expo-router";
import { View } from "react-native-web";

const shops = () =>{
    const router = useRouter()

    function handleNav(name){
        router.push({pathname:'/home', params:{
            shop: name
        }})
    }

    return (
        <SafeAreaView style={{flex:0, marginVertical:'auto'}}>
            <Stack.Screen 
            options={{
                headerStyle:{backgroundColor:"#FFC0CB"},
                headerTitle:"Shops"
            }}
            />
            <View style={{flexDirection:"row", gap:10, justifyContent:"center"}}>
                <TouchableOpacity onPress={()=>handleNav('BurgerMeatGrill')}>
                    <Text>
                        First shop image
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>handleNav('Happy House')}>
                    <Text>
                        Second shop image
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>handleNav('New Orchid Garden')}>
                    <Text>
                        Third shop image
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default shops;