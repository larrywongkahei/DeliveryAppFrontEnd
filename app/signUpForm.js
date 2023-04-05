import { Stack } from "expo-router";
import { SafeAreaView, Text, TouchableOpacity } from "react-native";
import { View } from "react-native-web";

const SignUpForm = () => {
    return (
        <SafeAreaView style={{}}>
            <Text style={{textAlign:"center", marginTop:"30px", fontSize:"large"}}>
                Please choose the days you work
            </Text>
            <View style={{
                flex:1, 
                flexDirection:"row",
                justifyContent:"space-evenly",
                marginTop:20
            }}>
                <TouchableOpacity style={{
                    textAlign:"cetner"
                    }}>
                    <Text style={{
                        borderWidth:0.5,
                        paddingVertical:20,
                        width:70,
                        textAlign:"center"
                    }}>
                        Mon
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={{
                    }}>
                    <Text style={{
                        borderWidth:0.5,
                        paddingVertical:20,
                        width:70,
                        textAlign:"center"
                    }}>                        
                        Tue
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={{
                    }}>
                    <Text style={{
                        borderWidth:0.5,
                        paddingVertical:20,
                        width:70,
                        textAlign:"center"
                    }}>                        
                        Wed
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={{
                    }}>
                    <Text style={{
                        borderWidth:0.5,
                        paddingVertical:20,
                        width:70,
                        textAlign:"center"
                    }}>                        
                        Thu
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={{
                    }}>
                    <Text style={{
                        borderWidth:0.5,
                        paddingVertical:20,
                        width:70,
                        textAlign:"center"
                    }}>                        
                        Fri
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={{
                    }}>
                    <Text style={{
                        borderWidth:0.5,
                        paddingVertical:20,
                        width:70,
                        textAlign:"center"
                    }}>                        
                        Sat
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={{
                    }}>
                    <Text style={{
                        borderWidth:0.5,
                        paddingVertical:20,
                        width:70,
                        textAlign:"center"
                    }}>                        
                        Sun
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default SignUpForm