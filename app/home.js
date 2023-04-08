import { SafeAreaView, View, Text } from "react-native";
import { useSearchParams } from "expo-router";
import { Stack } from "expo-router";
import API from "../helpers/APIs";

const Home = () => {
    const params = useSearchParams()


    return(
        <SafeAreaView>
            {params?
            <View>
                <Stack.Screen
                options={{
                    headerStyle:{backgroundColor:"#FFC0CB"},
                    headerTitle: params.shop,
                }}
                />
            </View>: null}
        </SafeAreaView>
    )
}

export default Home;