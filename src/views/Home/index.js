import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, ActivityIndicator } from  'react-native';
import styles from './styles';
import api from '../../services/api';
import * as Network from 'expo-network'

/* Compentes do APP */
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TaskCard from '../../components/TaskCard';

export default function Home({ navigation }){

    const type = 'task';
    const [filter,      setFilter] =        useState('all');
    const [tasks,       setTasks] =         useState([]);
    const [load,        setLoad] =          useState(false);
    const [macaddress,  setMacaddress] =    useState();

    async function getMacAddress(){
        await Network.getMacAddressAsync().then(mac => {setMacaddress(mac);});
    }

    async function loadTasks(){
        
        setLoad(true);
        await api.get(`/task/filter/all/${macaddress}/${type}`)
        .then(response => {
            setTasks(response.data);
            setLoad(false)})
    }

    function New(){
        navigation.navigate('Task');
    }

    function Show(id){
        navigation.navigate('Task', {idtask: id})
    }

    useEffect(() =>{
        getMacAddress().then(() =>{loadTasks()})
    }, [macaddress])
    
    return(
        <View style={styles.container}>
            <Header showNotification={true} showBack={false} navigation={navigation}/>

                <View style={styles.title}>
                    <Text style={styles.titleText}>TAREFAS{filter == 'late' && 'ATRASADAS'}</Text>
                </View>

                <ScrollView  style={styles.content} contentContainerStyle={{alignItems: 'center'}}>
                    {
                    load 
                    ?
                    <ActivityIndicator color= {'#379734'} size={40}/>
                    :
                    tasks.map((t) => <TaskCard  key=    {t._id}  
                                                doneBox={t.done} 
                                                title=  {t.title}
                                                type=   {t.type} 
                                                id=     {t._id}
                                                onPress={() => Show(t._id)}/>)
                    }                                   
                </ScrollView>

               <Footer onPress={New}/>
        </View>
    )}
    







































































{/*
                <View style={styles.filter}>
                    <TouchableOpacity onPress={() => setFilter('all')}>

                        <Text 
                        style={filter == 'all' ? styles.filterTextActived 
                        : styles.filterTextInactive}>Todos
                        </Text>

                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setFilter('today')}>
                        
                        <Text 
                        style={filter == 'today' ? styles.filterTextActived 
                        : styles.filterTextInactive}>Hoje
                        </Text>

                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setFilter('week')}>
                    
                        <Text 
                        style={filter == 'week' ? styles.filterTextActived 
                        : styles.filterTextInactive}>Semana
                        </Text>

                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setFilter('month')}>
                        
                        <Text 
                        style={filter == 'month' ? styles.filterTextActived 
                        : styles.filterTextInactive}>Mês
                        </Text>

                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setFilter('year')}>
                        
                        <Text 
                        style={filter == 'year' ? styles.filterTextActived 
                        : styles.filterTextInactive}>Ano
                        </Text>

                    </TouchableOpacity>
                </View>
                */}
/*
 async function lateVerif(){
        await api.get(`/task/filter/late/${macaddress}`).then(response => {
            setLateCount(response.data.length)
        });
    }

    function Notification(){
        setFilter('late');
    }
*/