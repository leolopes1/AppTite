import React, { Component, useState } from 'react'
import { SafeAreaView, Text, View, StyleSheet, Image, Modal } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const styles = StyleSheet.create({

    container: {
        height: '100%',
        // alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        width: '100%',
    },
    modalBackground: {
        height: '100%',
        alignItems: 'center',
        // justifyContent: 'flex-end',
        alignSelf: 'center',
        width: '100%',
        backgroundColor: '#A5A6F6',
    },
    modalPrincipal: {
        height: '85%',
        // alignItems: 'center',
        justifyContent: 'flex-start',
        alignSelf: 'flex-start',
        width: '100%',
        backgroundColor: 'white',
        borderTopRightRadius: 35,
        borderTopLeftRadius: 35,


    },
    purpleView: {
        height: '20%',

        // justifyContent: 'center',
        // alignSelf: 'center',
        flexDirection: 'row',
        width: '100%',
        backgroundColor: '#A5A6F6',
        borderTopRightRadius: 35,
        borderTopLeftRadius: 35,
        padding: 30,


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


        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',

    },
    containerProds: {

        alignItems: 'flex-start',

        alignSelf: 'center',
        height: '70%',
        width: '90%',
    },
    txtHome: {
        fontSize: 18,
        fontWeight: '500',
    },
    btnSubmit: {
        backgroundColor: '#7677FF',
        width: '100%',
        height: '80%',
        alignItems: 'center',
        justifyContent: 'center',

        borderRadius: 25,
        marginBottom: 15,
        alignContent: 'flex-end'


    }

});

const bkImg = 'https://classic.exame.com/wp-content/uploads/2022/05/costelinha.jpg?quality=70&strip=info&w=1024'

class Restaurante extends Component {

    // const [modalVisible, setModalVisible] = useState(false);

    state = {
        modalVisible: false
    };

    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    }



    render() {
        const { modalVisible } = this.state;

        return (
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
                        <TouchableOpacity onPress={this.setModalVisible}>

                            <View style={styles.cardProd}>
                                <Image
                                    style={styles.imageCard}
                                    source={{ uri: bkImg }}
                                />
                                <Text>R$15,80</Text>
                                <Text>BK Costelinha</Text>

                            </View>
                        </TouchableOpacity>

                    </View>
                    <View>
                        <Modal
                            animationType="slide"
                            transparent={false}
                            visible={modalVisible}
                            onRequestClose={() => {
                                this.setModalVisible(!modalVisible);
                            }}
                        >
                            <View style={styles.modalBackground}>
                                <View style={{ alignSelf: 'flex-start', padding: 20 }}>
                                    <TouchableOpacity onPress={() => this.setModalVisible}>

                                        <MaterialCommunityIcons name="arrow-left" color={'#667080'} size={30} />
                                    </TouchableOpacity>


                                </View>
                                <View style={styles.modalPrincipal}>
                                    <View style={{ height: '87%', padding: 30 }}>

                                        <View style={styles.cardProd}>
                                            <Image
                                                style={styles.imageCard}
                                                source={{ uri: bkImg }}
                                            />
                                            <Text>R$15,80</Text>
                                            <Text>BK Costelinha</Text>

                                        </View>
                                    </View>

                                    <View style={styles.purpleView}>
                                        <View style={{ width: '50%' }}>
                                            <Text>Preço</Text>
                                            <Text>R$12,00</Text>

                                        </View >
                                        <View style={{ width: '50%' }}>
                                            <TouchableOpacity style={styles.btnSubmit} onPress={() => {
                                                this.setState({ modalVisible: false });
                                            }}>
                                                <Text style={{ color: 'white', fontWeight: '600' }}>+ Carrinho</Text>
                                            </TouchableOpacity>

                                        </View>
                                    </View>
                                </View>
                            </View>

                        </Modal>
                    </View>


                </View>

            </SafeAreaView>

        )
    }
}


export default Restaurante;