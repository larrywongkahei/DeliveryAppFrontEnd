import { Stack } from "expo-router";
import { SafeAreaView, Text, View, TouchableOpacity, ScrollView } from "react-native";
import { useState, useEffect } from "react";
import styles from "../style.style";

const ShowData = props => {
    const dataToShow = props.dataToShow
    const Shops = props.Shopname
    function setDataFromChild(data) {
        props.setDataFunction(data)
    }

    return (
        <View>
            {dataToShow.map(each => {
                return (
                    <View style={{
                        borderBottomWidth: 0.5,
                        paddingBottom: 30,
                    }}>
                        <Text style={{ textAlign: "center", marginTop: 20 }}>
                            {each.day}
                        </Text>
                        <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-evenly", marginTop: 20, paddingBottom: 50 }}>
                            {Shops.map(eachShop => {
                                return (
                                    <TouchableOpacity onPress={() => {
                                        const newShowList = [...dataToShow]
                                        const indexOfDayInShowDataList = dataToShow.indexOf(each)
                                        each.shopChosen = eachShop
                                        newShowList[indexOfDayInShowDataList] = each
                                        setDataFromChild(newShowList)

                                    }}>
                                        <Text style={[each.shopChosen === eachShop ? styles.shopChosen : styles.shopButton]}>
                                            {eachShop}
                                        </Text>
                                    </TouchableOpacity>
                                )
                            })}
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>

                            <TouchableOpacity style={[each.shift === "Full" ? styles.shiftButtonChosen : styles.shiftButton]} onPress={() => {
                                const newShowList = [...dataToShow]
                                const indexOfDayInShowDataList = dataToShow.indexOf(each)
                                each.shift = "Full"
                                newShowList[indexOfDayInShowDataList] = each
                                setDataFromChild(newShowList)
                            }}>
                                <Text style={styles.shiftText}>
                                    Full
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={[each.shift === "Half" ? styles.shiftButtonChosen : styles.shiftButton]} onPress={() => {
                                const newShowList = [...dataToShow]
                                const indexOfDayInShowDataList = dataToShow.indexOf(each)
                                each.shift = "Half"
                                newShowList[indexOfDayInShowDataList] = each
                                setDataFromChild(newShowList)
                            }}>
                                <Text style={styles.shiftText}>
                                    Half
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )
            })}
        </View>
    )
}

export default ShowData;