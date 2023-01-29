import {View, Text, StyleSheet, TextInput, TouchableOpacity} from "react-native"
import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from "react";


const AddItem = ({title, addItem}) =>{
    const [inputText, setInputText] = useState('')


    const handleChange = textValue => setInputText(textValue)
  return(
    <View >
        <TextInput placeholder="Add Item...." style={styles.input} onChangeText={handleChange} />
        <TouchableOpacity style={styles.btn} onPress={() => addItem(inputText)}>
            <Text style={styles.btnText}>
                <Ionicons name="add" size={24} color="black" />            
                <Text>Add</Text>
            </Text>
        </TouchableOpacity>

    </View>
  )
}


const styles = StyleSheet.create({
 input:{
    height:60,
    padding:6,
    fontSize:16
 },
 btn:{
    padding:9,
    margin:5,
    backgroundColor:"#007dff52",
    
 },
 btnText:{
    color:"#007dff",
    fontSize:20,
    textAlign:"center",
    display:"flex",
    flexDirection:"row",
    alignItems:"center"
 }
})
export default AddItem