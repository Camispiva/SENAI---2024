import { View, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";
import React from 'react';

export default function Opcoes({navigation}) {
    return(
        <>
        <View style={styles.container}>
            <View style={styles.content}>
                <TouchableOpacity style={styles.button} onPress = {() => navigation.navigate("telaJuros") 
                }>
                    <Text>Juros</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress = {() => navigation.navigate("Idade") 
                }>
                    <Text>Idade</Text>
                </TouchableOpacity>
            </View>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        gap: 10,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    textInput: {
        padding: 5,
        height: 40,
        width: 200,
        borderColor: '#006eff',
        borderWidth: 1,
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0
    },
    button: {
        alignItems: "center",
        backgroundColor: 'gray',
        borderColor: 'gray',
        fontWeight: 'bold' ,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10
    }
});