import { SafeAreaView, Text, View, TouchableOpacity, Image } from "react-native";
import { Stack, useRouter, useSearchParams } from "expo-router";
import API from "../helpers/APIs";
import styles from "../style.style";
import { useState } from "react";
import ChooseTodayWork from "../components/chooseTodayWork";
import { add } from "react-native-reanimated";

const Shops = () =>{
    const router = useRouter()
    const params = useSearchParams()
    const date = new Date
    const theDate = date.toISOString().slice(0, 10)

    function handleNav(shopName){
        router.replace({pathname:'/home', params:{
            shop: shopName,
            name:params.name,
            date: theDate
            
        }})
    }

    async function addToLog(data){
        await API.AddToLog(data)
        handleNav(data.data.shop)

    }

    return (
        <SafeAreaView>
            <Stack.Screen 
            options={{
                headerStyle:{backgroundColor:"#FFC0CB"},
                headerTitle:"Shops"
            }}
            />
            <ChooseTodayWork handleNav={handleNav} theDate={theDate} addToLog={addToLog} name={params.name}/>
        </SafeAreaView>
    )
}

export default Shops;