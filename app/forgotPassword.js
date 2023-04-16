import { Text, TextInput, View, ScrollView, SafeAreaView, TouchableOpacity, Alert} from "react-native";
import { Stack, useRouter, useSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import API from '../helpers/APIs'
import styles from "../style.style";
import Icon from 'react-native-vector-icons/FontAwesome';


const ForgotPassword = () => {

    const [showPassword, setShowPassword] = useState(false)

    const router = useRouter()


    function checkUserExist (){
        API.CheckUser('Aa')
        .then(response => {
            if(response.status === 400){
                Alert.alert("Something's wrong", 'Your details doesnt match any existing user', 
                {
                  text: 'Cancel',
                  style: 'cancel',
                })
            }else{
                console.log('yes')
                setShowPassword(!showPassword)
            }
        })
    }
    return (
        <SafeAreaView style={{alignItems:'center'}}>
            <Text>
                Having trouble signing in?
            </Text>
        </SafeAreaView>
    )
}


export default ForgotPassword;