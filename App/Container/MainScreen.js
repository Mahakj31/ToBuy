import React, { useState } from "react";
import { Image,TouchableOpacity ,TextInput ,Modal, Text, View,FlatList} from "react-native";
import Images from "../Helper/Images";
import styles from "./Styles/MainScreenStyle";
import List_Modal from "../Components/Add_List_Modal";

const MainScreen = ({ navigation }) => {
    const [MODAL, setMODAL] = useState(false);
    const [Get_Item_Name, setGet_Item_Name] = useState('');
    const [Array_Item_Name, setArray_Item_Name] = useState([]);
    const [searchtext, setsearchtext] = useState("")
    const [Arr, setArr] = useState([]);

    const Item_Add = () =>{

        setArray_Item_Name((function_Array) => [...function_Array,Get_Item_Name])
        setMODAL(!MODAL)

    }

    const SearchFilterFunction = (text) => {
        
        if (Array_Item_Name.length == 0) {
            
            return false
                }
        if (text) {
          const newData = Array_Item_Name.filter(function (item) {
            const itemData = item
              ? item.toUpperCase()
              : ''.toUpperCase();
            const textData = text.toUpperCase();
            return itemData.indexOf(textData) > -1;
          });
          setArr(newData)
    setsearchtext(text)
        } else {
          setArr(Array_Item_Name)
         setsearchtext(text)
        }
   // }
      };


    return (
       
            <View style={styles.container}>

                <View style={styles.header}>
                <Text style={styles.heading}> ToBuy</Text>
                </View>

                <View style={styles.searchrow}>    
                <TextInput
                    style={styles.search}  
                    value={searchtext}
                onChangeText={text => SearchFilterFunction(text)} 
                    placeholder="  Search..."
                                   />
                   <TouchableOpacity onPress={()=> setMODAL(!MODAL)}>
                    <Image source={Images.add} style={styles.plus} />
                    </TouchableOpacity>
                </View>
                <FlatList
                    
                        data={Arr.length == 0 ?  Array_Item_Name : Arr }
                        ListEmptyComponent={
                           
                            <Text style={styles.nolistfound}>No Lists Found</Text>
                          
                        }
                        renderItem={({ item ,x}) =>     
                        <View style={styles.list}>
                        <View style={styles.searchrow}>
                    <Image source={Images.bullet} style={styles.bullet} />
                    <Text key={x} style={styles.text}>{item}</Text>
                    </View>
                    </View>

                        }
                    />
                <Modal animationType={"slide"} transparent={true}
                    visible={MODAL}
                    onRequestClose={() => setMODAL(!MODAL)}>
                    <List_Modal

                    setGet_Item_Name={(txt) => setGet_Item_Name(txt)}
                    Item_Add={() => Item_Add()}
                    Close_Modal={() => setMODAL(!MODAL)}
                    
                    />
                </Modal>
            </View>
              
             
    )
}

export default MainScreen;