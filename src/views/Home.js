import React from 'react'
import { SafeAreaView, Text, View, StyleSheet, Image } from 'react-native'
import TextoCentral from '../components/TextoCentral'
import PassoStack from '../components/PassoStack'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { TouchableOpacity } from 'react-native-gesture-handler'


export default props => {

    const styles = StyleSheet.create({
        logo: {
            width: 600,
            height: 600,

        },
        containerLogo: {

            justifyContent: 'flex-start',
            height: '20%',
        },
        container: {

            height: '100%',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            width: '90%',
            fontSize: '50',
            top: 10


        },
        background: {
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            backgroundColor: 'white',
        },
        input: {
            backgroundColor: '#E4E3FE',
            width: '90%',
            marginBottom: 15,
            fontSize: 17,
            fontWeight: '600',
            borderRadius: 7,
            padding: 10,

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

            width: 180,
            height: 160,
            marginTop: 15,
            marginBottom: 25,
            borderRadius: 10,
        },
        card: {

            width: 180,
            height: 160,
            marginTop: 15,
            marginBottom: 25,
            borderRadius: 10,
            marginRight: 15,
            backgroundColor: '#EEEEEE',
            alignItems: 'center',
            justifyContent: 'center',
        },
        txtHome: {
            fontSize: 20,
            fontWeight: 'bold'

        }

    });

    return (

        <SafeAreaView>
            <View style={styles.background}>
                <View style={styles.container}>

                    <Icon name="menu" size={30} />

                    <View >
                        <Text style={styles.txtHome}>
                            Promoções
                        </Text>
                        <View style={{ flexDirection: 'row' }}>

                            <Image
                                style={styles.imagePub}
                                source={{ uri: 'https://i.pinimg.com/originals/0b/7f/a1/0b7fa1ab4b27b5c616753688a457feb9.png' }}
                            />
                            <Image
                                style={styles.imagePub}
                                source={{ uri: 'https://www.francesca.com.br/PROMO%20SEXTA%202019.jpg' }}
                            />
                        </View>


                    </View>
                    <View>

                        <Text style={styles.txtHome} >
                            Categorias
                        </Text>
                        <View style={{ flexDirection: 'row' }}>

                            <View style={styles.card}>
                                <Image
                                    style={styles.imageCard}
                                    source={{ uri: 'https://statig0.akamaized.net/bancodeimagens/at/fn/9r/atfn9reagx5hg9383kbd2cx1r.jpg' }}
                                />

                            </View>
                            <View style={styles.card}>
                                <Image
                                    style={styles.imageCard}
                                    source={{ uri: 'https://s2.glbimg.com/wMQRG2vmN_dDJ-1HrSwGOKEbZak=/0x0:1080x608/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2021/e/n/G9IuruRaezxqgmwozOyg/capa-materia-gshow-49-.png' }}
                                />

                            </View>
                        </View>

                    </View>
                    <View>

                        <Text style={styles.txtHome} >
                            Veja mais Restaurantes
                        </Text>

                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity onPress={() => props.navigation.navigate('Restaurante')}>
                                <View style={styles.card}>
                                    <Image
                                        style={styles.imageCard}
                                        source={{ uri: 'https://iguatemi.com.br/brasilia/sites/brasilia/files/2018-04/Burguer.png' }}
                                    />


                                </View>
                            </TouchableOpacity>
                            <View style={styles.card}>
                                <Image
                                    style={styles.imageCard}
                                    source={{ uri: 'data:image/png;base64,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' }}
                                />


                            </View>
                        </View>

                    </View>
                </View>
            </View>
        </SafeAreaView>



    )
}