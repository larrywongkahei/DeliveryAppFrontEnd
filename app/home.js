import { SafeAreaView, View, Text } from "react-native";
import { useSearchParams } from "expo-router";
import { Stack } from "expo-router";
import API from "../helpers/APIs";
import Icon from 'react-native-vector-icons/FontAwesome';
import Calculator from "../components/calculator";

const Home = () => {
    const deliveryFeeList = {'BMG' : [2.5, 3, 3.5, 4], "HH" : [1.5, 2, 3, 3.5]}
    const params = useSearchParams()

    function addToLog(data){
        console.log(data)
        API.AddToLog(data)
    }



    return(
        <SafeAreaView style={{flex:0, justifyContent:'flex-end'}}>
            {params?
            <View>
                <Stack.Screen
                options={{
                    headerStyle:{backgroundColor:"#FFC0CB"},
                    headerTitle: params.shop,
                    headerRight:() => (
                        <Icon name="user-circle" size={35}/>
                    )
                }}
                />
            </View>: null}
            <View style={{}}>
                <Calculator list={deliveryFeeList[params.shop]} addToLog={addToLog} name={params.name}/>
            </View>
        </SafeAreaView>
    )
}

export default Home;