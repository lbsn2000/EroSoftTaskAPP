import React, { useState, useEffect  } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './styles'; 
import { format } from 'date-fns';
import CheckBox from '@react-native-community/checkbox';
import api from '../../services/api';


export default function SubTaskCard({ doneBox, subTitle, onPress, startWhen, finalWhen, id, subID }){

    const [toggleCheckBox, setToggleCheckBox] = useState()
    const [subDone,        setSubDone] =        useState();

    async function Done(newValue){
        await api.put(`/task/subdone/${id}/${newValue}`).then(() => LoadSubTask())
        setToggleCheckBox(newValue)
    }

    async function LoadSubTask(){
        await api.get(`/task/subshow/${id}/${subID}`).then(response =>{
        setSubDone(response.data.subDone)});
    }

    useEffect(() => {
        LoadSubTask()
        setToggleCheckBox(doneBox)
      }, []);

    return(

    <TouchableOpacity style={subDone ? styles.cardDone : styles.card} onPress={onPress}>
        <View style={styles.cardLeft}> 
            <CheckBox
                disabled={false}
                value={toggleCheckBox}
                onValueChange={(newValue) => Done(newValue)}
            />
                
            <Text style={subDone ? styles.cardTitleDone : styles.cardTitle}>{subTitle}</Text>
        </View>

        <View style={styles.cardRight}> 
            <Text style={styles.cardWhen}>{format (new Date(startWhen), 'dd/MM/yyyy')}</Text>
            <Text style={styles.cardWhen}>{format (new Date(finalWhen), 'dd/MM/yyyy')}</Text>
        </View>
        
    </TouchableOpacity>  
)}


