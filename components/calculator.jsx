import { SafeAreaView, Text, View, TouchableOpacity, ScrollView, Animated, Touchable } from "react-native";
import { useState, useEffect, useRef } from "react";
import styles from "../style.style";
import { Picker } from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/FontAwesome';


const Calculator = props => {
    const priceList = props.list
    const listBelow10 = []

    const [selectedValue, setSelectedValue] = useState()
    const [showCal, setShowCal] = useState(true)
    const [valueToAdd, setValueToAdd] = useState(0)

    const [position, setPosition] = useState(new Animated.Value(0));

    function showTheCal () {
        setShowCal(!showCal)
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

    for (let i = 0.1; i <= 6; i = i + 0.1) {
        if (i.toFixed(1) - Math.floor(i.toFixed(1)) == 0) {
            listBelow10.push(
                <Picker.Item label={"£" + (i).toFixed(0)} value={i} />
            )
        } else {
            listBelow10.push(
                <Picker.Item label={"£" + (i).toFixed(1)} value={i} />
            )
        }
    }


    return (
        <SafeAreaView style={{justifyContent:'flex-end', height:'141%'}}>
            {showCal ? 
            <TouchableOpacity onPress={showTheCal} style={{ alignItems:'center'}}>
                <Icon name="plus-circle" size={80}/>
            </TouchableOpacity> : null }
            <Animated.View style={{ transform: [{ translateY: position }], marginTop:30}}>
                <View style={{ backgroundColor: '#000000', flexDirection: 'row-reverse', marginLeft: 10, marginRight: 10}}>
                    <Text numberOfLines={1} style={{ fontSize: 40, color: "#FFC0CB", width: '80%', height: '100%', paddingTop: 25, paddingBottom: 25, textAlign:'right', marginRight:30}}>
                        {valueToAdd}
                    </Text>
                </View>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row', paddingBottom: 20 }}>
                    <View style={{ flexDirection: 'row', width: '65%', justifyContent: 'space-evenly', flexWrap: 'wrap' }}>
                        {priceList?.map((each, index) => {
                            return (
                                <TouchableOpacity key={index} style={{ width: '35%', borderRadius: '100%', backgroundColor: '#FF5733', marginTop: 50, paddingTop: 39, paddingBottom: 39 }} onPress={() => setValueToAdd(valueToAdd + each)}>
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