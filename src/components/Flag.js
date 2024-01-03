import React from 'react';
import params from '../params';
import { StyleSheet, View, Text } from 'react-native';

export default props => {
    return(
        <View style={styles.container}>
            <View style={!props.bigger? styles.flagPole : styles.flagPoleBigger }/>
            <View style={!props.bigger? styles.flag : styles.flagBigger }/>
            <View style={!props.bigger? styles.base1 : styles.base1Bigger }/>
            <View style={!props.bigger? styles.base2 : styles.base2Bigger }/>
        </View>
    );
}



const styles = StyleSheet.create({
    container: {
      marginTop: 2,
    },
    flagPole: {
        position: "absolute",
        height: 14,
        width: 2,
        backgroundColor: "#222",
        marginLeft: 9,
    },
    flag:{
        position: "absolute",
        height: 5,
        width: 6,
        backgroundColor: "#f22",
        marginLeft: 3,
    },
    base1:{
        position: "absolute",
        height: 2,
        width: 6,
        backgroundColor: "#222",
        marginLeft: 7,
        marginTop: 10,
    },
    base2:{
        position: "absolute",
        height: 2,
        width: 10,
        backgroundColor: "#222",
        marginLeft: 5,
        marginTop: 12,
    },
    flagPoleBigger: {
        position: "absolute",
        height: 21,
        width: 4,
        backgroundColor: "#222",
        marginLeft: 16,
    },
    flagBigger:{
        position: "absolute",
        height: 10,
        width: 14,
        backgroundColor: "#f22",
        marginLeft: 3,
    },
    base1Bigger:{
        position: "absolute",
        height: 4,
        width: 12,
        backgroundColor: "#222",
        marginLeft: 12,
        marginTop: 20,
    },
    base2Bigger:{
        position: "absolute",
        height: 4,
        width: 20,
        backgroundColor: "#222",
        marginLeft: 8,
        marginTop: 24,
    },

  });
