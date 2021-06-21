import React from 'react';
import styles from './styles'; 
import { View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'

export default function Footer({onPress}){

    return(

        <View style={styles.container}>
            <TouchableOpacity style={styles.addArea} onPress={onPress}>
                <Ionicons name="add" size={30} color='#FFFFFF' />
            </TouchableOpacity>
        </View>
    )}