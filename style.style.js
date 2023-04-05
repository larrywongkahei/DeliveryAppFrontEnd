import { StyleSheet } from "react-native"



const styles = StyleSheet.create({
    homeInput:{
        height:40, 
        color:"#808080", 
        width:"75%", 
        textAlign:"center",
        borderRadius:30,
        borderColor:"#FFC0CB",
        borderWidth:2,
    },
    signInOutBtn:{
        backgroundColor:"#FFC0CB",
        paddingHorizontal:20, 
        paddingVertical:10, 
        borderRadius:30
    },
    days:{
        borderWidth:0.5,
        paddingTop:20,
        paddingBottom:30,
        width:50,
        textAlign:"center"
    },
    daysChoosen:{
        borderWidth:0.5,
        paddingTop:20,
        paddingBottom:30,
        width:50,
        textAlign:"center",
        backgroundColor:'#50C878'
    }

})

export default styles;