import { SafeAreaView, View, Text } from "react-native";
import { useSearchParams } from "expo-router";
import { Stack } from "expo-router";
import API from "../helpers/APIs";
import Icon from 'react-native-vector-icons/FontAwesome';

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
                    headerRight:() => (
                        <Icon name="user-circle" size={35}/>
                    )
                }}
                />
            </View>: null}
        </SafeAreaView>
    )
}

export default Home;