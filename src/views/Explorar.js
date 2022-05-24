import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image, Pressable, TextInput } from 'react-native';

const DATA = [
    {
        produto: 'China In Box ',
        quantia: 'Promoção válida para a semana ',
        img: 'https://www.cidademarketing.com.br/marketing/wp-content/uploads/2020/09/chinainbox_promocao-scaled.jpg',
    },
    {
        produto: 'Parmê Pizza',
        quantia: 'Válido para todo o final de semana ',
        img: 'https://pbs.twimg.com/media/EFKBL9vX4AAmk8m.jpg'
    },
    {
        produto: 'Nakayoski Sushi',
        quantia: 'Todas as Quartas',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1T1RDuZBCI05mNIOp70YuyNyN9_yCCHB9wg&usqp=CAU',
    },
    {
        produto: 'Jantinha da Cida',
        quantia: 'Todas as Segundas',
        img: 'https://static-images.ifood.com.br/image/upload/t_high,q_100/webapp/landing/landing-banner-1.png',
    },
    {
        produto: 'Pizzaria do Zé',
        quantia: 'Todas as Segundas',
        img: 'https://i.pinimg.com/736x/6a/5e/d3/6a5ed30a6952ad8b01ffa4913b5f3f39.jpg',
    }



];

const Item = ({ produto, quantia, img }) => (
    <View style={styles.item}>

        <Image
            style={styles.imagemProduto}
            source={{ uri: img }}
        />
        <View style={{ padding: 8 }}>
            <Text style={styles.tituloProduto}>{produto}</Text>
            <Text style={styles.descProduto}>{quantia}</Text>
        </View>
    </View>
);

const App = () => {
    const renderItem = ({ item }) => (


        <Item produto={item.produto} quantia={item.quantia} img={item.img} />



    );

    return (
        <View style={styles.container}>
            <View >
                <View style={{ height: '15%' }}>
                    <TextInput
                        style={styles.input}
                        placeholder='Procurar'
                        autoCorrect={false}
                        onChangeText={() => { }}
                    />
                    <View style={{marginLeft:15}}>
                    <Text style={styles.tituloProduto}>Próximos a Você </Text>

                    </View>
                </View>
                <View style={{ height: '68%' }}>

                    <FlatList
                        data={DATA}
                        renderItem={renderItem}
                        // horizontal={true}
                        numColumns={2}
                        style={{ flexWrap: 'wrap' }}
                    />
                </View>

            </View>


        </View>
    );
}

const styles = StyleSheet.create({
    container: {

        width: '100%',
        height: '100%',
        flexWrap: 'wrap',
        // flexDirection:'row',
        // flexWrap:'flex-wrap',

        backgroundColor: 'white',
        marginTop: StatusBar.currentHeight || 0,
    },

    item: {
        backgroundColor: 'white',
        borderRadius: 20,

        alignItems: 'flex-start',
        padding: 8,
        marginVertical: 8,
        marginHorizontal: 8,
        width: '45%',


    },
    input: {
        backgroundColor: '#E4E3FE',
        width: '90%',
        marginBottom: 15,
        fontSize: 17,
        fontWeight: '600',
        borderRadius: 7,
        padding: 10,
        alignSelf: 'center',

    },


    tituloProduto: {
        fontSize: 18,
        fontWeight:'500'
    },
    tituloPagina: {
        fontSize: 20,
        fontWeight:'600',
        
    },
    descProduto: {
        fontSize: 10,
        color: 'gray'
    },
    imagemProduto: {
        height: 120,
        borderRadius: 10,
        width: 180
    }
});

export default App;