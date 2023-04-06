import { Stack } from "expo-router";
import { SafeAreaView, Text, View, TouchableOpacity, ScrollView } from "react-native";
import { useState, useEffect } from "react";
import styles from "../style.style";

const ShowDays = props => {

    const dayList = props.dayList
    const dataToShow = props.dataToShow
    const mon = props.mon
    const tue = props.tue
    const wed = props.wed
    const thu = props.thu
    const fri = props.fri
    const sat = props.sat
    const sun = props.sun


    // useEffect(()=> {
    //     props.updateDataToShow()
    //     console.log(dataToShow)
    // }, [mon, tue, wed, thu, fri, sat, sun])


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
            {dayList.map(each => {
                return (
                    <TouchableOpacity onPress={() => {
                        const newList = [...dayList]
                        each.value = !each.value
                        updateDataToShow()
                        console.log(newList)
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