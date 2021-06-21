import React from 'react';
import styles from './styles'; 
import { Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'

export default function Header({ showBack, navigation, showAdd, onPress }){

    function Back(){
        navigation.navigate('Home');
    }

    function OpenQrCode(){
        navigation.navigate('QrCode');
    }

    return(

    <View style={styles.header}>

        { showBack ?
        <TouchableOpacity style={styles.backIcon} onPress={Back}>
            <Ionicons name= "arrow-back" size={42} color='#9FD996' />
        </TouchableOpacity>

        :

        <TouchableOpacity style={styles.qrcodeIcon} onPress={OpenQrCode}>
            <Ionicons name="qr-code" size={32} color='#9FD996' />
        </TouchableOpacity>
        }


        { showBack ?
        <TouchableOpacity style={styles.backIcon} onPress={Back}>
            <Ionicons name= "arrow-back" size={42} color='#9FD996' />
        </TouchableOpacity>

        :
            
        <Text style={styles.logo}> Ero'Soft </Text>   
        }

        { showAdd &&

        <TouchableOpacity style={styles.addIcon} onPress={onPress}>
            <Ionicons name= "add" size={40} color='#9FD996' />
        </TouchableOpacity>

        }

    </View>
)}

