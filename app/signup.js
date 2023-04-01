import { View, Text, SafeAreaView, TextInput, TouchableOpacity } from "react-native";
import { Stack, useRouter } from "expo-router";
import { useState } from "react";
import styles from "../style.style";

const Newpage = () =>{

    const router = useRouter();
    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    
    return (
        <SafeAreaView style={{flex:1, backgroundColor:"#FFFFFF"}}>
            <Stack.Screen 
            options={{
                headerStyle:{backgroundColor:"#FFC0CB"},
                headerTitle:"Signup"
            }}
            />
            <View style={{gap:24, flex:1, justifyContent:"center", alignItems:"center"}}>
                <TextInput style={styles.homeInput}
                    placeholderTextColor="gray"
                    placeholder="Username"
                    value={username}
                    onChangeText={(input) => {setEmail(input)}}/>

                <TextInput style={styles.homeInput}
                    placeholderTextColor="gray"
                    placeholder="Email address"
                    value={username}
                    onChangeText={(input) => {setUsername(input)}}/>

                <TextInput style={styles.homeInput}
                    placeholderTextColor="gray"
                    placeholder="Password"
                    value={password}
                    onChangeText={(input)=>{setPassword(input)}}
                    secureTextEntry={true}
                    />

                <TouchableOpacity onPress={()=>{}} style={styles.signInOutBtn}>
                    <Text>
                        Sign up
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default Newpage;