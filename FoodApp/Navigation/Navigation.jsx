import React from 'react';
import { View, Text, Button } from 'react-native';
import Product from '../components/product';

const Stack = createStackNavigation();
const screenOptionStyle = {
  headerShown: false
}

const HomeStackNavigatior = () => {
  return(
    <Stack.Navigation screenOptions={screenOptionStyle}>
    <Stack.Screen name="Home" component={Home}/>
    <Stack.Screen name="Detail" component={Detail}/>
    <Stack.Screen name="product" component={Product}/>
</Stack.Navigation>
  )
}

export default HomeStackNavigatior;
