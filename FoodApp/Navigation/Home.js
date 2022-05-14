import React from 'react'
import {View,Image,Picker, Text} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Product from '../components/Product'

export default class Home extends React.Component{
    state={
        city:"Los Angeles"
    }
    render(){
        return(
           <ScrollView style={{backgroundColor:"#FFF"}}>
               <View style={{
                   flexDirection:"row",
                   alignItems: "center",
                   marginTop: 40,
                   marginHorizontal: 20,
               }}>
                   <Image source={require('../imagen/burritovegano')} />

                   </View>

                   <View style={{
                   flexDirection:"row",
                   alignItems: "center",
                   marginTop: 40,
                   marginHorizontal: 20,
               }}>
                   <Image source={require('../imagen/Hambvegano.jpg')} />

                   </View>

                   <View style={{
                   flexDirection:"row",
                   alignItems: "center",
                   marginTop: 40,
                   marginHorizontal: 20,
               }}>
                   <Image source={require('../imagen/platovegano1.jpg')} />

                   </View>

                   <View style={{
                   flexDirection:"row",
                   alignItems: "center",
                   marginTop: 40,
                   marginHorizontal: 20,
               }}>
                   <Image source={require('../image/platovegano2')} />

                   </View>

                   <Product
                            image={require("../imagen/BowlVegano")}
                            title="plato vegano"
                            price="11.99"
                       />
                       <Product
                            image={require("../imagen/burrtovegano.jpg")}
                            title="plato vegano"
                            price="10.99"
                            marginTop={25}
                       />
                    
              </ScrollView>
        )
    }
}