import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import TelaA from '../views/Home'
import TelaB from '../views/Explorar'
import TelaC from '../views/Favoritos'


const Tab = createBottomTabNavigator()

export default props => (
    <Tab.Navigator tabBarOptions={{
        
        activeTintColor : 'red',
        inactiveTintColor: 'blue',
        labelStyle:{fontSize:30}

    }} screenOptions={{
        headerShown: false,
    }}
    >
        <Tab.Screen name='Home' component={TelaA}/>
        <Tab.Screen name='TelaB' component={TelaB}/>
        <Tab.Screen name='TelaC' component={TelaC}/>

    </Tab.Navigator>
  
)
