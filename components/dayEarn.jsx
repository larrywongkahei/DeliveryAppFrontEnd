import { SafeAreaView, Text, View, TouchableOpacity, ScrollView, Animated, Touchable } from "react-native";
import { useState, useEffect, useRef } from "react";
import styles from "../style.style";

const DayEarn = props => {

    const showSlipCount = Object.keys(props.slipsCountDict).sort().map((each, index) => {
        return (
            <View key={index} style={{justifyContent:'center', alignItems:'center', gap:12}}>
                <Text style={{fontSize:18}}>
                    {each}:
                </Text>
                <Text>
                    {props.slipsCountDict[each]}
                </Text>
            </View>
        )
    })

    return(

        <View style={{backgroundColor:"#FFC0CB", height:'100%', justifyContent:'space-around'}}>
            <Text style={{alignSelf:'center', fontSize:20}}>
                Slips Count: 
            </Text>
                <View style={{flexDirection:'row', justifyContent:'space-evenly'}}>
                    {showSlipCount}
                </View>
                <Text style={{textAlign:'center', fontSize:20, marginTop:16}}>
                    Slips Total = £  {props.slipsTotal}
                </Text>
                <Text style={{textAlign:'center', fontSize:20, marginTop:16}}>
                    Tips count: £  {(props.totalEarning - props.slipsTotal).toFixed(1)}
                </Text>
                <Text style={{textAlign:'center', fontSize:20, marginTop:16}}>
                    Today's earn: £  {props.totalEarning.toFixed(1)}
                </Text>
        </View>
    )
}

export default DayEarn;