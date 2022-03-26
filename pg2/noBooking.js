import React from 'react';
import {
    SafeAreaView,
    View,
    Text,
    Image,
    TextInput,
    Button,
    StatusBar,
    ScrollView,
} from 'react-native';
// import { Icon } from 'react-native-elements';
import styles from './noBookingStyle';

const NoBooking = () => {
    return (
        <SafeAreaView>
            <View style={styles.header}>
                <Text style={styles.headerText}>Daftar Pemesanan</Text>
            </View>
            <View style={styles.image}>
                <Image source={require('../images/tiketpink2.png')} style={{ width: 300, height: 110 }}/>
            </View>
            <View style={styles.textPosition}>
                <Text style={styles.text}>Belum Ada Pembelian Tiket</Text>
            </View>
        </SafeAreaView>
    )
}
export default NoBooking;