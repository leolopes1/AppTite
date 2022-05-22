import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { SafeAreaView, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


import Login from './views/Login'
import Home from './views/Home'
import Explorar from './views/Explorar'
import Favoritos from './views/Favoritos'
import Carrinho from './views/Carrinho'
import RestauranteDetail from './views/RestauranteDetail'




const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs() {
    return (
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false,
                activeTintColor: '#7677FF',

            }}

            screenOptions={{
                headerShown: false,

                tabBarStyle: {
                    position: 'absolute',
                    bottom: 20,
                    left: 20,
                    right: 20,
                    elevation: 5,
                    borderRadius: 15,
                    // borderTopLeftRadius: 25,
                    // borderTopRightRadius: 25,
                    height: 90,
                    backgroundColor: '#ffffff',
                    fontSize: 50


                },
                labelStyle: { fontSize: 60 }


            }}


        >
            <Tab.Screen name="Home"
                component={Home}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={30} />
                    ),
                }}
            />
            <Tab.Screen name="Explorar"
                component={Explorar}
                options={{
                    tabBarLabel: 'Explorar',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="grid" color={color} size={30} />
                    ),
                }}
            />
            <Tab.Screen name="Favoritos"
                component={Favoritos}
                options={{
                    tabBarLabel: 'Favoritos',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="heart" color={color} size={30} />
                    ),
                }}
            />
            <Tab.Screen name="Carrinho"
                component={Carrinho}
                options={{
                    tabBarLabel: 'Carrinho',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="cart" color={color} size={30} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export default props => (
    <SafeAreaView style={{ flex: 1 }}>
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='Login'
                screenOptions={{ headerShown: false }}
            >
                <Stack.Screen name='Login' component={Login} />
                <Stack.Screen name='TelaA' component={Tabs} />
                <Stack.Screen name='Restaurante' options={{ headerShown: true }} component={RestauranteDetail} />
            </Stack.Navigator>
        </NavigationContainer>
    </SafeAreaView>
)