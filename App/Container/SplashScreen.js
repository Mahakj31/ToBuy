import React, { useEffect } from "react";
import { Image, ImageBackground , StyleSheet } from "react-native";

const SplashScreen = ({ navigation }) => {

    useEffect(() => {
        getvalue()
    }, [])

   const getvalue = async()=>{
    setTimeout(() => {
            navigation.navigate('MainScreen')
    }, 3000)

   }

    return (
       
              <Image source={require('../Assets/plus.png')}
              style={styles.splashlogo }/>
       
    )
}
const styles= StyleSheet.create({
    splashlogo :{
        alignSelf:"center",
        marginVertical:"70%",
        width:"43%",
        height:"21%"
    }
})

export default SplashScreen;