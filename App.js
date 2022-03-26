import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './pg1/home'
import Bookings from './pg2/bookings'
import Cancelations from './pg3/cancelations'
import MyTabs from './bottom_tab/bottom_tab'
import Proceed from './proceedPg/proceed'
import Confirm from './confirmPg/confirm'
import BookingDetail from './pg2/bookingDetail';
import NoBooking from './pg2/noBooking';
import CancelDetail from './pg3/cancelDetail';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="MyTabs" component={MyTabs}/>
        {/* <Stack.Screen name="Bookings" component={Bookings}/> */}
        {/* <Stack.Screen name="Cancelations" component={Cancelations}/> */}
        <Stack.Screen name="Proceed" component={Proceed}/>
        <Stack.Screen name="Confirm" component={Confirm}/>
        <Stack.Screen name="BookingDetail" component={BookingDetail}/>
        {/* <Stack.Screen name="NoBooking" component={NoBooking}/> */}
        {/* <Stack.Screen name="CancelDetail" component={CancelDetail}/> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
