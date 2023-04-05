import { Stack } from "expo-router";
import { SafeAreaView, Text, TouchableOpacity } from "react-native";
import { View } from "react-native-web";
import { useState } from "react";
import styles from "../style.style";

const SignUpForm = () => {

    const [mon, setMon] = useState(false)
    const [tue, setTue] = useState(false)
    const [wed, setWed] = useState(false)
    const [thu, setThu] = useState(false)
    const [fri, setFri] = useState(false)
    const [sat, setSat] = useState(false)
    const [sun, setSun] = useState(false)

    return (
        <SafeAreaView style={{}}>
            <Text style={{textAlign:"center", marginTop:"30px", fontSize:"large"}}>
                Please choose the days you work
            </Text>
            <View style={{
                flex:1, 
                flexDirection:"row",
                justifyContent:"space-evenly",
                marginTop:20
            }}>
                <TouchableOpacity onPress={() => {setMon(!mon)}}>
                    <Text style={styles.days}>                        
                        Mon
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {setTue(!tue)}}>
                    <Text style={styles.days}>                                                
                        Tue
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {setWed(!wed)}}>
                    <Text style={styles.days}>                                         
                        Wed
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {setThu(!thu)}}>
                    <Text style={styles.days}>                                         
                        Thu
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {setFri(!fri)}}>
                    <Text style={styles.days}>                                           
                        Fri
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {setSat(!sat)}}>
                    <Text style={styles.days}>                                           
                        Sat
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {setSun(!sun)}}>
                    <Text style={styles.days}>                        
                        Sun
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default SignUpForm