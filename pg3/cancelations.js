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

const Cancelations = () => {
    return (
        <SafeAreaView>
            <View style={styles.header}>
                <Text style={styles.headerText}>Daftar Pembatalan</Text>
            </View>
            <View style={styles.image}>
                <Image source={require('../images/tiket.png')} style={{ width: 300, height: 150 }}/>
            </View>
            <View style={styles.textPosition}>
                <Text style={styles.text}>Tidak Ada Aktivitas Pembatalan Tiket</Text>
            </View>
        </SafeAreaView>
    )
}
export default Cancelations;