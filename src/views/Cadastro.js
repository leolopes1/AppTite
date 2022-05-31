import React from 'react'
import { SafeAreaView, View, Text, Image, StyleSheet, TextInput, Pressable } from 'react-native'
import TextoCentral from '../components/TextoCentral'
import PassoStack from '../components/PassoStack'

const logo = require('../assets/logo.png')

const styles = StyleSheet.create({
    logo: {
        width: 250,
        height: 80,

    },
    containerLogo:{
        
        justifyContent:'flex-start',
        height:'20%',
    },
    container:{
        
        height:'40%',
        alignItems:'center',
        justifyContent:'center',
        width:'90%',
        backgroundColor:'white',

    },
    background:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'white',
    },
    input:{
        width:'90%',
        borderWidth: 1,
        borderColor: '#C2CDD5',
        marginBottom:15,
        fontSize:17,
        fontWeight:'600',
        borderRadius:7,
        padding:10,

    },
    btnSubmit:{
        width: "90%",
        height:45,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:7,
        marginBottom:15,
    }

});

export default function Cadastro ({navigation}) {

    return (
        <SafeAreaView style={styles.background}>
            <View style={styles.containerLogo}>
                <Image
                    style={styles.logo}
                    source={logo}
                />
            </View>
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    placeholder='Nome Completo'
                    autoCorrect={false}
                    onChangeText={() => { }}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Email'
                    autoCorrect={false}
                    onChangeText={() => { }}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Criar Senha'
                    autoCorrect={false}
                    onChangeText={() => { }}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Confirmar Senha'
                    autoCorrect={false}
                    onChangeText={() => { }}
                />
                <Pressable style={
                  ({ pressed }) => [
                  { backgroundColor: pressed ? '#7879F1' : '#7677FF' }, 
                  styles.btnSubmit]} onPress={() => navigation.navigate('TelaA')}>
                    <Text style={{color: 'white'}}>CADASTRA-SE</Text>
                </Pressable>
                <View style={{flexDirection: 'row', width: "90%", justifyContent: "flex-end"}}>
                <Text style={{marginHorizontal: 8,}}>Já é Usuário?</Text>
                <Pressable onPress={() => navigation.navigate('Login')}>
                    <Text style={{color: "blue"}}>Logar</Text>
                </Pressable>
                </View>
            </View>
                
        </SafeAreaView>

    )
}