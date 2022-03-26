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
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './homeStyle';

const Home = ({navigation}) => {

    const [origin, onChangeOrigin] = React.useState('');
    const [destination, onChangeDestination] = React.useState('');
    const [service, onChangeService] = React.useState('');
    const [date, onChangeDate] = React.useState('');
    const [time, onChangeTime] = React.useState('');

    const Search = () =>{
        navigation.navigate('Proceed',{
            origin : origin,
            destination : destination,
            service : service,
            date : date,
            time : time,
        })
    }
    return (
        <SafeAreaView>
            <View style={styles.position_box}>
                <View style={styles.box}>
                    <View style={styles.title}>
                        <Text style={styles.title}>Kapalzy</Text>
                    </View>
                    <Text style={styles.text}>Pelabuhan Awal</Text>
                    <View style={styles.position}>
                        <MaterialCommunityIcons name='sail-boat' size={30} style={{ color: '#cd5c5c', paddingRight:10, }} />
                        <TextInput style={styles.TextInput}
                            onChangeText={onChangeOrigin}
                            value={origin}
                            placeholder='Pilih Pelabuhan Awal'
                        />
                    </View>
                    <Text style={styles.text}>Pelabuhan Tujuan</Text>
                    <View style={styles.position}>
                        <MaterialCommunityIcons name='sail-boat' size={30} style={{ color: '#cd5c5c', paddingRight:10, }} />
                        <TextInput style={styles.TextInput}
                            onChangeText={onChangeDestination}
                            value={destination}
                            placeholder='Pilih Pelabuhan Tujuan'
                        />
                    </View>
                    <Text style={styles.text}>Kelas Layanan</Text>
                    <View style={styles.position}>
                        <MaterialCommunityIcons name='bag-checked' size={30} style={{ color: '#cd5c5c', paddingRight:10, }} />
                        <TextInput style={styles.TextInput}
                            onChangeText={onChangeService}
                            value={service}
                            placeholder='Pilih Layanan'
                        />
                    </View>
                    <Text style={styles.text}>Tanggal Masuk Pelabuhan</Text>
                    <View style={styles.position}>
                        <MaterialCommunityIcons name='calendar' size={30} style={{ color: '#cd5c5c', paddingRight:10, }} />
                        <TextInput style={styles.TextInput}
                            onChangeText={onChangeDate}
                            value={date}
                            placeholder='Pilih Tanggal Masuk'
                        />
                    </View>
                    <Text style={styles.text}>Jam Masuk Pelabuhan</Text>
                    <View style={styles.position}>
                        <MaterialCommunityIcons name='clock-time-four-outline' size={30} style={{ color: '#cd5c5c', paddingRight:10, }} />
                        <TextInput style={styles.TextInput}
                            onChangeText={onChangeTime}
                            value={time}
                            placeholder='Pilih Jam Masuk'
                        />
                    </View>
                    <View style={styles.position_box}>
                        <View style={styles.search_btn}>
                                <Button
                                    title="Buat Tiket"
                                    color="#cd5c5c"
                                    onPress={Search}
                                />
                            </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}
export default Home;