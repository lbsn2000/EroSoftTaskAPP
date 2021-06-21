import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    card:{
        width: '90%',
        height: 70,
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        marginVertical: 8,
        shadowColor: '#000000',
        shadowOffset:{
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 3,
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

    cardDone:{ 
        width: '90%',
        height: 70,
        backgroundColor: '#EAE5E5',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        marginVertical: 8,
        shadowColor: '#000000',
        shadowOffset:{
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 3,
        borderRadius: 10,
        opacity: 0.5
    },
});

export default styles;





















































/*
cardRight:{
        alignItems: 'flex-end',
        justifyContent: 'space-between',
    },

    cardDate:{
        color: '#379734',
        fontWeight: 'bold',
        fontSize: 12
    },

    cardHour:{
        color: '#202020',
        fontWeight: 'bold',
        fontSize: 12
    }, 

    typeActive:{
        margin: 5
    },
*/