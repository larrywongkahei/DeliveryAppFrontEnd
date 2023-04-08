import { SafeAreaView, View, Text } from "react-native";
import { useSearchParams } from "expo-router";
import { useState, useEffect } from "react";
import { Stack } from "expo-router";
import API from "../helpers/APIs";
import Icon from 'react-native-vector-icons/FontAwesome';
import Calculator from "../components/calculator";
import WorkLog from "../components/workLog";

const Home = () => {
    const deliveryFeeList = {'BMG' : [2.5, 3, 3.5, 4], "HH" : [1.5, 2, 3, 3.5], "NOG" : [2.5, 3, 3.5, 4]}
    const params = useSearchParams()
    const [workLog, setWorkLog] = useState([])

    useEffect(() => {
        API.GetUser(params.name)
        .then(response => response.json())
        .then(data => {setWorkLog(data.deliveries)})
    }, [])

    function addToLog(data){
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
            <View>
                <WorkLog />
            </View>
            <View style={{}}>
                <Calculator list={deliveryFeeList[params.shop]} addToLog={addToLog} name={params.name}/>
            </View>
        </SafeAreaView>
    )
}

export default Home;