import { SafeAreaView, Text, View, TouchableOpacity, ScrollView, Image } from "react-native";
import { Stack, useRouter, useSearchParams } from "expo-router";
import { useState } from "react";
import styles from "../style.style";
import { add } from "react-native-reanimated";

const ChooseTodayWork = props => {

    const BMG = {'name':'BMG', 'Full' : "17:00 - 23:00", 'Half' : "17:30 - 21:30"}
    const NOG = {'name':'NOG', 'Full' : "16:30 - 23:00", 'Half' : "16:00 - 21:00"}
    const HH = {'name':'HH', 'Full' : "16:30 - 23:00", 'Half' : "16:00 - 21:00"}

    const [shopChosen, setShopChosen] = useState("")
    const [shiftChosen, setShiftChosen] = useState("")

    const data = {
        'name': props.name,
        'data' : {
            'shop': shopChosen,
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
                <TouchableOpacity onPress={() => setShopChosen('BMG')}>
                    <Image source={require('../images/BurgerMeatsGrill.png')} />

                </TouchableOpacity>

                <TouchableOpacity onPress={() => setShopChosen('HH')}>
                    <Text>
                        HH
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setShopChosen('NOG')}>
                    <Text>
                        NOG
                    </Text>
                </TouchableOpacity>
            </View>
            {shopChosen ?
            <View style={{flex:0, flexDirection:'row', gap:20}}>
                <TouchableOpacity style={[shiftChosen === "Full" ? styles.shiftButtonChosen : styles.shiftButton]} onPress={()=>{setShiftChosen('Full')}}>
                    <Text>
                        Full
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={[shiftChosen === "Half" ? styles.shiftButtonChosen : styles.shiftButton]} onPress={()=>{setShiftChosen('Half')}}>
                    <Text>
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