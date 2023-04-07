import { Stack } from "expo-router";
import { SafeAreaView, Text, View, TouchableOpacity, ScrollView } from "react-native";
import { useState, useEffect } from "react";
import styles from "../style.style";

const ShowDays = props => {

    const dayList = props.dayList

    function updateDataToShow() {
        const newData = []
        dayList.forEach(each => {
            if (each.value) {
                newData.push(each)
            }
        })
        props.setShowData(newData)
    }

    function setDataFromChild(data) {
        props.setShowData(data)
    }

    return (
        <View style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-evenly",
            marginTop: 30,
            marginBottom: 40,
        }}>
            {dayList.map((each, index) => {
                return (
                    <TouchableOpacity  key={index} onPress={() => {
                        const newList = [...dayList]
                        each.value = !each.value
                        updateDataToShow()
                    }}>
                        <Text style={[!each.value ? styles.days : styles.daysChosen]}>
                            {each.day}
                        </Text>
                    </TouchableOpacity>
                )
            })}

        </View>
    )
}

export default ShowDays;