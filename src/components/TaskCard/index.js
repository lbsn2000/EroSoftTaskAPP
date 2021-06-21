import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './styles'; 
import CheckBox from '@react-native-community/checkbox';
import api from '../../services/api';

export default function TaskCard({ title, onPress, id, doneBox }){
    
    const [toggleCheckBox,  setToggleCheckBox] =    useState();
    const [done,            setDone] =              useState();


    async function LoadTask(){
        await api.get(`/task/${id}`).then(response =>{ 
        setDone(response.data.done)})
    }

    async function Done(newValue){
        await api.put(`/task/done/${id}/${newValue}`).then(() => LoadTask())
        setToggleCheckBox(newValue)
    }

    useEffect(() => {
        LoadTask();
        setToggleCheckBox(doneBox);
      }, []);

    return(
        

    <TouchableOpacity style={done ? styles.cardDone : styles.card} onPress={onPress}>
    
        <View style={styles.cardLeft}>
            <CheckBox
                disabled={false}
                value={toggleCheckBox}
                onValueChange={(newValue) => Done(newValue)}
            />

            <Text style={done ? styles.cardTitleDone : styles.cardTitle}>{title}</Text>
        
        </View>
    </TouchableOpacity>

)}