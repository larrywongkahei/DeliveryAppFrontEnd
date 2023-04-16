import { Text, TextInput, View, ScrollView, SafeAreaView, TouchableOpacity, Alert} from "react-native";
import { Stack, useRouter, useSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import API from '../helpers/APIs'
import styles from "../style.style";
import Icon from 'react-native-vector-icons/FontAwesome';


const Profile = () => {

    const router = useRouter()
    const [allWorkDays, setAllWorkDays] = useState([])
    const [monthlyTotal, setMonthlyTotal] = useState(0)
    const params = useSearchParams()
    
    useEffect(() => {
        API.GetUser(params.name)
        .then(response => response.json())
        .then(data => {
            setAllWorkDays(data.workdays)
            getTotal(data.deliveries)
        })
    }, [])


    function getTotal (allDeliveries){
        const date = new Date
        let total = 0
        allDeliveries.forEach(each => {
            if(each.date.slice(5, 7) === date.toISOString().slice(5, 7)){
                total += each.total
            }
        })
        setMonthlyTotal(total)
    }
    
    const workdays = allWorkDays.map(each => {
        return (
            <Text style={styles.days}>
                {each.weekday}
            </Text>
        )
    })


    return (
        <SafeAreaView>
            {/* Show work days */}
            <View style={{alignItems:'center', marginTop:'40%', borderBottomWidth:0.5, marginLeft:'15%',  marginRight:'15%'}}>
                <Text>
                    WorkDays    (Weekday)
                </Text>

            </View>
            <View style={{flexDirection:'row', justifyContent:'space-evenly', marginTop:20}}>
                {workdays}
            </View>
            {/* Show how much the user made within this month, how many days the user work within two circles */}
            <View style={{marginTop:20, flexDirection:'row', alignItems:'center', justifyContent:"space-evenly"}}>
                <Text style={{borderWidth:0.5, width:80, height:80, borderRadius:'40%', textAlign:'center', paddingTop:30}}>
                    {/* How many work days left? */}
                    {monthlyTotal}
                </Text>
                <Text style={{borderWidth:0.5, width:80, height:80, borderRadius:'40%', textAlign:'center', paddingTop:30, marginTop:60}}>
                    {/* Todays money? */}
                    Days
                </Text>
                <Text style={{borderWidth:0.5, width:80, height:80, borderRadius:'40%', textAlign:'center', paddingTop:30}}>
                    {/* How much money made so far? */}
                    Days
                </Text>
            </View>
            {/* Three buttons:1, modify workdays, shops and shifts(pass back to the shop page?) */}
            <View style={{alignItems:'center', marginTop:30}}>
                <TouchableOpacity style={{ marginTop:30}} onPress={() => {router.replace({pathname:'/changeWorkdays', params:{username : params.name}})}}>
                    <Text>
                        Change Workdays
                    </Text>
                </TouchableOpacity>
                {/* 2, show records(Statements) */}
                <TouchableOpacity style={{ marginTop:30}} onPress={() => {router.push({pathname:'/record', params:{'name':params.name}})}}>
                    <Text>
                        Statements
                    </Text>
                </TouchableOpacity>
                {/* Log out button? */}
                {/* <TouchableOpacity style={{marginTop:'30%'}}  onPress={() => {}}>
                    <Text>
                        Log out
                    </Text>
                </TouchableOpacity> */}
            </View>
        </SafeAreaView>
    )
}

export default Profile;