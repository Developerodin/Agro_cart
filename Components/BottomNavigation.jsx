import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
import Home from '../Pages/Home';
import OrderDetails from '../Pages/OrderDetail';
import Notification from '../Pages/Notification'
import WishList from '../Pages/Wishlist';
import HelpSupport from '../Pages/HelpSupport'

const Tab = createBottomTabNavigator();


export default function BottomNavigation() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        return (
                            <View style={focused?styles.activeTabs:''}>
                                <Image source={require('../assets/icon/home.png')} style={focused?{ tintColor: "#fff", width: 25, height: 25 }:{tintColor:"#000",width: 25, height: 25}} />
                            </View>
                        );
                    } else if (route.name === 'Favorites') {
                        return (
                            <View style={focused?styles.activeTabs:''}>
                                <Image source={require('../assets/icon/heart.png')} style={focused?{ tintColor: "#fff", width: 25, height: 25 }:{tintColor:"#000",width: 25, height: 25}} />
                            </View>
                        );
                    } else if (route.name === 'Cart') {
                        return (
                            <View style={styles.cartIcon}>
                                <Image source={require('../assets/icon/bucket.png')} style={{ tintColor: "#fff", width: 25, height: 25 }} />
                                <View style={styles.badge}>
                                    <Text style={styles.badgeText}>4</Text>
                                </View>
                            </View>
                        );
                    } else if (route.name === 'Notifications') {
                        return (
                            <View style={focused?styles.activeTabs:''}>
                                <Image source={require('../assets/icon/bell.png')} style={focused?{ tintColor: "#fff", width: 25, height: 25 }:{tintColor:"#000",width: 25, height: 25}} />
                            </View>
                        );
                    } else if (route.name === 'Profile') {
                        return (
                            <View style={focused?styles.activeTabs:''}>
                                <Image source={require('../assets/icon/profile.png')} style={focused?{ tintColor: "#fff", width: 25, height: 25 }:{tintColor:"#000",width: 25, height: 25}} />
                            </View>
                        );;
                    }
                },
                tabBarActiveTintColor: '#5AC268',
                tabBarInactiveTintColor: 'gray',
                tabBarShowLabel: false,
                headerShown: false,
                tabBarStyle: {
                    height: 70,
                    paddingBottom: 10,
                    paddingTop: 10,
                    backgroundColor: '#fff',
                    borderTopWidth: 1,
                    borderColor: '#e0e0e0',
                },
            })}
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Favorites" component={WishList} />
            <Tab.Screen name="Cart" component={Home} />
            <Tab.Screen name="Notifications" component={Notification} />
            <Tab.Screen name="Profile" component={HelpSupport} />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    activeTabs: {
        backgroundColor: '#1DAB45',
        padding: 10,
        borderRadius: "50%"
    },
    cartIcon:{
        backgroundColor:"#1DAB45",
        padding:20,
        borderRadius:'50%',
        position:"absolute",
        top:-60,
        alignItems:"center"
    },
    badge:{
        backgroundColor:"#FF324B",
        borderWidth:1,
        borderColor:"#fff",
        borderRadius:"50%",
        padding:5,
        position:"absolute",
        bottom:-15,
        width:30,
        height:30
    },
    badgeText:{
        textAlign:"center",
        color:"#fff",
    }
})