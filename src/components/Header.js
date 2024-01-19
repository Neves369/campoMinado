import React from 'react';
import Flag from './Flag';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';


export default props => {

  return <View style={styles.container} >
    <View style={styles.flagContainer}>
        <TouchableOpacity 
            onPress={props.onFlagPress}
            style={styles.flagButton}
        >
            <Flag bigger/>
        </TouchableOpacity>
        <Text style={styles.flagsLeft}>= {props.flagsLeft}</Text>
    </View>

    <TouchableOpacity style={styles.button} onPress={props.onNewGame}>
        <Text style={styles.buttonLabel}>Novo Jogo</Text>
    </TouchableOpacity>

    {
        props.sound? 
            <FontAwesome name="volume-up" onPress={()=>props.changeSound()} size={40} color="#575757" />
        :
            <FontAwesome5 name="volume-mute" onPress={()=>props.changeSound()} size={37} color="#575757" />
    }

  </View>;
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        flex: 1,
        backgroundColor: "#EEE",
        alignItems: "center",
        justifyContent: "space-around",
        paddingTop: 20,
        paddingHorizontal: 20,
    },
    flagContainer:{
        flexDirection: "row"
    },
    flagButton: {
        marginTop: 10,
        minWidth: 30
    },
    flagsLeft: {
        fontSize: 30,
        fontWeight: "bold",
        paddingTop: 5,
        marginLeft: 20
    },
    button: {
        backgroundColor: "#999",
        padding: 5,
        elevation: 5,
        borderRadius: 5
    }, 
    buttonLabel: {
        fontSize: 20,
        color: "#ddd",
        fontWeight: "bold"
    }
})