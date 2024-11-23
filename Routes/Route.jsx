import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Onboarding from '../Components/Onboarding';
import Login from '../Pages/Login';
import Signup from '../Pages/Signup';
import Stepper from '../Components/Stepper';
import Home from '../Pages/Home';
import BottomNavigation from '../Components/BottomNavigation';
import Allcategory from '../Pages/Allcategory';
import OrderDetails from '../Pages/OrderDetail'
import CategoryDetails from '../Pages/CategoryDetails';
import HelpSupport from '../Pages/HelpSupport';
import Accountsetting from '../Pages/Accountsetting';
import BusinessInfoScreen from '../Pages/BusinessInfoScreen';
import FAQ from '../Pages/FAQ';
import ChangePass from '../Pages/ChangePass';

const Stack = createNativeStackNavigator();

export default function Route() {
  return (
    <Stack.Navigator
        initialRouteName='OnBoarding'
        screenOptions={{
            headerShown:false
        }}
    >
        <Stack.Screen name='OnBoarding' component={Onboarding}/>
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name="Signup" component={Signup}/>
        <Stack.Screen name="Stepper" component={Stepper} options={{headerShown:true,headerTitle:"Restaurant Profile Setup"}}/>
        <Stack.Screen name='Bottomnavigation' component={BottomNavigation}/>
        <Stack.Screen name='Category' component={Allcategory}/>
        <Stack.Screen name='Details' component={OrderDetails}/>
        <Stack.Screen name='CategoryDetails' component={CategoryDetails}/>
        <Stack.Screen name='Help' component={HelpSupport}/>
        <Stack.Screen name='AccountSetting' component={Accountsetting}/>
        <Stack.Screen name="BusinessInfo" component={BusinessInfoScreen}/>
        <Stack.Screen name="FAQ" component={FAQ}/>
        <Stack.Screen name='ChangePass' component={ChangePass}/>
    </Stack.Navigator>
  )
}