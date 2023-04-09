import { SafeAreaView, Text, View, TouchableOpacity, ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';
import styles from "../style.style";

const WorkLog = props => {

    const reverseList = props.workLog.deliveries?.reverse()

    function handleDelete(dataToDelete){
        const data = {
            'id':props.userID,
            'data':dataToDelete
        }
        props.deleteDelivery(data)
    }

    return (
        <SafeAreaView style={{}}>
            <ScrollView>
            {reverseList?.map((each, index) => {
                return (
                    <View key={index} style={{flex:0, flexDirection:'row', justifyContent:'space-between', backgroundColor:"#FFC0CB", marginTop:15, marginLeft:10, marginRight:10, padding:10}}>

                        <View style={{alignItems:'center', gap:10}}>
                            <Text style={{fontWeight:'bold'}}>
                                Time:
                            </Text>
                            <Text>
                                {each.time}
                            </Text>
                        </View>

                        <View style={{alignItems:'center', gap:10}}>
                            <Text style={{fontWeight:'bold'}}>
                                Slip:
                            </Text>
                            <Text>
                                {each.slip}
                            </Text>
                        </View>

                        <View style={{alignItems:'center', gap:10}}>
                            <Text style={{fontWeight:'bold'}}>
                                Tips:
                            </Text>
                            <Text>
                                {each.tips}
                            </Text>
                        </View>

                        <View style={{alignItems:'center', gap:10}}>
                            <Text style={{fontWeight:'bold'}}>
                                Total:
                            </Text>
                            <Text>
                                {each.total}
                            </Text>
                        </View>
                        <TouchableOpacity style={{justifyContent:'center'}} onPress={() => {handleDelete(each)}}>
                            <Icon name="delete" size={28}/>
                        </TouchableOpacity>

                    </View>
                )
            })}
            </ScrollView>
        </SafeAreaView>
    )
}


export default WorkLog;