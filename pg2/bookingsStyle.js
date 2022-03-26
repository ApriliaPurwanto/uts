import {
    StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
    box:{
        backgroundColor:'#e8e8e8',
        width:'85%',
        height:230,
        padding:20,
    },
    position_box:{
        alignItems:'center',
        justifyContent:'center',
        padding:10,
        paddingTop:35,
    },
    header:{
        backgroundColor:'#cd5c5c',
        height:55,
        alignItems:'center',
        justifyContent:'center',
    },
    headerText:{
        color:'white',
        fontSize:17,
        fontWeight:'bold',
    },
    harbor:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingBottom:10,
    },
    origin:{
        fontWeight:'bold',
        fontSize:17,
        color:'black',
    },
    destination:{
        fontWeight:'bold',
        fontSize:17,
        color:'black',
    },
    title:{
        paddingTop:10,
        fontWeight:'bold',
        color:'black',
    },
    text:{
        color:'black',
    },
    border:{
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        paddingTop:10,
    },
    price:{
        paddingTop:15,
        textAlign:'right',
        color:'#cd5c5c',
        fontWeight:'bold',
    },
});
export default styles;
