import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    container:{
        flex: 1,
        flexDirection: 'column',
    },

    Header:{
        width: '100%',
        height: 70,
        backgroundColor: '#379734',
        justifyContent: 'center',
        alignItems: 'center',
    },

    HeaderText: {
        color: '#FFFFFF',
        fontWeight: 'bold'
    },

    ContainerButtons: {
        width: '100%',
        justifyContent: 'center',
        flexDirection: 'row',
        position: 'absolute',
        bottom: 80,
    },

    ButtonBack:{
        width: '45%',
        alignItems: 'center',
        backgroundColor: '#379734',
        padding: 10,
        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 10
    },

    ButtonScanActive:{
        width: '50%',
        alignItems: 'center',
        backgroundColor: '#9FD996',
        padding: 10,
        borderBottomRightRadius: 10,
        borderTopRightRadius: 10,
        opacity: 1.0
    },

    ButtonScanInative: {
        width: '50%',
        alignItems: 'center',
        backgroundColor: '#9FD996',
        padding: 10,
        borderBottomRightRadius: 10,
        borderTopRightRadius: 10,
        opacity: 0.5
    },

    TextButton: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 14,

    }
    
});

export default styles;

