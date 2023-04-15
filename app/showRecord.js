import { SafeAreaView, Text, View, TouchableOpacity, ScrollView, Animated, Touchable } from "react-native";
import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "expo-router";
import API from "../helpers/APIs";
import styles from "../style.style";

const ShowRecord = () => {

    const [dataOfDate, setDataOfDate] = useState({})
    const params = useSearchParams()
    const deliveryFeeList = [1.5, 2, 2.5, 3, 3.5, 4, 4.5]
    const [slipsCountDict, setSlipsCountDict] = useState([])

    useEffect(()=>{
        API.GetUser(params.name)
        .then(response => response.json())
        .then(data => {
            const allDeliveries = data.deliveries
            const theDate = allDeliveries.find(each => each.date === params.date)
            setDataOfDate(theDate)
            getSlipsCount(theDate)
        })
    }, [])

    function getSlipTotal(data){
        let slipTotal = 0
        for (each in data){
            if (+each !== 0){
                slipTotal += (+each) * data[each]
            }
        }
        return slipTotal
    }

    async function getSlipsCount(theDate){
    const slipsDict = {}
    deliveryFeeList.forEach(each => {
        slipsDict[each] = 0
    })
    const allDeliveries = theDate.deliveries
    allDeliveries?.forEach(each => {
        if(each.slip !== 0){
            slipsDict[String(each.slip)] += 1
        }
    })
    setSlipsCountDict(slipsDict)
}

    const showSlipCount = Object.keys(slipsCountDict).sort().map(each => {
        return (
            <View style={{alignItems:'center'}}>
                <Text style={{fontSize:18}}>
                    £{each}
                </Text>
                <Text style={{fontSize:15}}>
                    {slipsCountDict[each]}
                </Text>
            </View>
        )
    })

    return (
        <View style={{alignItems:'center', marginTop:'50%', backgroundColor:'#FFC0CB'}}>
            <Text style={{marginTop:10, fontSize:15}}>
                {params.date}
            </Text>
            <Text style={{marginTop:40, fontSize:20}}>
                {dataOfDate?.shop}
            </Text>
            <View style={{flexDirection:'row', justifyContent:'space-evenly', width:'100%', marginTop:20}}>
                {showSlipCount}
            </View>
            <Text style={{marginTop:40, fontSize:20}}>
                Slip total : £{getSlipTotal(slipsCountDict)}
            </Text>
            <Text style={{marginTop:40, fontSize:20}}>
                Tips : £{(dataOfDate.total - getSlipTotal(slipsCountDict)).toFixed(1)}
            </Text>
            <Text style={{marginTop:40, fontSize:30, alignSelf:'flex-end', marginRight:15}}>
                Total : £{dataOfDate.total}
            </Text>
        </View>
    )
}

export default ShowRecord;