import { SafeAreaView, View, Text } from "react-native";
import { useRouter, useSearchParams } from "expo-router";
import { Stack } from "expo-router";

const Home = () => {

    const params = useSearchParams()
    console.log(params)

    return (
        <SafeAreaView>
            {params?
            <Text>
                {params.shop}
            </Text> : null}
            <Text>
                I am home page
            </Text>
        </SafeAreaView>
    )
}

export default Home;