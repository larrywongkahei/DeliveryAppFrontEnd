import { Stack } from "expo-router";
import { SafeAreaView, Text, View, TouchableOpacity, ScrollView } from "react-native";
import { useState, useEffect } from "react";
import styles from "../style.style";

const SignUpForm = () => {

    const [mon, setMon] = useState({day:"Monday", value:false, shift:"", shopChosen:""})
    const [tue, setTue] = useState({day:"Tuesday", value:false, shift:"", shopChosen:""})
    const [wed, setWed] = useState({day:"Wednesday", value:false, shift:"", shopChosen:""})
    const [thu, setThu] = useState({day:"Thursday", value:false, shift:"", shopChosen:""})
    const [fri, setFri] = useState({day:"Friday", value:false, shift:"", shopChosen:""})
    const [sat, setSat] = useState({day:"Saturday", value:false, shift:"", shopChosen:""})
    const [sun, setSun] = useState({day:"Sunday", value:false, shift:"", shopChosen:""})
    const dayList = [mon, tue, wed, thu, fri, sat, sun]
    const [dataToShow, setData] = useState([])
    const Shops = ["BMG", "HH", "NOG"]

    useEffect(()=> {
        const newList = [...dayList]
        const newData = []
        newList.forEach(each => {
            if (each.value) {
                newData.push(each.day)
            }
        })
    }, [dayList])

    useEffect(()=> {
        const newData = []
        dayList.forEach(each => {
            if (each.value) {
                newData.push(each.day)
            }
        })
        setData(newData)
    }, [mon, tue, wed, thu, fri, sat, sun])

    return (
        <SafeAreaView style={{}}>
            <ScrollView>
                <View style={{
                    borderBottomWidth:0.5,
                }}>
                    <Text style={{textAlign:"center", marginTop:30, fontSize:"large"}}>
                        Please choose the days you work
                    </Text>
                    <View style={{
                        flex:1, 
                        flexDirection:"row",
                        justifyContent:"space-evenly",
                        marginTop:30,
                        marginBottom:40,
                    }}>
                        <TouchableOpacity onPress={() => {
                            const newData = {...mon}
                            newData.value = !mon.value
                            setMon(newData)
                    }}>
                            <Text style={[!mon.value? styles.days : styles.daysChosen ]}>                        
                                Mon
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => {
                            const newData = {...tue}
                            newData.value = !tue.value
                            setTue(newData)
                        }}>
                            <Text style={[!tue.value? styles.days : styles.daysChosen ]}>                                                
                                Tue
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => {
                            const newData = {...wed}
                            newData.value = !wed.value
                            setWed(newData)
                        }}>
                            <Text style={[!wed.value? styles.days : styles.daysChosen ]}>                                         
                                Wed
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => {
                            const newData = {...thu}
                            newData.value = !thu.value
                            setThu(newData)
                        }}>
                            <Text style={[!thu.value? styles.days : styles.daysChosen ]}>                                         
                                Thu
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => {
                            const newData = {...fri}
                            newData.value = !fri.value
                            setFri(newData)
                        }}>
                            <Text style={[!fri.value? styles.days : styles.daysChosen ]}>                                           
                                Fri
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => {
                            const newData = {...sat}
                            newData.value = !sat.value
                            setSat(newData)
                        }}>
                            <Text style={[!sat.value? styles.days : styles.daysChosen ]}>                                           
                                Sat
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => {
                            const newData = {...sun}
                            newData.value = !sun.value
                            setSun(newData)}}>
                            <Text style={[!sun.value? styles.days : styles.daysChosen ]}>                        
                                Sun
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={{textAlign:"center", marginTop:60, fontSize:"small", marginBottom:20}}>
                        If your work day is not fixed, press skip
                    </Text>
                </View>
                <View>
                    {dataToShow.map(each => {
                        return (
                            <View style={{
                                borderBottomWidth:0.5,
                                paddingBottom:30,
                            }}>
                                <Text style={{textAlign:"center", marginTop:20}}>
                                    {each}
                                </Text>
                                <View style={{flex:1, flexDirection:"row", justifyContent:"space-evenly", marginTop:20, paddingBottom:50}}>
                                    {Shops.map(eachShop => {
                                        return(
                                            <TouchableOpacity onPress={() =>{
                                                const theDay  = dayList.find(day => day.day === each)
                                                const newShowList = [...dataToShow]
                                                const indexOfDayInShowDataList = dataToShow.indexOf(theDay)
                                                theDay.shopChosen = eachShop
                                                newShowList[indexOfDayInShowDataList] = theDay
                                                setData(newShowList)

                                            }}>
                                                <Text style={[dayList.find(day => day.day === each).shopChosen === eachShop ? styles.shopChosen : styles.shopButton]}>
                                                    {eachShop}
                                                </Text>
                                            </TouchableOpacity>
                                        )
                                    })}
                                </View>
                                <View style={{flexDirection:"row", justifyContent:"space-evenly"}}>

                                    <TouchableOpacity style={styles.shiftButton}>
                                        <Text style={styles.shiftText}>
                                            Full
                                        </Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity style={styles.shiftButton}>
                                        <Text style={styles.shiftText}>
                                            Half
                                        </Text>
                                    </TouchableOpacity>

                                </View>

                            </View>
                        )
                    })}
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default SignUpForm