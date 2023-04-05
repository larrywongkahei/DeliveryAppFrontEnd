import { Stack } from "expo-router";
import { SafeAreaView, Text, TouchableOpacity } from "react-native";
import { View } from "react-native-web";
import { useState } from "react";
import styles from "../style.style";

const SignUpForm = () => {

    const [mon, setMon] = useState(true)
    const [tue, setTue] = useState(true)
    const [wed, setWed] = useState(true)
    const [thu, setThu] = useState(true)
    const [fri, setFri] = useState(true)
    const [sat, setSat] = useState(true)
    const [sun, setSun] = useState(true)

    return (
        <SafeAreaView style={{}}>
            <View style={{
                borderBottomWidth:0.5,
                paddingBottom:0
            }}>
                <Text style={{textAlign:"center", marginTop:30, fontSize:"large"}}>
                    Please choose the days you work
                </Text>
                <View style={{
                    flex:1, 
                    flexDirection:"row",
                    justifyContent:"space-evenly",
                    marginTop:20
                }}>
                    <TouchableOpacity onPress={() => {setMon(!mon)}}>
                        <Text style={[mon? styles.days : styles.daysChoosen ]}>                        
                            Mon
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {setTue(!tue)}}>
                        <Text style={[tue? styles.days : styles.daysChoosen ]}>                                                
                            Tue
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {setWed(!wed)}}>
                        <Text style={[wed? styles.days : styles.daysChoosen ]}>                                         
                            Wed
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {setThu(!thu)}}>
                        <Text style={[thu? styles.days : styles.daysChoosen ]}>                                         
                            Thu
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {setFri(!fri)}}>
                        <Text style={[fri? styles.days : styles.daysChoosen ]}>                                           
                            Fri
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {setSat(!sat)}}>
                        <Text style={[sat? styles.days : styles.daysChoosen ]}>                                           
                            Sat
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {setSun(!sun)}}>
                        <Text style={[sun? styles.days : styles.daysChoosen ]}>                        
                            Sun
                        </Text>
                    </TouchableOpacity>
                </View>
                <Text style={{textAlign:"center", marginTop:30, fontSize:"small"}}>
                    If your work day is not fixed, press skip
                </Text>
            </View>
        </SafeAreaView>
    )
}

export default SignUpForm