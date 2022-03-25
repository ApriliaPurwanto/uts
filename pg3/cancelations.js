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
import styles from './cancelationsStyle';
import styless from './cancelDetailStyle'
import { NavigationHelpersContext, useRoute } from '@react-navigation/native';

const Cancelations = ({navigation}) => {

    const route = useRoute()

    let a = false;

    return (
        <Check/>
    )

    function NotFound(){
        return (
            <SafeAreaView>
            <View style={styles.header}>
                <Text style={styles.headerText}>Daftar Pembatalan</Text>
            </View>
            <View style={styles.image}>
                <Image source={require('../images/tiketpink.png')} style={{ width: 300, height: 150 }}/>
            </View>
            <View style={styles.textPosition}>
                <Text style={styles.text}>Tidak Ada Aktivitas Pembatalan Tiket</Text>
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
        navigation.navigate('Bookings',{
            condition : 'false'
        })
        return (
            <SafeAreaView>
            <View style={styless.header}>
                <Text style={styless.headerText}>Daftar Pembatalan</Text>
            </View>
            <View style={styless.position_box}>
                <View style={styless.box}>
                    <Text style={styless.title1}>DIBATALKAN</Text>
                    <View style={styless.harbor}>
                        <Text style={styless.origin}>{route.params.origin}</Text>
                        <Text style={styless.destination}>{route.params.destination}</Text>
                    </View>
                    <View>
                        <Text style={styless.title}>Jadwal Masuk Pelabuhan</Text>
                    </View>
                    <View>
                        <Text style={styless.text}>{route.params.date}</Text>
                        <Text style={styless.text}>{route.params.time}</Text>
                    </View>
                    <View>
                        <Text style={styless.title}>Layanan</Text>
                        <Text style={styless.text}>{route.params.service}</Text>
                    </View>
                    <View style={styless.border}>
                    </View>
                    <View>
                        <Text style={styless.price}>{route.params.price}</Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
        )
    }

}
export default Cancelations;