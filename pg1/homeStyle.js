import {
    StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
    box:{
        backgroundColor:'white',
        width:'80%',
        height:600,
        padding:20,
    },
    title:{
        color:'#cd5c5c',
        fontSize:25,
        fontWeight:'bold',
        alignItems:'center',
        paddingBottom:15,
    },
    position_box:{
        alignItems:'center',
        justifyContent:'center',
        paddingTop:'16%',
    },
    text:{
        color:'black',
        fontWeight:'bold',
        padding:10,
        paddingLeft:5,
    },
    TextInput:{
        borderWidth:1,
        width:'83%',
        borderRadius:10,
        color:'black',
        padding:5,
        paddingLeft:10,
    },
    position:{
        alignItems:'center',
        flexDirection:'row',
    },
    search_btn:{
        color:'white',
        width:'90%',
        paddingTop:5,
        borderRadius:10,
    },
    position_btn:{
        alignItems:'center',
    }
});
export default styles;
