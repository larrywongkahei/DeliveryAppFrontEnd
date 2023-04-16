import { Text, TextInput, View, ScrollView, SafeAreaView, TouchableOpacity, Alert} from "react-native";
import { Stack, useRouter, useSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import API from '../helpers/APIs'
import styles from "../style.style";
import Icon from 'react-native-vector-icons/FontAwesome';


const ForgotPassword = () => {

    const [showPassword, setShowPassword] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const router = useRouter()

    function confirm(){
        const data = {
            'email':email, 
            'password':password
        }
        if (checkInput()){
            if(checkPassword()){
                API.ChangePassword(data)
                .then(response => {
                    if (response.status === 200){
                        Alert.alert("Successful", 'Password has changed', 
                        {
                          text: 'Cancel',
                          style: 'cancel',
                        })
                        router.back()
                    }
                })
            }
        }
    }

    function checkInput(){
        if (password !== "" || confirmPassword !== ""){
            return true
        }else{
            Alert.alert("Failed", 'Passwords could not be empty', 
            {
              text: 'Cancel',
              style: 'cancel',
            })
            return false
        }
    }

    function checkPassword(){
        if(password === confirmPassword){
            return true
        }else{
            Alert.alert("Failed", 'Passwords not matched', 
            {
              text: 'Cancel',
              style: 'cancel',
            })
        }
    }


    function checkUserExist (){
        API.CheckUser(email)
        .then(response => {
            if(response.status === 400){
                Alert.alert("Something's wrong", 'Your details doesnt match any existing user', 
                {
                  text: 'Cancel',
                  style: 'cancel',
                })
            }else{
                setShowPassword(true)
            }
        })
    }
    return (
        <SafeAreaView style={{alignItems:'center', marginTop:"25%", gap:30}}>
            <Text style={{fontSize:25, fontWeight:'bold'}}>
                Having trouble signing in?
            </Text>
            <Text style={{fontSize:15}}>
                Please enter your Email to get started.
            </Text>
            <View style={{gap:24, justifyContent:"center", alignItems:"center", width:'80%'}}>
                {!showPassword ? 
                <TextInput style={styles.homeInput}
                    placeholderTextColor="gray"
                    placeholder="Email address"
                    value={email}
                    onChangeText={(input) => {setEmail(input)}}/> : 
                    <View style={{height:40, width:"75%", borderWidth:2, borderColor:"#FFC0CB", borderRadius:20, justifyContent:'center'}}>
                        <Text style={{color:"#808080", textAlign:'center'}}>
                            {email}
                        </Text>
                    </View>
                    }
                {showPassword ? 
                <View style={{width:'100%', alignItems:'center', gap:8}}>
                    <TextInput style={styles.homeInput}
                    placeholderTextColor="gray"
                    placeholder="New password"
                    value={password}
                    autoCapitalize="none"
                    onChangeText={(input) => {setPassword(input)}}/>

                    <TextInput style={styles.homeInput}
                    placeholderTextColor="gray"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    autoCapitalize="none"
                    onChangeText={(input) => {setConfirmPassword(input)}}/>
                </View>  : null}
                
                <TouchableOpacity style={{backgroundColor:"#FFC0CB", paddingHorizontal:30, paddingVertical:8, borderRadius:'30%'}} onPress={()=>{
                    if(!showPassword){
                        checkUserExist()
                    }else{
                        confirm()
                    }
                }}>
                    <Text>
                        Confirm
                    </Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    )
}


export default ForgotPassword;