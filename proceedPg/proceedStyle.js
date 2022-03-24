import {
    StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
    box:{
        backgroundColor:'white',
        width:'80%',
        height:450,
        padding:20,
    },
    position_box:{
        alignItems:'center',
        justifyContent:'center',
        paddingTop:'16%',
    },
    title:{
        color:'#cd5c5c',
        fontSize:25,
        fontWeight:'bold',
        alignItems:'center',
        paddingBottom:15,
    },
    position_box2:{
        alignItems:'center',
        justifyContent:'center',
        paddingTop:20,
    },
    text2:{
        color:'black',
    },
    text3:{
        color:'black',
        fontWeight:'bold',
        fontSize:20,
        flex:1,
    },
    total :{
        flexDirection:'row',
        paddingTop:15,
    },
    boxDetail:{
        backgroundColor:'#e8e8e8',
        width:'100%',
        height:230,
        padding:20,
    },
    harbor:{
        flexDirection:'row',
        paddingBottom:10,
    },
    origin:{
        flex:1,
        fontWeight:'bold',
        fontSize:17,
        color:'black',
    },
    destination:{
        fontWeight:'bold',
        fontSize:17,
        color:'black',
    },
    title2:{
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
        color:'black',
    },
    price2:{
        fontWeight:'bold',
        fontSize:20,
        color:'black',
    },
    position_btn:{
        alignItems:'center',
        justifyContent:'center',
        paddingTop:'16%',
        flexDirection:'row',
        justifyContent:'space-evenly',
    },
    btn_detail:{
        width:'40%',
    },
    notfound:{
        justifyContent:'center',
        alignItems:'center',
    }
});
export default styles;