import { Stack } from "expo-router";
import { SafeAreaView, Text, View, TouchableOpacity, ScrollView } from "react-native";
import { useState, useEffect } from "react";
import ShowData from "../components/showData";
import ShowDays from "../components/showDays";
import styles from "../style.style";

const SignUpForm = () => {

    const [mon, setMon] = useState({day:"Mon", value:false, shift:"", shopChosen:""})
    const [tue, setTue] = useState({day:"Tue", value:false, shift:"", shopChosen:""})
    const [wed, setWed] = useState({day:"Wed", value:false, shift:"", shopChosen:""})
    const [thu, setThu] = useState({day:"Thu", value:false, shift:"", shopChosen:""})
    const [fri, setFri] = useState({day:"Fri", value:false, shift:"", shopChosen:""})
    const [sat, setSat] = useState({day:"Sat", value:false, shift:"", shopChosen:""})
    const [sun, setSun] = useState({day:"Sun", value:false, shift:"", shopChosen:""})
    const dayList = [mon, tue, wed, thu, fri, sat, sun]
    const [dataToShow, setData] = useState([])
    const Shops = ["BMG", "HH", "NOG"]


    function updateDataToShow(){
        const newData = []
        dayList.forEach(each => {
            if (each.value) {
                newData.push(each)
            }
        })
        setData(newData)
    }

    function setShowData(data){
        console.log(data)
        setData(data)
    }

    return (
        <SafeAreaView style={{}}>
            <ScrollView>
                <View style={{
                    borderBottomWidth:0.5,
                }}>
                    <Text style={{textAlign:"center", marginTop:30, fontSize:20}}>
                        Please choose the days you work
                    </Text>

                    <ShowDays
                    dayList={dayList}
                    setShowData={setShowData}
                    updateDataToShow={updateDataToShow}
                    dataToShow={dataToShow}
                    mon={mon}
                    tue={tue}
                    wed={wed}
                    thu={thu}
                    fri={fri}
                    sat={sat}
                    sun={sun}
                    />

                    <Text style={{textAlign:"center", marginTop:60, fontSize:13, marginBottom:20}}>
                        If your work day is not fixed, press skip
                    </Text>
                </View>

                <ShowData dataToShow={dataToShow} Shops={Shops} setDataFunction={setShowData} />

            </ScrollView>
        </SafeAreaView>
    )
}

export default SignUpForm