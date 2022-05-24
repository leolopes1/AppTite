import React from 'react';
import { View, FlatList, StyleSheet, Text, StatusBar, Image } from 'react-native';

const DATA = [
    {
        produto: 'Hamburguer Picanha',
        quantia: 'R$: 30,00',
        img: 'https://salvadornorteonline.com.br/salvadornorteonline/2020/11/McOferta-cheddar-picanha-bacon.jpg'
    },
    {
        produto: 'Hamburguer Rodeio',
        quantia: 'R$: 25,00',
        img: 'https://d3sn2rlrwxy0ce.cloudfront.net/maga-stacker-4-thumb.png?mtime=20210916133348&focal=none'
    },
    {
        produto: 'McChicken',
        quantia: 'R$: 20,00',
        img: 'https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kUXZKLM5/200/200/original?country=br',
    },
    {
        produto: 'McFritas',
        quantia: 'R$: 30,00',
        img: 'https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kUXZKLM5/200/200/original?country=br',
    },
    {
        produto: 'Podrão',
        quantia: 'R$: 5,00',
        img: 'https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kUXZKLM5/200/200/original?country=br',
    },
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


                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    // horizontal={true}
                    numColumns={2}
                    style={{ flexWrap: 'wrap' }}
                />
            </View>


        </View>
    );
}

const styles = StyleSheet.create({
    container: {

        width: '100%',
        height: '75%',
        flexWrap: 'wrap',
        // flexDirection:'row',
        // flexWrap:'flex-wrap',

        backgroundColor: 'white',
        marginTop: StatusBar.currentHeight || 0,
    },
    viewRest: {
        height: '25%',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        width: '90%',
        alignSelf: 'center',

    },

    item: {
        backgroundColor: '#EEEEEE',
        borderRadius: 20,

        alignItems: 'center',
        padding: 8,
        marginVertical: 8,
        marginHorizontal: 10,
        width: '45%',


    },
    card: {

        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },


    tituloProduto: {
        fontSize: 20,
    },
    descProduto: {
        fontSize: 10,
        color: 'gray'
    },
    imagemProduto: {
        height: 120,
        borderRadius: 10,
        width: 120
    },
    imageCard: {

        width: 160,
        height: 160,
        marginTop: 15,
        marginBottom: 8,
        borderRadius: 10,
    },
});

export default App;