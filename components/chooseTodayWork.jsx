import { SafeAreaView, Text, View, TouchableOpacity, ScrollView, Image } from "react-native";
import { Stack, useRouter, useSearchParams } from "expo-router";
import { useState } from "react";
import styles from "../style.style";

const ChooseTodayWork = props => {
    const [shopChosen, setShopChosen] = useState("")
    const [shiftChosen, setShiftChosen] = useState("")
    const changeShopName = {"BMG" : 'BurgerMeatGrill', "HH" : 'Happy House', "NOG" : 'New Orchid Garden'}


    const data = {
        'name': props.name,
        'data' : {
            'shop': changeShopName[shopChosen],
            'shift': shiftChosen,
            'date' : props.theDate,
            'deliveries': []
        }
        }

    function addLog(){
        props.addToLog(data)
    }


    return (
        <View style={{flex:0, alignItems:'center', marginTop:'25%', marginBottom:'auto'}}>
            <View style={{}}>
                <Text style={{ fontSize: 20 }}>
                    Today is not your ususal workday, please choose a shop for today.
                </Text>
            </View>
            <View style={styles.shopsBtn}>
                <TouchableOpacity onPress={() => setShopChosen('BMG')} style={[shopChosen === 'BMG' ? styles.shopChosen : styles.shopButton]}>
                    <Text style={{textAlign:'center'}}>
                        BMG
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setShopChosen('HH')} style={[shopChosen === 'HH' ? styles.shopChosen : styles.shopButton]}>
                    <Text style={{textAlign:'center'}}>
                        HH
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setShopChosen('NOG')} style={[shopChosen === 'NOG' ? styles.shopChosen : styles.shopButton]}>
                    <Text style={{textAlign:'center'}}>
                        NOG
                    </Text>
                </TouchableOpacity>
            </View>
            {shopChosen ?
            <View style={{flex:0, flexDirection:'row', gap:20, textAlign:'center'}}>
                <TouchableOpacity style={[shiftChosen === "Full" ? styles.shiftButtonChosen : styles.shiftButton]} onPress={()=>{setShiftChosen('Full')}}>
                    <Text style={styles.shiftText}>
                        Full
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={[shiftChosen === "Half" ? styles.shiftButtonChosen : styles.shiftButton]} onPress={()=>{setShiftChosen('Half')}}>
                    <Text style={styles.shiftText}>
                        Half
                    </Text> 
                </TouchableOpacity>
            </View> : null }
            <TouchableOpacity style={{marginTop:20}} onPress={addLog}>
                <Text>
                    Confirm
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default ChooseTodayWork;