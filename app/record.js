import { SafeAreaView, Text, View, TouchableOpacity, ScrollView, FlatList } from "react-native";
import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "expo-router";
import { useRouter } from "expo-router";
import API from "../helpers/APIs";
import styles from "../style.style";

const Records = () => {

    const [allDeliveries, setAllDeliveries] = useState([])
    const numberToMonth = {
        '01':'January', 
        '02':'February', 
        '03':'March', 
        '04':'April', 
        '05':'May', 
        '06':'June', 
        '07':'July', 
        '08':'August', 
        '09':'September', 
        '10':'October', 
        '11':'November', 
        '12':'December'
    }
    const params = useSearchParams()
    const router = useRouter()
    const DATA =  []

    allDeliveries.forEach(each => {
        const data = {}
        if(DATA.filter(data => data.date === (numberToMonth[each['date'].substr(5, 2)] + " " + each['date'].substr(0,4))).length > 0){
            data['date'] = each['date'].substr(8, 2) + " " + numberToMonth[each['date'].substr(5, 2)] + " " + each['date'].substr(0,4)
            data['header'] = false
            DATA.push(data)
        }else{
            data['date'] = numberToMonth[each['date'].substr(5, 2)] + " " + each['date'].substr(0,4)
            data['header'] = true
            DATA.push(data)
            const theData = {}
            theData['date'] = each['date'].substr(8, 2) + " " + numberToMonth[each['date'].substr(5, 2)] + " " + each['date'].substr(0,4)
            theData['header'] = false
            DATA.push(theData)
        }
    })

    
    const headerIndiceList = DATA.map(each => {
        if (each.header === true){
            return (DATA.indexOf(each))
        }
    })




    useEffect(() => {
        API.GetUser(params.name)
        .then(response => response.json())
        .then(data => setAllDeliveries(data.deliveries))
    
    }, [])


    function decodeDate (date) {
        return date.substr(9, 4) + "-" + Object.keys(numberToMonth).find(each => numberToMonth[each] === date.substr(3, 5)) + "-" + date.substr(0, 2)
    }

    const Item = ({item}) => (
        <TouchableOpacity onPress={()=>{router.push({pathname:'/showRecord', params:{'date':decodeDate(item.date), 'name':params.name}})}} style={item.header? {alignItems:'flex-start', paddingLeft:10, paddingTop:30, paddingBottom:10, backgroundColor:'#FFC0CB'} : {alignItems:'flex-end', marginRight:20, paddingTop:20, paddingBottom:20, borderBottomWidth:0.5, borderBottomColor:'##FFC0CB', flexDirection:'row', paddingLeft:20}}>
            {!item.header?
            <Text>
                Daily Statement
            </Text> : null}
            <Text style={!item.header? {position:'absolute', bottom:10, right:20} : null}>
                {item.date}
            </Text>
        </TouchableOpacity>
    )

    return (
        <SafeAreaView style={{height:'100%'}}>
            <FlatList 
            data={DATA}
            renderItem={({item}) => <Item item={item}/>}
            stickyHeaderIndices={headerIndiceList}
            />

        </SafeAreaView>
    )
}

export default Records;

{/* <ScrollView style={{height:'77%'}} stickyHeaderIndices={[0]}>
{allDeliveries?.map((each, index) => {
    return(
        <View >
            <Text key={index}>
                hi
            </Text>
            <TouchableOpacity style={{backgroundColor:'#FFFFFF', paddingTop:20, paddingBottom:20, marginTop:5, marginBottom:10, shadowColor: "#171717", shadowOpacity: 0.25, shadowRadius: 3.47, shadowOffset: {width: 0, height: 3}}}  onPress={()=>{router.push({pathname:'/showRecord', params:{'date':each.date, 'name':params.name}})}}>
                <Text style={{width:'100%', textAlign:'center'}}>
                    {each.date}
                </Text>
            </TouchableOpacity>
        </View>
    )
})}
</ScrollView> */}