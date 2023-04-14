import { SafeAreaView, Text, View, TouchableOpacity, ScrollView, Animated, Touchable } from "react-native";
import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "expo-router";
import { useRouter } from "expo-router";
import API from "../helpers/APIs";
import styles from "../style.style";

const Records = () => {

    const [allDeliveries, setAllDeliveries] = useState([])
    const params = useSearchParams()
    const router = useRouter()


    useEffect(() => {
        API.GetUser(params.name)
        .then(response => response.json())
        .then(data => setAllDeliveries(data.deliveries))
    
    }, [])

    return (
        <SafeAreaView style={{}}>
            <ScrollView>
            {allDeliveries?.map((each, index) => {
                return(
                <View key={index} style={{alignItems:'center', backgroundColor:'#FFFFFF', paddingTop:20, paddingBottom:20,marginTop:5, marginBottom:10, shadowColor: "#171717", shadowOpacity: 0.25, shadowRadius: 3.47, shadowOffset: {width: 0, height: 3}}}>
                    <Text onPress={()=>{router.push({pathname:'/showRecord', params:{'date':each.date, 'name':params.name}})}}>
                        {each.date}
                    </Text>
                </View>
                )
            })}
            </ScrollView>
        </SafeAreaView>
    )
}

export default Records;