import React from 'react'
import { SafeAreaView, Text, View, StyleSheet, Image } from 'react-native'


const styles = StyleSheet.create({

    container: {
        height: '100%',
        // alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        width: '100%',
    },
    viewRest: {
        height: '30%',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        width: '90%',
        alignSelf: 'center',

    },

    imagePub: {

        width: 200,
        height: 120,
        marginTop: 15,
        marginBottom: 25,
        marginLeft: 15,
        borderRadius: 10,
    },
    imageCard: {

        width: 160,
        height: 160,
        marginTop: 15,
        marginBottom: 8,
        borderRadius: 10,
    },
    card: {

        padding: 20,
        backgroundColor: '#EEEEEE',
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardProd: {


        backgroundColor: '#EEEEEE',
        alignItems: 'center',
        justifyContent: 'center',

    },
    containerProds: {

        alignItems: 'flex-start',
        // justifyContent: 'fle',
        alignSelf: 'center',
        height: '70%',
        width: '90%',
    },
    txtHome: {
        fontSize: 18,
        fontWeight: '500',
    }

});

export default props => (

    <SafeAreaView>

        <View style={styles.container}>
            <View style={styles.viewRest}>

                <Image
                    style={styles.imageCard}
                    source={{ uri: 'https://iguatemi.com.br/brasilia/sites/brasilia/files/2018-04/Burguer.png' }}
                />



                <View style={styles.card}>

                    <Text style={styles.txtHome}>
                        Burguer King
                    </Text>
                    <Text>
                        Descrição do Restaurante
                    </Text>
                </View>

            </View>
            <View style={styles.containerProds}>
                <Text style={styles.txtHome}>
                    Produtos
                </Text>
                <View style={styles.cardProd}>
                    <Image
                        style={styles.imageCard}
                        source={{ uri: 'https://classic.exame.com/wp-content/uploads/2022/05/costelinha.jpg?quality=70&strip=info&w=1024' }}
                    />
                    <Text>R$15,80</Text>
                    <Text>BK Costelinha</Text>

                </View>
            </View>
        </View>

    </SafeAreaView>


)