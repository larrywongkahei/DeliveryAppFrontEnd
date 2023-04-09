import { SafeAreaView, Text, View, TouchableOpacity, ScrollView, Animated, Touchable } from "react-native";
import { useState, useEffect, useRef } from "react";
import styles from "../style.style";
import { Picker } from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import API from "../helpers/APIs";


const Calculator = props => {
    const priceList = props.list
    const listBelow10 = []

    const [selectedValue, setSelectedValue] = useState(0)
    const [showCal, setShowCal] = useState(true)
    const [valueToAdd, setValueToAdd] = useState(0)
    const [totalToAdd, setTotalToAdd] = useState(0)
    const [slipsCountArray, setSlipsCountArray] = useState([])

    useEffect(()=>{
        setTotalToAdd(valueToAdd + (+selectedValue))
    }, [valueToAdd, selectedValue])

    const [position, setPosition] = useState(new Animated.Value(0));

    function handleAddToLog(){
        const date = new Date
        const theDate = date.toISOString().slice(0, 10)
        const theTime = date.toISOString().slice(11, 19)
        const data = {
            'name': props.name,
            'data' : {
                'shop' : props.shop,
                'shift' : props.shift,
                'date' : theDate,
                'deliveries': [{
                    'time': theTime,
                    'slip': valueToAdd,
                    'tips': (+selectedValue),
                    'total': totalToAdd
            }]
            }
            }
            showTheCal()
            getSlipsCount()
            if(totalToAdd !== 0){
                props.addToLog(data)
            }
        }

    function showTheCal () {
        setShowCal(!showCal)
        setSelectedValue(0)
        setTotalToAdd(0)
        setValueToAdd(0)
        if(showCal){
            Animated.spring(position, {
                toValue: -450,
                speed:5,
                useNativeDriver: true,
        }).start()
        }else{
            Animated.spring(position, {
                toValue: 500,
                speed:5,
                useNativeDriver: true,
        }).start()
        }
    }

    async function getSlipsCount(){
        const response = await API.GetUser(props.name)
        const data = await response.json()
        const slipsDict = {}
        priceList.forEach(each => {
            slipsDict[each] = 0
        })
        const allDeliveries = data.deliveries[0].deliveries
        allDeliveries.forEach(each => {
            slipsDict[each.slip] += 1
        })
        setSlipsCountArray(slipsDict)
    }

    for (let i = 0.1; i <= 6; i = i + 0.1) {
        if (i.toFixed(1) - Math.floor(i.toFixed(1)) == 0) {
            listBelow10.push(
                <Picker.Item label={"£" + (i).toFixed(0)} value={(i).toFixed(0)} />
            )
        } else {
            listBelow10.push(
                <Picker.Item label={"£" + (i).toFixed(1)} value={(i).toFixed(1)} />
            )
        }
    }


    return (
        <SafeAreaView style={{}}>

            {/* Add Icon */}
            {showCal ? 
            <TouchableOpacity onPress={showTheCal} style={{ alignItems:'center', paddingBottom:30}}>
                <Icon name="plus-circle" size={80}/>
            </TouchableOpacity> : 
            <View>

            </View>
            }

            {/* Monitor */}
            <Animated.View style={{ transform: [{ translateY: position }], marginTop:30}}>
                <View style={{width:'100%', backgroundColor:'#000000'}}>
                    <View style={{ backgroundColor: '#000000', flexDirection: 'row', justifyContent:'space-between'}}>
                        <View style={{alignItems:'center'}}>
                            <Text style={{ fontSize: 20, color: "#FFC0CB", paddingTop: 15, paddingBottom: 15, marginLeft:30}}>
                                Slip:
                            </Text>
                            <Text style={{ fontSize: 20, color: "#FFC0CB", paddingTop: 15, paddingBottom: 15, marginLeft:30}}>
                                £{valueToAdd}
                            </Text>
                        </View>

                        <View style={{alignItems:'center'}}>
                            <Text style={{ fontSize: 20, color: "#FFC0CB", paddingTop: 15, paddingBottom: 15}}>
                                Tips:
                            </Text>
                            <Text style={{ fontSize: 20, color: "#FFC0CB", paddingTop: 15, paddingBottom: 15}}>
                                £{selectedValue}
                            </Text>
                        </View>

                        <View style={{alignItems:'center'}}>
                            <Text style={{ fontSize: 20, color: "#FFC0CB", paddingTop: 15, paddingBottom: 15}}>
                                Total:
                            </Text>
                            <Text style={{ fontSize: 20, color: "#FFC0CB", paddingTop: 15, paddingBottom: 15}}>
                                £{totalToAdd}
                            </Text>
                        </View>

                        <TouchableOpacity style={{backgroundColor:"#FFFF00", paddingLeft:50, paddingRight:50, justifyContent:'center'}} onPress={handleAddToLog}>
                            <Text>
                                Add
                            </Text>
                        </TouchableOpacity>
                    </View>  
                </View>

                {/* Buttons */}
                <View style={{ justifyContent: 'space-between', flexDirection: 'row', paddingBottom: 20 }}>
                    <View style={{ flexDirection: 'row', width: '69%', justifyContent: 'space-evenly', flexWrap: 'wrap' }}>
                        {priceList?.map((each, index) => {
                            return (
                                <TouchableOpacity key={index} style={{ width: '35%', borderRadius: '100%', backgroundColor: '#FF5733', marginTop: 50, paddingTop: 39, paddingBottom: 39 }} onPress={() => setValueToAdd(each)}>
                                    <Text style={{ textAlign: 'center' }}>
                                        {each}
                                    </Text>
                                </TouchableOpacity>
                            )
                        })}
                    </View>

                    <View style={{ width: '25%', backgroundColor: '#FFC0CB', borderRadius: 40, height: '100%', marginTop: 30, marginRight: 25 }}>
                        <Picker selectedValue={selectedValue} onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
                            {listBelow10}
                        </Picker>
                    </View>
                </View>
            </Animated.View>
        </SafeAreaView>
    )
}

export default Calculator;