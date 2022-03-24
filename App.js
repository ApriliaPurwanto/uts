import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './pg1/home'
import Bookings from './pg2/bookings'
import Cancelations from './pg3/cancelations'
import MyTabs from './bottom_tab/bottom_tab'

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="MyTabs" component={MyTabs}/>
        <Stack.Screen name="Bookings" component={Bookings}/>
        <Stack.Screen name="Cancelations" component={Cancelations}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
