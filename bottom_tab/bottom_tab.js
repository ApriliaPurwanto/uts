import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../pg1/home';
import Bookings from '../pg2/bookings'
import Cancelations from '../pg3/cancelations'

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#cd5c5c',
          headerShown: false,
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Bookings"
          component={Bookings}
          options={{
            tabBarLabel: 'Bookings',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="book" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Cancelations"
          component={Cancelations}
          options={{
            tabBarLabel: 'Cancelations',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="book-cancel" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
  export default MyTabs;
