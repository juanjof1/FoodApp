import React from 'react';
import {View,Text, Image} from 'react-native'
import {
    ScrollView,
    TouchableOpacity} 
    from 'react-native-gesture-handler'
import Icon from '@expo/vector-icons/Entypo'
import { renderNode } from 'react-native-elements/dist/helpers';


export default class Detail extends React.Component {
 state={
   quantity:1
 }

 addQuantity= (quantity) => {
   this.setState({quantity: this.setState.quantity +1});
 }
 subtractQuantity = (quantity) => {
   if (this.setState.quantity > 0) {
     this.setState({quantity: this.state.quantity-1});
   }
 }
 render(){
  return(
    <View style={{backgroundColor:"#FFF"}}>
     <ScrollView>
       <View style={{
         flexDirection: "row",
         alignItems:"center",
         marginTop:40,
         marginHorizontal:20,
       }}>

       <View style={{width:"10%"}}>
       <TouchableOpacity
       onPress={() =>this.props.navigation.goBack()}
       >
         <image source={require('../imagen/BowlVegano.jpg')}
         />
         </TouchableOpacity>
     </View>
     <View style={{width:"80%",alignItems:"center"}}>
         
          <View style={{
            flexDirection:"row",
            alignItems:"center",
            alignSelf:"center",
          }}>
          <Image
        source={require('../imagen/burrito.jpg')}
        style={{height:25,width:20}}
         />

          <Text style={{
          paddingHorizontal:10,
          fontWeight:"bold",
          fontSize:16
          }}>290 Calories</Text>
          </View>
         </View>

         <View style={{width:"80%",alignItems:"center"}}>
         
          <View style={{
            flexDirection:"row",
            alignItems:"center",
            alignSelf:"center",
          }}>
          <Image
        source={require('../imagen/platobowl.jpg')}
        style={{height:25,width:20}}
         />

          <Text style={{
          paddingHorizontal:10,
          fontWeight:"bold",
          fontSize:16
          }}>100 Calories</Text>
          </View>
         </View>

         <View style={{width:"80%",alignItems:"center"}}>
         
          <View style={{
            flexDirection:"row",
            alignItems:"center",
            alignSelf:"center",
          }}>
          <Image
        source={require('../imagen/HambVegano.jpg')}
        style={{height:25,width:20}}
         />

          <Text style={{
          paddingHorizontal:10,
          fontWeight:"bold",
          fontSize:16
          }}>200 Calories</Text>
          </View>
         </View>


       </View>
     </ScrollView>
    </View>
  )
}
};

