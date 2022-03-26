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
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { origin,destination,service,date,time,price } from '../data/data'
import { useNavigation } from '@react-navigation/native';

const Confirm = ({navigation}) => {
    const route = useRoute();
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
                            <Text style={styles.origin}>{route.params.origin}</Text>
                            <MaterialCommunityIcons name='arrow-right' size={20} style={{ color: '#cd5c5c' }} />
                            <Text style={styles.destination}>{route.params.destination}</Text>
                        </View>
                        <View>
                            <Text style={styles.title2}>Jadwal Masuk Pelabuhan</Text>
                        </View>
                        <View>
                            <Text style={styles.text2}>{route.params.date}</Text>
                            <Text style={styles.text2}>{route.params.time}</Text>
                        </View>
                        <View>
                            <Text style={styles.title2}>Layanan</Text>
                            <Text style={styles.text2}>{route.params.service}</Text>
                        </View>
                        <View style={styles.border}>
                        </View>
                        <View>
                            <Text style={styles.price}>{route.params.price}</Text>
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
                                onPress={() => {
                                    navigation.navigate('Bookings',{
                                        origin : (route.params.origin).toString(),
                                        destination : (route.params.destination).toString(),
                                        service : (route.params.service).toString(),
                                        date : (route.params.date).toString(),
                                        time : (route.params.time).toString(),
                                        price : (route.params.price).toString(),
                                        condition : 'true',
                                    }
                                    )
                                }}
                                />
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}
export default Confirm;