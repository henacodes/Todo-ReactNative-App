import { useState } from "react"
import {View, Text, StyleSheet, Image, FlatList, Alert} from "react-native"
import AddItem from "./components/AddItem"
// Custom Components
import Header from "./components/Header"
import ListItem from "./components/ListItem"
const App = () =>{

  const [items, setItems] = useState([
    {
      id:1,
      text:"Milk"
    },
    {
      id:2,
      text:"Juice"
    },
    {
      id:3,
      text:"Bread"
    },
    {
      id:4,
      text:"Fruits"
    },
  ])


  const deleteItem = (id) =>{
    return setItems((prevItems) => prevItems.filter(i => i.id != id))
  }
  const addItem = (text) =>{
    if(!text){
      return Alert.alert("Empty Field", "Please enter an item", [
        {
          text:"Ok"
        }
      ])
    }
    setItems(prevItems => {
      return [...prevItems, {id:prevItems.length + Math.random() * 10 + Math.random() * 20 , text}]
    })
   
  }
  return(
    <View style={styles.container}>
      <Header title="Todo Tasks"/>
      <AddItem addItem={addItem} />
      <FlatList data={items} renderItem={({item}) => <ListItem item={item} deleteItem={deleteItem} />}/>
      
    </View>
  )
}


const styles = StyleSheet.create({
  container:{
    paddingTop:60,
    margin:0,
    padding:0
  }
})
export default App