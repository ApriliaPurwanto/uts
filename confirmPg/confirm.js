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
import styles from './confirmStyle';
import { useRoute } from '@react-navigation/native';
import { origin,destination,service,date,time,price } from '../data/data'
// import { useNavigation } from '@react-navigation/native';

const Confirm = () => {
    return(

        <SafeAreaView>
            <View style={styles.position_box}>
                <View style={styles.box}>
                    <View>
                        <Text style={styles.text3}>Informasi Pemesanan</Text>
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
                            <Text style={styles.text2}>3 April 2022</Text>
                            <Text style={styles.text2}>09:00</Text>
                        </View>
                        <View>
                            <Text style={styles.title2}>Layanan</Text>
                            <Text style={styles.text2}>Express</Text>
                        </View>
                        <View style={styles.border}>
                        </View>
                        <View>
                            <Text style={styles.price}>Rp 350.000</Text>
                        </View>
                    </View>
                </View>
                    <View>
                        <Text style={styles.text4}>Data Pemesan</Text>
                    </View>
                    <View>
                        <Text style={styles.text}>Nama Lengkap</Text>
                        <TextInput style={styles.TextInput}
                            placeholder='Aprilia Purwanto'
                        />
                        <Text style={styles.text}>Nomor HP</Text>
                        <TextInput style={styles.TextInput}
                            placeholder='081234567890'
                        />               
                    </View>
                    <View style={styles.position_btn}>
                        <View style={styles.btn_detail}>
                            <Button
                                title="Confirm"
                                color='#cd5c5c'
                                // onPress={() => navigation.goBack()}
                                />
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}
export default Confirm;