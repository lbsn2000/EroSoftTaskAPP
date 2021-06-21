import React, { useEffect, useState, useRef  } from 'react';
import { Modalize } from 'react-native-modalize';
import { View, Text, TouchableOpacity, ScrollView, TextInput, KeyboardAvoidingView, Alert, ActivityIndicator } from  'react-native';
import styles from './styles';
import api from '../../services/api';
import * as Network from 'expo-network'

/* Compentes do APP */
import Header from '../../components/Header';
import SubTaskCard from '../../components/SubTaskCard';
import DateTimeInput from '../../components/DateTimeInput';

export default function Task({ navigation }){

    const modalizeRef = useRef(null);
    const type = 'task';
    const subType = 'subtask';

    const [id,              setId] =                useState();
    const [subID,           setSubID] =             useState();
    const [done,            setDone] =              useState(false);
    const [subDone,         setSubDone]=            useState(false)
    const [title,           setTitle] =             useState();
    const [subTitle,        setSubTitle] =          useState();
    const [description,     setDescription] =       useState();
    const [subDescription,  setSubDescription] =    useState();
    const [startWhen,       setStartWhen] =         useState();
    const [finalWhen,       setFinalWhen] =         useState();
    const [macaddress,      setMacaddress] =        useState();
    const [load,            setLoad] =              useState(false);
    const [subLoad,         setSubLoad] =           useState(false);
    const [subTasks,        setSubTasks] =          useState([]);    
    const [filter,          setFilter] =            useState('all');
    const [isUptade,        setIsUpdate]=           useState(true);
    const [idUpdate,        setIdupdate]=           useState();
    const [updateView,      setUpdateView]=         useState(true);

    async function NewSubTask(){

        setIsUpdate(false)
        setSubTitle         (null);
        setSubDescription   (null);
        setStartWhen        (null);
        setFinalWhen        (null);
        setIdupdate         (null);
        modalizeRef.current?.open();
    }

    async function SaveSubTask(){
        
        if(!subTitle)
            return Alert.alert('Defina o título da tarefa!');
        
        if(!subDescription)
            return Alert.alert('Defina a descrição da da tarefa!');

        if(isUptade == false){
            await api.post(`/task/subtask/${id}`, {
                macaddress,
                subTitle,
                subDescription,
                subType,
                finalWhen:`${finalWhen}T12:00:00.000`,
                startWhen:`${startWhen}T12:00:00.000`,
                subDone,
                subID
            }).then(() =>{
                modalizeRef.current?.close();
            });
        }

        if(isUptade == true){

            await api.put(`/task/subtask/${idUpdate}/${subID}`, {
                macaddress,
                subTitle,
                subDescription,
                subType,
                finalWhen:`${finalWhen}T12:00:00.000`,
                startWhen:`${startWhen}T12:00:00.000`,
                subDone,
                subID, 
                title
            }).then(() =>{
                modalizeRef.current?.close();
            });
        }

        setUpdateView(false)
    }

    async function loadSubTaskCard(){

        setSubLoad(true);
        await api.get(`/task/filter/${filter}/${macaddress}/${subType}/${id}`).then(response => {
            setSubTasks(response.data.subtask);
            setSubLoad(false)})
    }

    async function LoadSubTask(id){

        setIsUpdate(true)

       await api.get(`/task/subshow/${id}/${subID}`).then(response =>{ 


            setSubDone          (response.data.subDone);
            setSubTitle         (response.data.subTitle);
            setSubDescription   (response.data.subDescription);
            setStartWhen        (response.data.startWhen);
            setFinalWhen        (response.data.finalWhen);
            setIdupdate         (response.data._id)
        });

        modalizeRef.current?.open();
    }

    async function LoadTask(){
        await api.get(`/task/${id}`).then(response =>{ 
            
            setLoad         (true);
            setDone         (response.data.done);
            setTitle        (response.data.title);
            setDescription  (response.data.description);
        });
    }

    async function SaveTask(){

        if(!title)
            return Alert.alert('Defina o título da tarefa!');
        
        if(!description)
            return Alert.alert('Defina a descrição da da tarefa!');
        
        if(id){
            await api.put(`/task/${id}`, {
                macaddress,
                title,
                description,
                type,
            }).then(() =>{
                navigation.navigate('Home');
            });

        }else{
            await api.post('/task', {
                macaddress,
                title,
                description,
                type,
            }).then(() =>{
                navigation.navigate('Home');
            });
        }
    }

    async function getMacAddress(){
        await Network.getMacAddressAsync().then(mac => {
            setMacaddress(mac);
            setLoad(false);
        });
    }

    async function DeleteTask(){
        await api.delete(`/task/${id}`).then(() => {
            navigation.navigate('Home');
        })
    }

    async function DeleteSubTask(){

        await api.delete(`/task/subtask/${idUpdate}`).then(() => {
            modalizeRef.current?.close();
            setUpdateView(false)
        })
    }

    async function RemoveSubTask(){
        Alert.alert(
            'Remover Tarefa',
            'Deseja realmente remover essa tarefa?',
            [
                {text: 'Cancelar'},
                {text: 'Confirmar', onPress: () => DeleteSubTask()},
            ],
            {cancelable: true}
        )
    }

    async function Remove(){
        Alert.alert(
            'Remover Tarefa',
            'Deseja realmente remover essa tarefa?',
            [
                {text: 'Cancelar'},
                {text: 'Confirmar', onPress: () => DeleteTask()},
            ],
            {cancelable: true}
        )
    }

    useEffect(() => {


        getMacAddress();
        setUpdateView(true)
        
        if(navigation.state.params){
            loadSubTaskCard(); 
            setId(navigation.state.params.idtask);
            setSubID(navigation.state.params.idtask);
            LoadTask().then(() => setLoad(false));
        }
      }, [macaddress, updateView]);



    return(
        <KeyboardAvoidingView style={styles.container}>
            
            <Header showNotification =  {false} 
                    showBack =          {true} 
                    navigation =        {navigation}
                    onPress =           {NewSubTask}
                    showAdd=            {navigation.state.params ?  true : false} 
                    />
            {
            load 
            ?
            <ActivityIndicator color= {'#379734'} size={40} style={{marginTop: 150}}/>
            :

              <ScrollView style={{width: '100%'}}>

                    <Text style={styles.label}>Título</Text>
                    <TextInput 
                    style={styles.input} 
                    maxLength={30} 
                    placeholder="Lembre-me de fazer..."
                    onChangeText={(text) => setTitle(text)}
                    value={title}
                    />
                    
                    <Text style={styles.label}>Detalhes</Text>
                    <TextInput 
                    style={styles.inputArea} 
                    maxLength={200} 
                    multiline={true}
                    placeholder="Detalhes da atividade..."
                    onChangeText={(text) => setDescription(text)}
                    value={description}
                    />                  

                    <View style={styles.inLine}>

                        <TouchableOpacity onPress={() => SaveTask()}>
                            <Text style={styles.saveLabel}>SALVAR</Text>
                        </TouchableOpacity>

                        {id &&
                        <TouchableOpacity onPress={Remove}> 
                            <Text style={styles.removeLabel}>Excluir</Text>
                        </TouchableOpacity>
                        }

                    </View>
                    {id &&
                    <View style={styles.title}>
                        <Text style={styles.titleText}>TAREFAS</Text>
                    </View>
                    }
                    <View  style={styles.content} contentContainerStyle={{alignItems: 'center'}}>
                    {
                    subLoad 
                    ?
                    <ActivityIndicator color= {'#379734'} size={40}/>
                    :
                    subTasks.map((t) => <SubTaskCard    key=            {t._id}  
                                                        subTitle=       {t.subTitle}
                                                        subDescription= {t.subDescription}
                                                        doneBox=        {t.subDone}
                                                        startWhen=      {t.startWhen}
                                                        finalWhen=      {t.finalWhen}
                                                        id=             {t._id}
                                                        subID=          {subID}
                                                        onPress=        {() => LoadSubTask(t._id)}/>)
                    }                                   
                </View>
            </ScrollView>}   


            <Modalize ref={modalizeRef} modalHeight={500} >
            <KeyboardAvoidingView style={styles.subcontainer}>
                    {
                    load
                    ?
                    <ActivityIndicator color={'#379734'} size={40} style={{}} />
                    :
                    <ScrollView style={{ width: '100%' }}>
                        <Text style={styles.label}>Título</Text>
                            <TextInput
                            style={styles.input}
                            maxLength={30}
                            placeholder="Lembre-me de fazer..."
                            onChangeText={(text) => setSubTitle(text)}
                            value={subTitle}
                            />

                        <Text style={styles.label}>Detalhes</Text>
                            <TextInput
                                style={styles.inputArea}
                                maxLength={200}
                                multiline={true}
                                placeholder="Detalhes da atividade..."
                                onChangeText={(text) => setSubDescription(text)}
                                value={subDescription}
                            />

                    <DateTimeInput type={'start'} save={setStartWhen} startWhen={startWhen} id={idUpdate}/>
                    <DateTimeInput type={'final'} save={setFinalWhen} finalWhen={finalWhen} id={idUpdate}/>  

                    </ScrollView>
                    }

                    <View style={styles.inLine}>

                            <TouchableOpacity onPress={() => SaveSubTask()}>
                                <Text style={styles.savesub}>SALVAR</Text>
                            </TouchableOpacity>

                            {idUpdate &&
                            <TouchableOpacity onPress={() =>RemoveSubTask()}> 
                            <Text style={styles.removesubLabel}>Excluir</Text>
                            </TouchableOpacity>
                            }

                
                    </View>
                </KeyboardAvoidingView>
            </Modalize>            
        </KeyboardAvoidingView>
)}
 