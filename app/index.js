import { Text, TextInput, View, ScrollView, SafeAreaView, TouchableOpacity, Alert} from "react-native";
import { Stack, useRouter } from "expo-router";
import { useState } from "react";
import API from '../helpers/APIs'
import styles from "../style.style";


const Homepage = () => {

    const router = useRouter();
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const dayToWeekDay = {1:"Mon", 2:'Tue', 3:'Wed', 4:'Thu', 5:'Fri', 6:'Sat', 0:'Sun'}
    const changeShopName = {"BMG" : 'BurgerMeatGrill', "HH" : 'Happy House', "NOG" : 'New Orchid Garden'}
    
    function checkWorkdaysContain(name){
        const date = new Date
        const today = date.toISOString().slice(0, 10)
        API.GetUser(name)
        .then(response => response.json())
        .then(data => {
            const list = data.workdays.filter(each => each.weekday === dayToWeekDay[date.getDay()])
            const deliveryList = data.deliveries.filter(each => each.date === today)

            if (list.length > 0 || deliveryList.length > 0){
                router.replace({pathname:'/home', params:{'name':username, 'shop':changeShopName[list[0]?.shop] || deliveryList[0]?.shop, 'date':today, 'shift' : list[0]?.shift || deliveryList[0]?.shift}})
            }else{
                router.replace({pathname:'/shop', params:{'name':username}})
            }
        })
        
    }


    
    function checkInput(data){
        if (data.username === "" || data.password === ""){
            Alert.alert('Login Failed', 'Please fill in all the field', 
                {
                  text: 'Cancel',
                  style: 'cancel',
                })
            return false
        }
        return true
    }

    async function handleLogin(){
        const user = {
            "username" : username,
            "password" : password
        }
        if (checkInput(user)){
        const response = await API.Login(user)
        if (response){
            checkWorkdaysContain(username)
        }else{
            Alert.alert('Login Failed', 'Wrong username or password', 
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

                <TouchableOpacity onPress={()=>{router.push('/forgotPassword')}} style={{}}>
                    <Text style={{color:"#FC6C85"}}>
                        Forgotten password?
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={handleLogin} style={styles.signInOutBtn}>
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