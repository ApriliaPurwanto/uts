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

const CancelDetail = ({navigation}) => {
    const route = useRoute();
    return (
        <SafeAreaView>
            <View style={styles.header}>
                <Text style={styles.headerText}>Daftar Pembatalan</Text>
            </View>
            <View style={styles.position_box}>
                <View style={styles.box}>
                    <Text style={styles.title1}>DIBATALKAN</Text>
                    <View style={styles.harbor}>
                        <Text style={styles.origin}>{route.params.origin}</Text>
                        <Text style={styles.destination}>{route.params.destination}</Text>
                    </View>
                    <View>
                        <Text style={styles.title}>Jadwal Masuk Pelabuhan</Text>
                    </View>
                    <View>
                        <Text style={styles.text}>{route.params.date}</Text>
                        <Text style={styles.text}>{route.params.time}</Text>
                    </View>
                    <View>
                        <Text style={styles.title}>Layanan</Text>
                        <Text style={styles.text}>{route.params.service}</Text>
                    </View>
                    <View style={styles.border}>
                    </View>
                    <View>
                        <Text style={styles.price}>{route.params.price}</Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}
export default CancelDetail;