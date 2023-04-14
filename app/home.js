import { SafeAreaView, View, Text } from "react-native";
import { useSearchParams } from "expo-router";
import { useState, useEffect } from "react";
import { Stack } from "expo-router";
import API from "../helpers/APIs";
import Icon from 'react-native-vector-icons/FontAwesome';
import Calculator from "../components/calculator";
import WorkLog from "../components/workLog";
import DayEarn from "../components/dayEarn";

const Home = () => {
    const deliveryFeeList = [1.5, 2, 2.5, 3, 3.5, 4, 4.5]
    const [slipsCountDict, setSlipsCountDict] = useState([])
    const params = useSearchParams()
    const [workLog, setWorkLog] = useState([])
    const [userID, setUserID] = useState("")
    const [totalEarning, setTotalEarning] = useState(0)
    const [slipsTotal, setSlipsTotal] = useState(0)
    const [showCal, setShowCal] = useState(true)

    useEffect(() => {
        updateData()
    }, [])


    function getSlipTotal(data){
        let slipTotal = 0
        for (each in data){
            if (+each !== 0){
                slipTotal += (+each) * data[each]
            }
        }
        setSlipsTotal(slipTotal)
    }

    function setShowCalFun () {
        setShowCal(!showCal)
    }

    async function deleteDelivery (data){
        await API.DeleteDelivery(data)
        await updateData()
    }

    async function addToLog(data){
        await API.AddToLog(data)
        await updateData()
    }

    function updateData(){
        API.GetUser(params.name)
        .then(response => response.json())
        .then(data => {
            const logToSave = data.deliveries.find(each => each.date === params.date)
            const reverseList = logToSave.deliveries?.reverse()
            setWorkLog(reverseList)
            setTotalEarning(logToSave.total)
            getSlipsCount(data)
            setUserID(data._id)
            
    })
}



async function getSlipsCount(data){
    const logToSave = data.deliveries.find(each => each.date === params.date)
    const slipsDict = {}
    deliveryFeeList.forEach(each => {
        slipsDict[each] = 0
    })
    const allDeliveries = logToSave.deliveries
    allDeliveries.forEach(each => {
        if(each.slip !== 0){
            slipsDict[String(each.slip)] += 1
        }
    })
    setSlipsCountDict(slipsDict)
    getSlipTotal(slipsDict)
}




    return(
        <SafeAreaView style={{flex:0, height:'100%'}}>
            {params?
            <View>
                <Stack.Screen
                options={{
                    headerStyle:{backgroundColor:"#FFC0CB"},
                    headerTitle: params.shop,
                    headerRight:() => (
                        <Icon name="user-circle" size={35}/>
                    )
                }}
                />
            </View>: null}
            {workLog ? 
            <View style={{height:'51%'}}>
                <WorkLog workLog={workLog} deleteDelivery={deleteDelivery} userID={userID}/>
            </View> : null}
            {showCal ? 
            <View style={{height:'37%', marginTop:20}}>
                <DayEarn slipsCountDict={slipsCountDict} totalEarning={totalEarning} slipsTotal={slipsTotal}/>
            </View> : null}
            <View style={{position:'absolute', bottom:'-60%', alignSelf:'center'}}>
                <Calculator list={deliveryFeeList} addToLog={addToLog} name={params.name} shop={params.shop} shift={params.shift} setShowCalFun={setShowCalFun}/>
            </View>
        </SafeAreaView>
    )
}

export default Home;