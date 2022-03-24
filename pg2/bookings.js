import React from 'react';
import {
    SafeAreaView,
    View,
    Text,
    TextInput,
    Button,
    StatusBar,
    ScrollView,
} from 'react-native';
// import {
//     Card,
//     Icon
// } from 'react-native-elements';
import styles from './bookingsStyle';

const Bookings = () => {
    return (
        <SafeAreaView>
            {/* <Card> */}
            <View style={styles.header}>
                <Text style={styles.headerText}>Daftar Pemesanan</Text>
            </View>
            <View style={styles.position_box}>
                <View style={styles.box}>
                    <View style={styles.harbor}>
                        <Text style={styles.origin}>Bakauheni</Text>
                        <Text style={styles.destination}>Merak</Text>
                    </View>
                    <View>
                        <Text style={styles.title}>Jadwal Masuk Pelabuhan</Text>
                    </View>
                    <View>
                        <Text style={styles.text}>Kamis, 17 Maret 2020</Text>
                        <Text style={styles.text}>15:30 WIB</Text>
                    </View>
                    <View>
                        <Text style={styles.title}>Layanan</Text>
                        <Text style={styles.text}>Express</Text>
                    </View>
                    <View style={styles.border}>
                    </View>
                    <View>
                        <Text style={styles.price}>Rp 65.000,00</Text>
                    </View>
                </View>
            </View>
            {/* </Card> */}
        </SafeAreaView>
    )
}
export default Bookings;