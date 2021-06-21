import React, { useState, useEffect } from 'react';
import styles from './styles';
import { TouchableOpacity, TextInput, Alert } from 'react-native';
import { endOfDay, format, isPast } from 'date-fns';
import DateTimePicker from '@react-native-community/datetimepicker';


export default function DateTimeInput({ type, save, startWhen, finalWhen, id }) {

    const [show,            setShow] =           useState(false);
    const [startDisplay,    setStartDisplay] =   useState();
    const [finalDisplay,    setFinalDisplay] =   useState();
    const [startTime,       setStartTime] =      useState(new Date());
    const [finalTime,       setFinalTime] =      useState(new Date());
    const [loadDateTime,    setLoadDateTime] =   useState();

    /* Define a data e hora atual com padrão */
    async function setDatePattern (){
        if(type == 'start'){
            setStartDisplay((format(new Date(startTime), 'dd/MM/yyyy')));
            save(format(new Date(startTime), 'yyyy-MM-dd'));
        }else if(type == 'final'){
            setFinalDisplay((format(new Date(finalTime), 'dd/MM/yyyy')));
            save(format(new Date(finalTime), 'yyyy-MM-dd'));
        };
    };
        
    /* Ativia o seletor de data e hora */
    async function activateTimePicker(){
        setShow(true);        
    };
 
    /* Salvar a data e a hora no banco de dados */
    async function selectDateOrHour (event,  selectedDate){

        const currentDate = selectedDate;
        setShow(false);
        if (event.type != "dismissed"){   

            if(type == 'start'){

                if(isPast(new Date(endOfDay(currentDate)))){
                    Alert.alert("Escolha uma data futura!")
                }else{
                    setStartTime(currentDate);  
                    setStartDisplay(format(new Date(currentDate), 'dd/MM/yyyy'));
                    save(format(new Date(currentDate), 'yyyy-MM-dd'));
                }
            }else{
                if(isPast(new Date(endOfDay(currentDate)))){
                    Alert.alert("Escolha uma data futura!")
                }else{
                    setFinalTime(currentDate);
                    setFinalDisplay(format(new Date(currentDate), 'dd/MM/yyyy'));
                    save(format(new Date(currentDate), 'yyyy-MM-dd'));
                }
            };
        }
    };

 
    useEffect(() => {

        if(!id){
            setDatePattern();
        }

        else{
            if(startWhen && loadDateTime != true){
                setStartTime(new Date(startWhen));
            }

            if(finalWhen && loadDateTime != true){
                setFinalTime(new Date(finalWhen));
            }

            if(id && loadDateTime != true){

                setLoadDateTime(true);

                if(type == 'start'){
                    setStartDisplay(format(new Date(startWhen), 'dd/MM/yyyy'));
                    save(format(new Date(startWhen), 'yyyy-MM-dd'));
                }else{
                    setFinalDisplay(format(new Date(finalWhen), 'dd/MM/yyyy'));
                    save(format(new Date(finalWhen), 'yyyy-MM-dd'));
                }
            }
        }
    })
 
    return (
        <TouchableOpacity style={styles.datePlace} onPress={activateTimePicker}>
            <TextInput 
                style={styles.input} 
                editable={false}
                value={type == 'start' ? startDisplay : finalDisplay} 
            />
            <>
                {show && (
                        <DateTimePicker
                        value = {type == 'start' ?  startTime : finalTime } 
                        mode= {'date'}
                        is24Hour={true}
                        display= "default"
                        onChange={selectDateOrHour}
                        style={styles.datetimestyle}
                        />
                )}               
            </>
        </TouchableOpacity>
        
    )
}   

