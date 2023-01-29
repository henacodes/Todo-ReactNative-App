import {View, Text, StyleSheet, Image} from "react-native"


const Header = ({title}) =>{
  return(
    <View style={styles.header}>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  )
}


const styles = StyleSheet.create({
 header:{
    backgroundColor:"#007dff",
    padding:15,
    height:60
 },
 headerText:{
    color:"#ffff",
    fontSize:23,
    textAlign:"center"
 }
})
export default Header