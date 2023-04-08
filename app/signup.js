import { View, Text, SafeAreaView, TextInput, TouchableOpacity, Alert } from "react-native";
import { Stack, useRouter } from "expo-router";
import { useState } from "react";
import styles from "../style.style";
import API from "../helpers/APIs";

const Newpage = () =>{

    const router = useRouter();
    const [email, setEmail] = useState("")
    const [confirmEmail, setConfirmEmail] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    function checkDetailMatch(data1, data2, subject){
        if  (data1 !== data2){
            Alert.alert('Signup Failed', `${subject} not matched`, 
            {
              text: 'Cancel',
              style: 'cancel',
            })
        }
        return data1 === data2
    }


    function checkInput(data){
        if (data.username === "" || data.email === "" || data.password === ""){
            Alert.alert('Signup Failed', 'Please fill in all the field', 
                {
                  text: 'Cancel',
                  style: 'cancel',
                })
            return false
        }
        return true
    }

    async function handleNext(){
        const data = {
            'username' : username,
            'email' : email,
            'password' : password
        }
        if (checkInput(data) && checkDetailMatch(password, confirmPassword, "Password") && checkDetailMatch(email, confirmEmail, "Email")){
            const response = await API.createUser(data)
            if (response){
                router.push({pathname: '/signUpForm', params:{username : username}})
            }else{
                Alert.alert('Signup Failed', 'Email or username is used', 
                    {
                    text: 'Cancel',
                    style: 'cancel',
                    })}
        }
    }
    
    return (
        <SafeAreaView style={{flex:1, backgroundColor:"#FFFFFF"}}>
            <Stack.Screen 
            options={{
                headerStyle:{backgroundColor:"#FFC0CB"},
                headerTitle:"SignUp",
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
                    placeholder="Confirm email address"
                    value={confirmEmail}
                    onChangeText={(input) => {setConfirmEmail(input)}}/>


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
                    value={confirmPassword}
                    onChangeText={(input)=>{setConfirmPassword(input)}}
                    secureTextEntry={true}
                    />

                <TouchableOpacity onPress={handleNext} style={styles.signInOutBtn}>
                    <Text>
                        Next
                    </Text>
                </TouchableOpacity>

            </View>
        </SafeAreaView>
    )
}

export default Newpage;