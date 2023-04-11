import { SafeAreaView, Text, View, TouchableOpacity, ScrollView, Animated, Touchable } from "react-native";
import { useState, useEffect, useRef } from "react";
import styles from "../style.style";

const DayEarn = props => {

    console.log(props.totalEarning)



    return(

        <View style={{backgroundColor:"#FFC0CB", height:'100%'}}>
            <Text style={{alignSelf:'center', fontSize:20}}>
                Slips Count: 
            </Text>
                <View style={{flexDirection:'row', justifyContent:'space-evenly'}}>
                {Object.keys(props.slipsCountDict).sort().map(each => {
                    return (
                        <View style={{justifyContent:'center', alignItems:'center', gap:12}}>
                            <Text style={{fontSize:18}}>
                                {each}:
                            </Text>
                            <Text>
                                {props.slipsCountDict[each]}
                            </Text>
                        </View>
                    )
                })}
                </View>
                <Text style={{textAlign:'center', fontSize:18, marginTop:16}}>
                    Slips Total = £  {props.slipsTotal}
                </Text>
                <Text>
                    Tips count: {}
                </Text>
                <Text>
                    Today's earn: £  {props.totalEarning}
                </Text>
        </View>
    )
}

export default DayEarn;