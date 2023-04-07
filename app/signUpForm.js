import { Stack , useSearchParams, useRouter} from "expo-router";
import { SafeAreaView, Text, View, TouchableOpacity, ScrollView, Alert} from "react-native";
import { useState, useEffect } from "react";
import API from "../helpers/APIs";
import ShowData from "../components/showData";
import ShowDays from "../components/showDays";
import styles from "../style.style";

const SignUpForm = () => {

    const [mon, setMon] = useState({day:"Mon", value:false, shift:"", shopChosen:""})
    const [tue, setTue] = useState({day:"Tue", value:false, shift:"", shopChosen:""})
    const [wed, setWed] = useState({day:"Wed", value:false, shift:"", shopChosen:""})
    const [thu, setThu] = useState({day:"Thu", value:false, shift:"", shopChosen:""})
    const [fri, setFri] = useState({day:"Fri", value:false, shift:"", shopChosen:""})
    const [sat, setSat] = useState({day:"Sat", value:false, shift:"", shopChosen:""})
    const [sun, setSun] = useState({day:"Sun", value:false, shift:"", shopChosen:""})
    const router = useRouter()
    const dayList = [mon, tue, wed, thu, fri, sat, sun]
    const BMG = {'name':'BMG', 'Full' : "17:00 - 23:00", 'Half' : "17:30 - 21:30"}
    const NOG = {'name':'NOG', 'Full' : "16:30 - 23:00", 'Half' : "16:00 - 21:00"}
    const HH = {'name':'HH', 'Full' : "16:30 - 23:00", 'Half' : "16:00 - 21:00"}
    const [dataToShow, setData] = useState([])
    const Shopname = ['BMG', 'HH', 'NOG']
    const Shops = [BMG, NOG, HH]
    const params = useSearchParams()

    function handleFinishForm(){
        const data = getData()
        const arrayOfValue = []
        data.forEach(each => {
            arrayOfValue.push(Object.values(each).includes(""))
        })
        if (!arrayOfValue.includes(true)){
            const dataToUpdate = {'name':params.username, 'data':data}
            API.UpdateUser(dataToUpdate)
            .then(response => {
                console.log(response)
                if (response.status === 200){
                    router.replace('/home')
                }
            })
        }else{
            Alert.alert('Signup Failed', 'Please choose the shop and shift for each day', 
            {
              text: 'Cancel',
              style: 'cancel',
            })
        }
    }  


    function getData(){    
        const newData = []    
        dataToShow.forEach(each => {
            const theShop = Shops.find(shop => shop.name === each.shopChosen)
            if(theShop){
                const data = {
                    'weekday' : each.day,
                    'shop' : each.shopChosen,
                    'shift' : each.shift,
                    'time' : theShop[each.shift] || ""
            }
            newData.push(data)

        }
        })
        return (newData)
    }

    function updateDataToShow(){
        const newData = []
        dayList.forEach(each => {
            if (each.value) {
                newData.push(each)
            }
        })
        setData(newData)
    }

    function setShowData(data){
        setData(data)
    }

    return (
        <SafeAreaView style={{}}>
            <ScrollView>
                <View style={{
                    borderBottomWidth:0.5,
                }}>
                    <Text style={{textAlign:"center", marginTop:30, fontSize:20}}>
                        Please choose the days you work
                    </Text>

                    <ShowDays
                    dayList={dayList}
                    setShowData={setShowData}
                    updateDataToShow={updateDataToShow}
                    dataToShow={dataToShow}
                    mon={mon}
                    tue={tue}
                    wed={wed}
                    thu={thu}
                    fri={fri}
                    sat={sat}
                    sun={sun}
                    />

                    <Text style={{textAlign:"center", marginTop:60, fontSize:13, marginBottom:20}}>
                        If your work day is not fixed, press skip
                    </Text>
                </View>

                <ShowData dataToShow={dataToShow} Shopname={Shopname} setDataFunction={setShowData} />
                
                <TouchableOpacity style={styles.signUpBtn} onPress={handleFinishForm}>
                    <Text style={{textAlign:'center'}}>
                        Sign Up
                    </Text>
                </TouchableOpacity>

            </ScrollView>
        </SafeAreaView>
    )
}

export default SignUpForm