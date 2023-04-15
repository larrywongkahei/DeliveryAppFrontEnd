import { Text, TextInput, View, ScrollView, SafeAreaView, TouchableOpacity, Alert} from "react-native";
import { Stack, useRouter, useSearchParams } from "expo-router";
import { useState } from "react";
import API from '../helpers/APIs'
import styles from "../style.style";

const Profile = () => {

    const [allWorkDays, setAllWorkDays] = useState([])
    const params = useSearchParams()

    API.GetUser(params.name)
    .then(response => response.json())
    .then(data => {setAllWorkDays(data.workdays)})

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
            <View>

            </View>
            {/* Three buttons:1, modify workdays, shops and shifts(pass back to the shop page?) */}
            {/* 2, show records(Statements) */}
            {/* Log out button? */}
        </SafeAreaView>
    )
}

export default Profile;