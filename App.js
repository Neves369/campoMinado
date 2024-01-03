import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import params from './src/params';
import Field from './src/components/Field';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Iniciando o Mines!</Text>
      <Text 
        style={styles.instructions}
      >
        Tamanho da grade: 
        {params.getRowsAmount()}x{params.getColumnsAmount()}
      </Text>
      <Field/>
      <Field opened/>
      <Field opened nearMines={1}/>
      <Field mined/>
      <Field mined opened/>
      <Field mined opened exploded/>
      <Field flagged/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: "center"
  },
  instructions: {
    fontSize: 20,
    textAlign: "center"
  }
});
