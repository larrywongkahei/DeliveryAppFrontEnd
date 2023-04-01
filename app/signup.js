import { View, Text, SafeAreaView, TextInput, TouchableOpacity, Alert } from "react-native";
import { Stack, useRouter } from "expo-router";
import { useState } from "react";
import styles from "../style.style";
import API from "../helpers/APIs";

const Newpage = () =>{

    const router = useRouter();
    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    async function handleSignup(){
        const data = {
            'username' : username,
            'email' : email,
            'password' : password
        }
        const response = await API.createUser(data)
        if (response){
            router.replace('/home')
        }else{
            console.log('failed')
            Alert.alert('Signup Failed', 'Wrong username or password', 
                {
                  text: 'Cancel',
                  onPress: () => console.log('Cancel Pressed'),
                  style: 'cancel',
                })}
    }
    
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
                    onChangeText={(input) => {setUsername(input)}}/>

                <TextInput style={styles.homeInput}
                    placeholderTextColor="gray"
                    placeholder="Email address"
                    value={email}
                    onChangeText={(input) => {setEmail(input)}}/>

                <TextInput style={styles.homeInput}
                    placeholderTextColor="gray"
                    placeholder="Password"
                    value={password}
                    onChangeText={(input)=>{setPassword(input)}}
                    secureTextEntry={true}
                    />

                <TextInput style={styles.homeInput}
                    placeholderTextColor="gray"
                    placeholder="Confirm password"
                    value={password}
                    onChangeText={(input)=>{setPassword(input)}}
                    secureTextEntry={true}
                    />

                <TouchableOpacity onPress={handleSignup} style={styles.signInOutBtn}>
                    <Text>
                        Sign up
                    </Text>
                </TouchableOpacity>

            </View>
        </SafeAreaView>
    )
}

export default Newpage;