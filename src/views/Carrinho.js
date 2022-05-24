import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image, Pressable } from 'react-native';

const DATA = [
  {
    produto: 'Produto 1',
    quantia: 'R$: 5,00',
  },
  {
    produto: 'Produto 2',
    quantia: 'R$: 5,00',
  },
  {
    produto: 'Produto 3',
    quantia: 'R$: 5,00',
  },
];

const Item = ({ produto, quantia }) => (
  <View style={styles.item}>

    <Image
      style={styles.imagemProduto}
      source={{ uri: 'https://iguatemi.com.br/brasilia/sites/brasilia/files/2018-04/Burguer.png' }}
    />
    <View style={{ padding: 8 }}>
      <Text style={styles.tituloProduto}>{produto}</Text>
      <Text style={styles.descProduto}>{quantia}</Text>
    </View>
  </View>
);

const App = () => {
  const renderItem = ({ item }) => (
    <Item produto={item.produto} quantia={item.quantia} />
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
    height: 50,
    borderRadius: 10,
    width: 50
  }
});

export default App;