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
    TouchableOpacity,
} from 'react-native';
// import {
//     Card,
// } from 'react-native-elements';
import styles from './bookingsStyle';
import { useRoute } from '@react-navigation/native';
import styless from './noBookingStyle';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Bookings = ({navigation}) => {

    const route = useRoute()

    let a = false;

    return (
        <Check/>
    )

    function NotFound(){
        return (
            <SafeAreaView>
            <View style={styless.header}>
                <Text style={styless.headerText}>Daftar Pemesanan</Text>
            </View>
            <View style={styless.image}>
                <Image source={require('../images/tiketpink2.png')} style={{ width: 300, height: 110 }}/>
            </View>
            <View style={styless.textPosition}>
                <Text style={styless.text}>Belum Ada Pembelian Tiket</Text>
            </View>
        </SafeAreaView>
        )
    }

    function Check(){
        try {
            a = route.params.condition;
        } catch (err) {
            a = false;
        }

        let result = a ? HaveData() : NotFound();

        return result;
    }

    function HaveData(){
        return(
            <SafeAreaView>
            <View style={styles.header}>
                <Text style={styles.headerText}>Daftar Pemesanan</Text>
            </View>
            <View style={styles.position_box}>
            <TouchableOpacity style={styles.box} onPress={() => {
                navigation.navigate('BookingDetail',{
                origin : (route.params.origin).toString(),
                destination : (route.params.destination).toString(),
                service : (route.params.service).toString(),
                date : (route.params.date).toString(),
                time : (route.params.time).toString(),
                price : (route.params.price).toString(),
                })
                }}>
                <View>
                    <View style={styles.harbor}>
                        <Text style={styles.origin}>{route.params.origin}</Text>
                        <MaterialCommunityIcons name='arrow-right' size={20} style={{ color: '#cd5c5c' }} />
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
                </TouchableOpacity>
            </View>
        </SafeAreaView>
        )
    }
}
export default Bookings;