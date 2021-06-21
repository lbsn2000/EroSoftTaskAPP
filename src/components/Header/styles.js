import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    header:{
        width: '100%',
        height: 80,
        backgroundColor: '#379734',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 25,
        shadowColor: '#000',
        shadowOpacity:  1,
        shadowRadius: 10,
        elevation: 6,
    },

    logo:{
        fontSize: 26,
        color: '#FFFFFF',
        fontWeight: 'bold',
        textShadowColor: '#9FD996',
        textShadowOffset: {width: 0, height: 0},
        textShadowRadius: 10,
        position: 'absolute',
        left: 10,
        bottom: 7
    },

    qrcodeIcon:{
        position: 'absolute',
        right: 20,
        bottom: 7
    },

    backIcon:{
        position: 'absolute',
        left: 15,
        bottom: 3
    },

    saveArea:{
        alignItems: 'center',
        paddingTop: 5
    },

    saveButton:{
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
         
    },

    addIcon:{
        position: 'absolute',
        right: 12,
        bottom: 3
    },
});

export default styles;






































/*
notification:{
        position: 'absolute',
        right: 20,
        bottom: 10,
        backgroundColor: 'red'

    },

    notificationImage:{
        position: 'absolute',
        right: -8,
        bottom: -3

    },

    circle:{
        width: 20,
        height: 20,
        backgroundColor: '#FFFFFF',
        borderRadius: 50,
        alignItems: 'center',
        position: 'absolute',
        left: -13,
        bottom: 13,
        alignItems: 'center',
        justifyContent: 'center'

    },

    notificationText:{
        fontWeight: 'bold',
        fontSize: 16,
        color: '#379734'
        
    },

    */