import { Stack } from "expo-router";
import { SafeAreaView, Text, View, TouchableOpacity } from "react-native";
import { useState, useEffect } from "react";
import styles from "../style.style";

const SignUpForm = () => {

    const [mon, setMon] = useState({day:"Monday", value:false})
    const [tue, setTue] = useState({day:"Tuesday", value:false})
    const [wed, setWed] = useState({day:"Wednesday", value:false})
    const [thu, setThu] = useState({day:"Thursday", value:false})
    const [fri, setFri] = useState({day:"Friday", value:false})
    const [sat, setSat] = useState({day:"Saturday", value:false})
    const [sun, setSun] = useState({day:"Sunday", value:false})
    const dayList = [mon, tue, wed, thu, fri, sat, sun]
    const numberToDay = {
        1 : "Monday",
        2 : "Tuesday",
        3 : "Wednesday",
        4 : "Thursday",
        5 : "Friday",
        6 : "Saturday", 
        7 : "Sunday"
    }
    const [dataToShow, setData] = useState([])
    console.log(dataToShow)

    useEffect(()=> {
        const newData = []
        dayList.forEach(each => {
            if (each.value) {
                newData.push(each.day)
            }
        })
        setData(newData)

    }, [mon, tue, wed, thu, fri, sat, sun])

    return (
        <SafeAreaView style={{}}>
            <View style={{
                borderBottomWidth:0.5,
            }}>
                <Text style={{textAlign:"center", marginTop:30, fontSize:"large"}}>
                    Please choose the days you work
                </Text>
                <View style={{
                    flex:1, 
                    flexDirection:"row",
                    justifyContent:"space-evenly",
                    marginTop:30,
                    marginBottom:40,
                }}>
                    <TouchableOpacity onPress={() => {
                        const newData = {...mon}
                        newData.value = !mon.value
                        setMon(newData)
                }}>
                        <Text style={[mon.value? styles.days : styles.daysChoosen ]}>                        
                            Mon
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {
                        const newData = {...tue}
                        newData.value = !tue.value
                        setTue(newData)
                    }}>
                        <Text style={[!tue.value? styles.days : styles.daysChoosen ]}>                                                
                            Tue
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {
                        const newData = {...wed}
                        newData.value = !wed.value
                        setWed(newData)
                    }}>
                        <Text style={[!wed.value? styles.days : styles.daysChoosen ]}>                                         
                            Wed
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {
                        const newData = {...thu}
                        newData.value = !thu.value
                        setThu(newData)
                    }}>
                        <Text style={[!thu.value? styles.days : styles.daysChoosen ]}>                                         
                            Thu
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {
                        const newData = {...fri}
                        newData.value = !fri.value
                        setFri(newData)
                    }}>
                        <Text style={[!fri.value? styles.days : styles.daysChoosen ]}>                                           
                            Fri
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {
                        const newData = {...sat}
                        newData.value = !sat.value
                        setSat(newData)
                    }}>
                        <Text style={[!sat.value? styles.days : styles.daysChoosen ]}>                                           
                            Sat
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {
                        const newData = {...sun}
                        newData.value = !sun.value
                        setSun(newData)}}>
                        <Text style={[!sun.value? styles.days : styles.daysChoosen ]}>                        
                            Sun
                        </Text>
                    </TouchableOpacity>
                </View>
                <Text style={{textAlign:"center", marginTop:60, fontSize:"small", marginBottom:20}}>
                    If your work day is not fixed, press skip
                </Text>
            </View>
            {/* <View>
                {dataToShow.map(each => {
                    return (
                        <View>
                            <Text style={{textAlign:"center"}}>
                                {each.day}
                            </Text>
                        </View>
                    )
                })}
            </View> */}
        </SafeAreaView>
    )
}

export default SignUpForm