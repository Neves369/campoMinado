import React from 'react';
import Mine from './Mine';
import Flag from './Flag';
import params from '../params';
import { StyleSheet, View, Text, TouchableWithoutFeedback } from 'react-native';

export default props => {

    const {mined, opened, nearMines, exploded, flagged} = props;

    const styleField = [styles.field]
    if(opened) styleField.push(styles.opened)
    if(exploded) styleField.push(styles.exploded)
    if(flagged) styleField.push(styles.flagged)
    if(!opened && !exploded) styleField.push(styles.regular)

    let color = null
    if(nearMines > 0){
        if(nearMines == 1) color = "#2a28d7"
        if(nearMines == 2) color = "#2b520f"
        if(nearMines > 2 && nearMines < 6) color = "#fff202b0"
        if(nearMines >= 6) color = "#f30b0b"
    }

    return(
        <TouchableWithoutFeedback onPress={props.onOpenField} onLongPress={props.onSelect}>
            <View style={styleField}>
                {
                    !mined && opened && nearMines > 0 ?
                        <Text style={[styles.label, {color: color}]}>{nearMines}</Text>
                    :
                        false
                }
                {mined && opened ? <Mine/> : false}
                {flagged && !opened? <Flag/> : false}
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles= StyleSheet.create({
    field: {
        height: params.blockSize,
        width: params.blockSize,
        borderWidth: params.borderSize,
    },
    regular: {
        backgroundColor: "#999",
        borderLeftColor: "#ccc",
        borderTopColor: "#ccc",
        borderRightColor: "#333",
        borderBottomColor: "#333",
    },
    opened: {
        backgroundColor: "#b4b4b4",
        borderColor: "#969696",
        alignItems: "center",
        justifyContent: "center",
    },
    label: {
        fontWeight: "bold",
        fontSize: params.fontSize,
    },
    exploded: {
        backgroundColor: "red",
        borderColor: "red",
        alignItems: "center",
        justifyContent: "center",
    },
})
