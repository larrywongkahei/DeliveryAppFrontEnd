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
        paddingBottom:35,
        width:50,
        textAlign:"center"
    },
    daysChosen:{
        borderWidth:0.5,
        paddingTop:20,
        paddingBottom:35,
        width:50,
        textAlign:"center",
        backgroundColor:'#50C878'
    },
    shiftButton:{
        borderWidth:1,
        marginTop:20,
        width:120,
        borderRadius:10,
        paddingTop:20,
        paddingBottom:35,
    },
    shiftButtonChosen:{
        borderWidth:1,
        marginTop:20,
        width:120,
        borderRadius:10,
        paddingTop:20,
        paddingBottom:35,
        backgroundColor:'#50C878',
    },
    shiftText:{
        fontSize:20, 
        fontWeight:"bold", 
        textAlign:"center", 
        marginTop:12
    },
    shopButton:{
        borderWidth:1,
        marginTop:20,
        width:120,
        borderRadius:10,
        paddingTop:10,
        paddingBottom:25,
        textAlign:"center", 
    },
    shopChosen:{
        borderWidth:1,
        marginTop:20,
        width:120,
        borderRadius:10,
        paddingTop:10,
        paddingBottom:25,
        textAlign:"center",
        backgroundColor:'#50C878',

    }

})

export default styles;