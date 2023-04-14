import { SafeAreaView, Text, View, TouchableOpacity, ScrollView, Image } from "react-native";
import Lottie from 'lottie-react-native';
import { Stack, useRouter, useSearchParams } from "expo-router";
import { useState } from "react";
import styles from "../style.style";

const Loading = () => {
    return (
        <Lottie style={{justifyContent:'center', alignItems:'center', backgroundColor:'rgba(0,0,0,0.3)', zIndex:1}} source={require('../assets/animation.json')} autoPlay loop />
    )
}

export default Loading;