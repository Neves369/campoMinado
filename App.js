import params from './src/params';
import Field from './src/components/Field';
import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import MineField from './src/components/MineField';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { 
  createMinedBoard, 
  cloneBoard, 
  openField, 
  hasExplosion, 
  wonGame, 
  showMines,
  invertFlag 
} from './src/functions';

export default function App() {

  const [board, setBoard] = useState([]);
  const [won, setWon] = useState(false);
  const [lost, setLost] = useState(false);

  useEffect(() => {
    createState()
  }, [])
  

  minesAmount = () =>{
    const cols = params.getColumnsAmount()
    const rows = params.getRowsAmount()
    return Math.ceil(cols * rows * params.difficultLevel)
  }

  createState = () =>{
    const cols = params.getColumnsAmount()
    const rows = params.getRowsAmount()
    setBoard(createMinedBoard(rows, cols, minesAmount()))
  }

  const onOpenField = (row, column) =>{
    const cboard = cloneBoard(board);
    openField(cboard, row, column);
    const lost = hasExplosion(cboard);
    const won = wonGame(cboard)

    console.log(lost)
    if(lost){
      showMines(cboard);
      Alert.alert('Não foi dessa vez', 'Infelizmente você perdeu, tente novamente!');
    }
    if(won){
      Alert('Parabéns', 'Você venceu!');
    }
    setBoard(cboard);
    setLost(lost);
    setWon(won)
  }

  const onSelectField = (row, column) =>{
    const cboard = cloneBoard(board);
    invertFlag(cboard, row, column)
    const won = wonGame(cboard)

    if(won){
      Alert('Parabéns', 'Você venceu!');
    }
    setBoard(cboard);
    setWon(won);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Iniciando o Mines!</Text>
      <Text 
        style={styles.instructions}
      >
        Tamanho da grade: 
        {params.getRowsAmount()}x{params.getColumnsAmount()}
      </Text>
     <View style={styles.board}>
        <MineField board={board} onOpenField={onOpenField} onSelectField={onSelectField}/>
     </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  board: {
    alignItems: "center",
    backgroundColor: "#AAA"
  }
  
});
