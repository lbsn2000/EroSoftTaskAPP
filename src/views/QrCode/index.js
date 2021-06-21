import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Alert, StyleSheet } from  'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner'
import * as Network from 'expo-network'
import styles from './styles';
import api from '../../services/api';


export default function QrCode({ navigation }){

    const[hasPermission, setHasPermission] = useState(null)
    const[scanned, setScanned] = useState(null)

    async function getMacAddress(){
        await Network.getMacAddressAsync().then(mac => {
            Alert.alert("Seu número é:", `${mac}`);
        })
    };

    useEffect(()=>{
        (async()=>{
            const {status} = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted') 
        })();
    }, [])

    const handleBarCodeScanned = ({data})=>{
        setScanned(true);
        if(data == 'getmacaddress')
            getMacAddress();
        else 
            Alert.alert('QrCode Inválido')
    };

    return (

        <View style={styles.container}>
            <BarCodeScanner onBarCodeScanned={scanned  ? undefined : handleBarCodeScanned }
            style={StyleSheet.absoluteFillObject}/>

            <View style={styles.Header}>
                <Text style={styles.HeaderText}>Conectar com minha conta na web!</Text>
            </View>

            <View style={styles.ContainerButtons}>
                <TouchableOpacity style={styles.ButtonBack} onPress={() => navigation.navigate('Home')}>
                    <Text style={styles.TextButton}>VOLTAR</Text>
                </TouchableOpacity>

                <TouchableOpacity style={scanned ? styles.ButtonScanActive : styles.ButtonScanInative} onPress={() => setScanned(false)}>
                    <Text style={styles.TextButton}>ESCANEAR NOVAMENTE</Text>
                </TouchableOpacity>
            </View>

        </View>

    )
}