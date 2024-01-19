import { Audio } from "expo-av";
import params from './src/params';
import { useState, useEffect } from 'react';
import Header from './src/components/Header';
import MineField from './src/components/MineField';
import { StyleSheet, View, Alert } from 'react-native';
import LevelSelection from "./src/components/LevelSelection";
import { 
  createMinedBoard, 
  cloneBoard, 
  openField, 
  hasExplosion, 
  wonGame, 
  showMines,
  invertFlag,
  flagsUsed 
} from './src/functions';

//audios
import win from "./assets/audios/win.wav";
import abrir from "./assets/audios/abrir.wav";
import marcar from "./assets/audios/marcar.wav";
import explodir from "./assets/audios/explosion.wav";



export default function App() {

  const [board, setBoard] = useState([]);
  const [won, setWon] = useState(false);
  const [lost, setLost] = useState(false);
  const [sound, setSound] = useState(true);
  const [showLevel, setShowLevel] = useState(false);
  

  useEffect(() => {
    createState()
  }, [])
  

  minesAmount = () =>{
    const cols = params.getColumnsAmount()
    const rows = params.getRowsAmount()
    return Math.ceil(cols * rows * params.difficultLevel)
  }

  createInitialState = () =>{
    setWon(false)
    setLost(false)
    setShowLevel(false)
    createState()
  }

  createState = () =>{
    const cols = params.getColumnsAmount()
    const rows = params.getRowsAmount()
    setBoard(createMinedBoard(rows, cols, minesAmount()))
  }

  const onOpenField = (row, column) =>{
    const cboard = cloneBoard(board);
    openField(cboard, row, column);
    playSound(abrir)
    const lost = hasExplosion(cboard);
    const won = wonGame(cboard)

    if(lost){
      playSound(explodir);
      showMines(cboard);
      Alert.alert('Não foi dessa vez', 'Infelizmente você perdeu, tente novamente!');
    }
    if(won){
      playSound(win);
      Alert('Parabéns', 'Você venceu!');
    }
    setBoard(cboard);
    setLost(lost);
    setWon(won)
  }

  const onSelectField = (row, column) =>{
    const cboard = cloneBoard(board);
    invertFlag(cboard, row, column)
    playSound(marcar)
    const won = wonGame(cboard)

    if(won){
      Alert('Parabéns', 'Você venceu!');
    }
    setBoard(cboard);
    setWon(won);
  }

  async function playSound(uri) {
    if(sound){
      const { sound } = await Audio.Sound.createAsync(uri);
      await sound.playAsync();
    }
  }

  function changeSound() {
    setSound(!sound)
  }

  const onLevelSelected = (level) => {
    params.difficultLevel = level;
    createInitialState()
  }

  return (
    <View style={styles.container}>
     <LevelSelection isVisible={showLevel} onLevelSelected={onLevelSelected} onCancel={()=>setShowLevel(false)}/>
     <Header 
        flagsLeft={minesAmount() - flagsUsed(board)} 
        onNewGame={createInitialState} 
        sound={sound}
        changeSound={changeSound}
        onFlagPress={()=>setShowLevel(true)}
      />
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
