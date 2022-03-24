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
// import { Icon } from 'react-native-elements';
import styles from './homeStyle';

const Home = () => {
    return (
        <SafeAreaView>
            <View style={styles.position_box}>
                <View style={styles.box}>
                    <View style={styles.title}>
                    <Text style={styles.title}>Kapalzy</Text>
                    </View>
                    <Text style={styles.text}>Pelabuhan Awal</Text>
                    <View style={styles.position}>
                        <TextInput style={styles.TextInput}
                                placeholder='Pilih Pelabuhan Awal'
                        />
                    </View>
                    <Text style={styles.text}>Pelabuhan Tujuan</Text>
                    <View style={styles.position}>
                        <TextInput style={styles.TextInput}
                                placeholder='Pilih Pelabuhan Tujuan'
                        />
                    </View>
                    <Text style={styles.text}>Kelas Layanan</Text>
                    <View style={styles.position}>
                        <TextInput style={styles.TextInput}
                                placeholder='Pilih Layanan'
                        />
                    </View>
                    <Text style={styles.text}>Tanggal Masuk Pelabuhan</Text>
                    <View style={styles.position}>
                        <TextInput style={styles.TextInput}
                                placeholder='Pilih Tanggal Masuk'
                        />
                    </View>
                    <Text style={styles.text}>Jam Masuk Pelabuhan</Text>
                    <View style={styles.position}>
                        <TextInput style={styles.TextInput}
                                placeholder='Pilih Jam Masuk'
                        />
                    </View>
                    <View style={styles.position}>
                        <View style={styles.search_btn}>
                                <Button
                                    title="Buat Tiket"
                                    color="#cd5c5c"
                                    // onPress={Search}
                                />
                            </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}
export default Home;