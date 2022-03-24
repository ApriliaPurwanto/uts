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
import styles from './proceedStyle';
import { useRoute } from '@react-navigation/native';
import { origin,destination,service,date,time,price } from '../data/data'
// import { useNavigation } from '@react-navigation/native';

const Proceed = ({navigation}) => {
    const route = useRoute();
    return(
        <SafeAreaView>
            <SearchData/>
        </SafeAreaView>
    );
    
    function NotFound(){
        return(
                <View style={styles.notfound}>
                    {/* <Image source={require('../image/notfound.png')} style={{ width: 30, height: 30 }}/> */}
                <View style={styles.notfound}>
                    <Text> Ticket Is Not Available</Text>
                </View>
                <View style={styles.notfound}>
                    <Text>Please Choose Another Schedule</Text>
                </View>
                </View> 
        );
    }

    function SearchData(){        
        if(route.params.origin === '' || route.params.destination === '' || route.params.service === '' || route.params.date === '' || route.params.time === ''){
                return NotFound();
            } else {
                const originID = origin.find(id => id.origin_name.toLowerCase() === route.params.origin.toLowerCase()).origin_id;
                console.log(originID);
                const destinationID = destination.find(id => id.destination_name.toLowerCase() === route.params.destination.toLowerCase()).destination_id;
                console.log(destinationID);
                const serviceID = service.find(id => id.service_name.toLowerCase() === route.params.service.toLowerCase()).service_id;
                console.log(serviceID);
                const dateID = date.find(id => id.date_detail.toLowerCase() === route.params.date.toLowerCase()).date_id;
                console.log(dateID);
                const timeID = time.find(id => id.time_detail.toLowerCase() === route.params.time.toLowerCase()).time_id;
                console.log(timeID);
                const Hasil = price.filter(id => id.origin_id.toLocaleLowerCase() === originID.toLocaleLowerCase() && id.destination_id.toLocaleLowerCase() === destinationID.toLocaleLowerCase() && id.service_id.toLocaleLowerCase() === serviceID.toLocaleLowerCase() && id.date_id.toLocaleLowerCase() === dateID.toLocaleLowerCase() && id.time_id.toLocaleLowerCase() === timeID.toLocaleLowerCase());
    
                let findAll = (Hasil.length >= 1) ? DataFound(Hasil) : NotFound() ;

                console.log(Hasil.length);
    
                return findAll;
            }
         }  
         
         
         function DataFound(Hasil){
            return(
                <FlatList
                data = {Hasil}
                renderItem={({item}) => (
                    <View style={styles.position_box}>
                <View style={styles.box}>
                    <View>
                    <Text style={styles.text2}>Rincian Tiket</Text>
                </View>
                <View style={styles.position_box2}>
                    <View style={styles.boxDetail}>
                        <View style={styles.harbor}>
                            <Text style={styles.origin}>{origin.find(f => f.origin_id === item.origin_id).origin_name}</Text>
                            <Text style={styles.destination}>{destination.find(f => f.destination_id === item.destination_id).destination_name}</Text>
                        </View>
                        <View>
                            <Text style={styles.title2}>Jadwal Masuk Pelabuhan</Text>
                        </View>
                        <View>
                            <Text style={styles.text}>{date.find(f => f.date_id === item.date_id).date_detail}</Text>
                            <Text style={styles.text}>{time.find(f => f.time_id === item.time_id).time_detail}</Text>
                        </View>
                        <View>
                            <Text style={styles.title2}>Layanan</Text>
                            <Text style={styles.text}>{service.find(f => f.service_id === item.service_id).service_name}</Text>
                        </View>
                        <View style={styles.border}>
                        </View>
                        <View>
                            <Text style={styles.price}>{price.find(f => f.price_id === item.price_id).price_detail}</Text>
                        </View>
                    </View>
                    <View style={styles.total}>
                        <Text style={styles.text3}>Total</Text>
                        <Text style={styles.price2}>{price.find(f => f.price_id === item.price_id).price_detail}</Text>
                    </View>
                </View>
                <View style={styles.position_btn}>
                    <View style={styles.btn_detail}>
                        <Button
                            title="Kembali"
                            color='#cd5c5c'
                            onPress={() => navigation.goBack()}
                            />
                    </View>
                    <View style={styles.btn_detail}>
                        <Button
                            title="Lanjutkan"
                            color="#cd5c5c"
                            // onPress={Search}
                            />
                    </View>
                </View>
            </View>
        </View>
        
            )}
            keyExtractor={item => item.price_id}
            />
            );
        }
}



export default Proceed;