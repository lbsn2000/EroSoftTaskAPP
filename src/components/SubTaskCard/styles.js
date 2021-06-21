import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    card:{
        width: '90%',
        height: 70,
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        marginVertical: 5,
        shadowColor: '#000000',
        shadowOffset:{
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 5,
        elevation: 2,
        borderRadius: 10
    },

    cardLeft:{
        flexDirection: 'row',
        alignItems: 'center',
    },

    cardTitle:{
        margin: 5,
        fontSize: 16,
        fontWeight: 'bold'
    },

    cardTitleDone:{
        margin: 5,
        fontSize: 16,
        fontWeight: 'bold',
        textDecorationLine: 'line-through'
    },

    cardRight:{
        alignItems: 'flex-end',
        justifyContent: 'space-between',
    },

    cardWhen:{
        color: '#000000',
        fontWeight: 'bold',
        fontSize: 14
    },

    cardDone:{
        width: '90%',
        height: 70,
        backgroundColor: '#EAE5E5',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        marginVertical: 5,
        shadowColor: '#000000',
        shadowOffset:{
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 5,
        elevation: 2,
        borderRadius: 10    
    },

    cardTitleDone:{
        margin: 5,
        fontSize: 16,
        fontWeight: 'bold',
        textDecorationLine: 'line-through'
    },
});

export default styles;
















































/*
typeActive:{
        margin: 5
    },

     cardHour:{
        color: '#202020',
        fontWeight: 'bold',
        fontSize: 12
    },
*/