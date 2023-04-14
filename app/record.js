import { SafeAreaView, Text, View, TouchableOpacity, ScrollView, Animated, Touchable } from "react-native";
import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "expo-router";
import { useRouter } from "expo-router";
import API from "../helpers/APIs";
import styles from "../style.style";

const Records = () => {

    const [allDeliveries, setAllDeliveries] = useState([])
    const numberToMonth = {
        '01':'January', 
        '02':'February', 
        '03':'March', 
        '04':'April', 
        '05':'May', 
        '06':'June', 
        '07':'July', 
        '08':'August', 
        '09':'September', 
        '10':'October', 
        '11':'November', 
        '12':'December'
    }
    const params = useSearchParams()
    const router = useRouter()


    useEffect(() => {
        API.GetUser(params.name)
        .then(response => response.json())
        .then(data => setAllDeliveries(data.deliveries))
    
    }, [])

    const list = [1, 2, 3, 4, 5, 6, 7, 8,9, 0, 0, 0, 0, 0, 0, 0]
    return (
        <SafeAreaView style={{}}>
            <ScrollView style={{height:'77%'}} stickyHeaderIndices={[0]}>
            {allDeliveries?.map((each, index) => {
                return(
                    <View >
                        <Text key={index}>
                            hi
                        </Text>
                        <TouchableOpacity style={{backgroundColor:'#FFFFFF', paddingTop:20, paddingBottom:20, marginTop:5, marginBottom:10, shadowColor: "#171717", shadowOpacity: 0.25, shadowRadius: 3.47, shadowOffset: {width: 0, height: 3}}}  onPress={()=>{router.push({pathname:'/showRecord', params:{'date':each.date, 'name':params.name}})}}>
                            <Text style={{width:'100%', textAlign:'center'}}>
                                {each.date}
                            </Text>
                        </TouchableOpacity>
                    </View>
                )
            })}
            </ScrollView>
        </SafeAreaView>
    )
}

export default Records;