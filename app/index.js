import { Text, TextInput, View, ScrollView, SafeAreaView, Button} from "react-native";
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

            <View style={{marginTop:"70%", gap:24}}>
                <TextInput style={styles.homeInput}
                    placeholderTextColor="gray"
                    placeholder="Account Name"
                    defaultValue=""/>

                <TextInput style={styles.homeInput}
                    placeholderTextColor="gray"
                    placeholder="Password"
                    defaultValue=""/>
                    
                <Button 
                title="Signin"
                color=""
                onPress={()=>{}}
                />
            </View>
        </SafeAreaView>
    )
}

export default Homepage;