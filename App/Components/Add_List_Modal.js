import React, { useState } from "react";
import { Image,TouchableOpacity ,TextInput ,Modal, Text, View,FlatList} from "react-native";
import Images from "../Helper/Images";
import styles from "../Container/Styles/MainScreenStyle";

const List_Modal = (props) => {
 

    return (
       
            
                    <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
                        <View style={{ width: "90%", padding: 5, backgroundColor: "#F7F7F7", borderRadius: 20, }}>
                            
                           <View>
                            <Text style={[styles.text,{alignSelf:'center',marginVertical:'1%'}]}>
                             Add Item to Your Buy List
                            </Text>
                            <TextInput style={[styles.search , {alignSelf:'center'}]} 
                    onChangeText={props.setGet_Item_Name}                            
                            />
                            <View style={styles.btnCon}>    
                              <TouchableOpacity onPress={props.Item_Add}>
                              <Text style={styles.btn1}> Add</Text>
                              </TouchableOpacity>
                            
                              <TouchableOpacity  onPress={props.Close_Modal}>
                            <Text style={styles.btn2}> Cancel</Text>
                            </TouchableOpacity>
                           </View>
                           </View>
                        </View>
                    </View>
               
              
             
    )
}

export default List_Modal;