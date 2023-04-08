import { SafeAreaView, Text, View, TouchableOpacity, ScrollView } from "react-native";
import { useState } from "react";
import styles from "../style.style";
import { Picker } from '@react-native-picker/picker';

const Calculator = props => {
    const priceList = props.list
    const listBelow10 = []
    for(let i = 0.1; i <= 6; i = i + 0.1){
        if(i.toFixed(1) - Math.floor(i.toFixed(1)) == 0){
            listBelow10.push(
                <Picker.Item label={"£"+(i).toFixed(0)} value={i} />
            )
        }else{
            listBelow10.push(
                <Picker.Item label={"£"+(i).toFixed(1)} value={i} />
        )}
    }
    const [selectedValue, setSelectedValue] = useState()

    return (
        <SafeAreaView style={{flex:0, justifyContent:'flex-end', height:'100%'}}>
            <View>
                
            </View>
            <View style={{backgroundColor:'#000000', justifyContent:'flex-end', flexDirection:'row', marginLeft:10, marginRight:10}}>
                <Text numberOfLines={1} style={{fontSize:40, color:"#FFC0CB", width:'80%', height:'100%', paddingTop:25, paddingBottom:25}}>
                    123ashfjlkahlsjkehflkajsehf
                </Text>
            </View>
            <View style={{justifyContent:'space-between', flexDirection:'row', paddingBottom:20}}>
                <View style={{flexDirection:'row',width:'65%',justifyContent:'space-evenly', flexWrap:'wrap'}}>
                    {priceList?.map((each, index) => {
                        return (
                            <TouchableOpacity key={index} style={{width:'35%', borderRadius:'100%', backgroundColor:'#FF5733', marginTop:50, paddingTop:39, paddingBottom:39}}>
                                <Text style={{textAlign:'center'}}>
                                    {each}
                                </Text>
                            </TouchableOpacity>
                        )
                    })}
                </View>
                <View style={{width:'25%', backgroundColor:'#FFC0CB', borderRadius:40, height:'100%', marginTop:30, marginRight:25}}>
                    <Picker selectedValue={selectedValue} onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
                        {listBelow10}
                    </Picker>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Calculator;