import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
        container: {
        flex:1,
        },
        header:{
        alignItems:'center',
        borderBottomColor:'grey',
        borderBottomWidth:0.5,
        backgroundColor:"#97d930"
        },
        heading :{
            fontSize:16,
            color:'black',
            fontWeight:"bold",
            paddingVertical:'2%'
        },
        searchrow :{
            flexDirection:'row',
            marginVertical:'2%',
        },
        search:{
             width: "85%",
             height: 47,
             backgroundColor: '#eaede3',
             color: "#000",
             borderBottomRightRadius:20,
             borderBottomLeftRadius:20,
             marginLeft:'2%',
             borderTopRightRadius:20,
             borderTopLeftRadius:20
        },
        nolistfound:{
            alignItems:"center",
            justifyContent:"center",
            textAlign:"center",
            alignSelf:"center",
            marginTop:20,
          //  fontWeight:"bold",
             fontSize: 20
        },
        plus:{
            width:'86%',
            height:40,
            marginLeft:'13%',
            marginTop:'1%'
        },
        list:{
            flexDirection:'column',
            marginHorizontal:'2%',
            borderBottomWidth:0.5

        },
        bullet:{
            width:'6%',
            height:22,
        },
        text:{
            color:'black',
            marginHorizontal:'2%',
            fontSize:14
        },
        btnCon:
{
    flexDirection :'row',
    alignSelf:'center',
    margin:'2%',

    },
    btn1 :{
        backgroundColor: '#97d930',
        color:'white', 
        justifyContent:'center',
       fontSize: 14,
       fontWeight : 'bold',
      marginRight:80,
       paddingLeft:'2%',
       paddingVertical:'1%',
       paddingRight:'4%',

    },
    btn2 :{
        backgroundColor:'red',
        color:'white',
        textAlign :'center',
        // justifyContent:'center',
       fontSize: 14,
       fontWeight : 'bold',
       padding:'1%',
      paddingRight:'2%'

    },

        
})

export default styles