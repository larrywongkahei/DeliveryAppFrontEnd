import { SafeAreaView, Text, View, TouchableOpacity, ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';
import styles from "../style.style";

const WorkLog = props => {
    return (
        <SafeAreaView style={{flex:0}}>
            {props.workLog.deliveries?.map((each, index) => {
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
                        <View style={{justifyContent:'center'}}>
                            <Icon name="delete" size={28}/>
                        </View>

                    </View>
                )
            })}
        </SafeAreaView>
    )
}

export default WorkLog;