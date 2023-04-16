import { Text, TextInput, View, ScrollView, SafeAreaView, TouchableOpacity, Alert} from "react-native";
import { Stack, useRouter, useSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import API from '../helpers/APIs'
import styles from "../style.style";
import Icon from 'react-native-vector-icons/FontAwesome';


const ForgotPassword = () => {

    const router = useRouter()

    return (
        <SafeAreaView>
            <Text>
                This is forgot password page
            </Text>
        </SafeAreaView>
    )
}


export default ForgotPassword;