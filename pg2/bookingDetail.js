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
import styles from './bookingDetailStyle';
import { useRoute } from '@react-navigation/native';
import { origin,destination,service,date,time,price } from '../data/data'
// import { useNavigation } from '@react-navigation/native';

const BookingDetail = () => {
    return (
        <View style={styles.position_box}>
                <View style={styles.box}>
                    <View>
                    <Text style={styles.text2}>Rincian Tiket</Text>
                </View>
                <View style={styles.position_box2}>
                    <View style={styles.boxDetail}>
                        <View style={styles.harbor}>
                            <Text style={styles.origin}>Merak</Text>
                            <Text style={styles.destination}>Bakauheni</Text>
                        </View>
                        <View>
                            <Text style={styles.title2}>Jadwal Masuk Pelabuhan</Text>
                        </View>
                        <View>
                            <Text style={styles.text}>17 mar</Text>
                            <Text style={styles.text}>9</Text>
                        </View>
                        <View>
                            <Text style={styles.title2}>Layanan</Text>
                            <Text style={styles.text}>express</Text>
                        </View>
                        <View style={styles.border}>
                        </View>
                        <View>
                            <Text style={styles.price}>65000</Text>
                        </View>
                    </View>
                    <View style={styles.total}>
                        <Text style={styles.text3}>Total</Text>
                        <Text style={styles.price2}>65000</Text>
                    </View>
                </View>
                <View style={styles.position_btn}>
                    <View style={styles.btn_detail}>
                        <Button
                            title="Batalkan Pesanan"
                            color='#cd5c5c'
                            // onPress={() => navigation.goBack()}
                            />
                    </View>
                </View>
            </View>
        </View>
        
    )
}
export default BookingDetail;