import { Text, TextInput, View, ScrollView, SafeAreaView, TouchableOpacity} from "react-native";
import { Stack, useRouter } from "expo-router";
import styles from "../style.style";

const Homepage = () => {

    const router = useRouter();

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
                    defaultValue=""/>

                <TextInput style={styles.homeInput}
                    placeholderTextColor="gray"
                    placeholder="Password"
                    defaultValue=""/>

                <TouchableOpacity onPress={()=>{}} style={{}}>
                    <Text style={{color:"#FC6C85"}}>
                        Forgotten password?
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>{router.replace('/home')}} style={{backgroundColor:"#FFC0CB", paddingHorizontal:20, paddingVertical:10, borderRadius:"30px"}}>
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