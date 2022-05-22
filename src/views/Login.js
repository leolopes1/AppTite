import React from 'react'
import { SafeAreaView, View, Text, Image, StyleSheet, TextInput } from 'react-native'
import TextoCentral from '../components/TextoCentral'
import PassoStack from '../components/PassoStack'

import { TouchableOpacity } from 'react-native-gesture-handler'

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
        backgroundColor:'#E4E3FE',
        width:'90%',
        marginBottom:15,
        fontSize:17,
        fontWeight:'600',
        borderRadius:7,
        padding:10,

    },
    btnSubmit:{
        backgroundColor:'#7677FF',
        width:320,
        height:45,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:7,
        marginBottom:15,


    }

});

export default function Login ({navigation}) {

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
                    placeholder='Email'
                    autoCorrect={false}
                    onChangeText={() => { }}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Senha'
                    autoCorrect={false}
                    onChangeText={() => { }}
                />
                <TouchableOpacity style={styles.btnSubmit} onPress={() => navigation.navigate('TelaA')}>
                    <Text>Acessar</Text>
                </TouchableOpacity>
                <Text>Ou</Text>

                <TouchableOpacity >
                    <Text>Criar conta</Text>
                </TouchableOpacity>

            </View>
                
        </SafeAreaView>

    )
}