import { Text, TextInput, View, ScrollView, SafeAreaView, TouchableOpacity, Alert} from "react-native";
import { Stack, useRouter } from "expo-router";
import { useState } from "react";
import styles from "../style.style";

const Homepage = () => {

    const router = useRouter();
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    function handleLogin(){
        if(!username || !password){
            Alert.alert('Log in failed', 'Fields could not be empty',
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            })
        }else if (username !== "abc" || password !== "abb"){
            Alert.alert('Log in failed', 'Wrong username or password',
                {
                  text: 'Cancel',
                  onPress: () => console.log('Cancel Pressed'),
                  style: 'cancel',
                }
        )}else{
            router.replace('/home')
        }
    }

    return (
        <SafeAreaView style={{flex:1, backgroundColor:"#FFFFFF"}}>
            <Stack.Screen
            options={{
                headerStyle:{backgroundColor:"#FFC0CB"},
                headerTitle: "Driver App",
            }}
            />

            <View style={{gap:24, flex:1, justifyContent:"center", alignItems:"center"}}>
                <TextInput style={styles.homeInput}
                    placeholderTextColor="gray"
                    placeholder="Email address or username"
                    value={username}
                    onChangeText={(text) => {setUsername(text)}}/>

                <TextInput style={styles.homeInput}
                    placeholderTextColor="gray"
                    placeholder="Password"
                    value={password}
                    onChangeText={(text)=>{setPassword(text)}}
                    secureTextEntry={true}
                    />

                <TouchableOpacity onPress={()=>{}} style={{}}>
                    <Text style={{color:"#FC6C85"}}>
                        Forgotten password?
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={handleLogin} style={{backgroundColor:"#FFC0CB", paddingHorizontal:20, paddingVertical:10, borderRadius:"30px"}}>
                    <Text>
                        Log In
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={{flexDirection:"row", gap:2, justifyContent:"center"}}>
                <Text>
                    Dont't have an account?
                </Text>
                <TouchableOpacity onPress={()=>{router.push('/signup')}} style={{}}>
                    <Text style={{textAlign:"center", marginBottom:10, color:"#FC6C85"}}>
                        Sign Up
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default Homepage;