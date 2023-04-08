import { SafeAreaView, Text, View, TouchableOpacity, Image } from "react-native";
import { Stack, useRouter } from "expo-router";

const Shops = () =>{
    const router = useRouter()

    function handleNav(name){
        router.push({pathname:'/home', params:{
            shop: name
        }})
    }

    return (
        <SafeAreaView style={{flex:0, alignItems:'center', marginTop:'25%', marginBottom:'auto'}}>
            <Stack.Screen 
            options={{
                headerStyle:{backgroundColor:"#FFC0CB"},
                headerTitle:"Shops"
            }}
            />
            <View style={{}}>
                <Text style={{fontSize:20}}>
                    Today is not your ususal workday, please choose a shop for today.
                </Text>
            </View>
            <View style={{flex:0, flexDirection:"row", gap:10, justifyContent:'space-evenly', alignItems:'center', marginTop:150, width:'100%'}}>
                <TouchableOpacity onPress={()=>handleNav('BurgerMeatGrill')}>
                    <Image source={require('../images/BurgerMeatsGrill.png')}/>

                </TouchableOpacity>

                <TouchableOpacity onPress={()=>handleNav('Happy House')}>
                    <Text>
                        HH
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>handleNav('New Orchid Garden')}>
                    <Text>
                        NOG
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default Shops;