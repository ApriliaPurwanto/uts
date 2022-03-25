import React from 'react';
import {
    SafeAreaView,
    View,
    Text,
    TextInput,
    Button,
    ScrollView,
    FlatList,
} from 'react-native';
// import {
//     Card,
//     Icon
// } from 'react-native-elements';
import styles from './cancelDetailStyle';
import { useRoute } from '@react-navigation/native';
import { origin,destination,service,date,time,price } from '../data/data'
// import { useNavigation } from '@react-navigation/native';

const CancelDetail = () => {
    return (
        <SafeAreaView>
            <View style={styles.header}>
                <Text style={styles.headerText}>Daftar Pembatalan</Text>
            </View>
            <View style={styles.position_box}>
                <View style={styles.box}>
                    <Text style={styles.title1}>DIBATALKAN</Text>
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
        </SafeAreaView>
    )
}
export default CancelDetail;