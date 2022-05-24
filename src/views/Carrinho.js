import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image, Pressable } from 'react-native';

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
      <FlatList
        data={DATA}
        renderItem={renderItem}
      />
      <View style={styles.viewCompra}>
        <View style={{ padding: 30, flexDirection: 'row', justifyContent: 'space-between' }}>
          <View >
            <Text style={styles.textoCompra}>Total de items</Text>
            <Text style={styles.textoCompra}>4</Text>
          </View>
          <View style={{ flex: 0.8 }}>
            <Pressable style={
              ({ pressed }) => [
                { backgroundColor: pressed ? '#7879F1' : '#7677FF' },
                { alignItems: 'center', padding: 8, borderRadius: 40 },
              ]}>
              <Text style={styles.textoCompra}>
                COMPRAR
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
    marginTop: StatusBar.currentHeight || 0,
  },
  viewCompra: {
    height: 200,
    width: "100%",
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#A5A6F6',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30
  },
  item: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  textoCompra: {
    color: '#FFFFFF'
  },
  tituloProduto: {
    fontSize: 20,
  },
  descProduto: {
    fontSize: 10,
    color: 'gray'
  },
  imagemProduto: {
    height: 100,
    borderRadius: 10,
    width: 120
  }
});

export default App;