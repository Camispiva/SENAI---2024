import { View, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";
import React from 'react';
import MaskInput from "react-native-mask-input";

export default function formIdade() {
    const [ano, setAno] = React.useState('');
    const [mes, setMes] = React.useState('');
    const [dia, setDia] = React.useState('');
    const [idade, setIdade] = React.useState('');

    const idadeCalc = () => {

        const numberAno = Number(ano);
        const numberMes = Number(mes);
        const numberDia = Number(dia);

        var data = new Date,
        anoAtual = data.getFullYear(),
        mesAtual = data.getMonth() + 1,
        diaAtual = data.getDate(),

        idadeAnos = anoAtual - numberAno;

        if(mesAtual < numberMes || mesAtual == numberMes && diaAtual < numberDia){
            idadeAnos--;
        }

        setIdade(idadeAnos)
    }

    return (
        <>
            <View style={styles.container}>
                <View style={styles.content}>
                    <Text>Calculadora de Idade</Text>

                    <MaskInput
                        style={styles.textInput}
                        onChangeText={(masked, unmasked) => setDia(masked)}
                        value={dia}
                        placeholder="Digite o dia do seu Aniversário"
                        keyboardType="numeric"
                    />

                    <MaskInput
                        style={styles.textInput}
                        onChangeText={(masked, unmasked) => setMes(masked)}
                        value={mes}
                        placeholder="Digite o mes do seu Aniversário como NÚMERO:"
                        keyboardType="numeric"
                    />

                    <MaskInput
                        style={styles.textInput}
                        onChangeText={(masked, unmasked) => setAno(masked)}
                        value={ano}
                        placeholder="Digite o ano de seu aniversário"
                        keyboardType="numeric"
                    />

                    <TouchableOpacity
                        style={styles.button}
                        onPress={idadeCalc}
                    >
                        <Text>Calcular</Text>
                    </TouchableOpacity>
                    <Text>Sua idade é: {idade} anos</Text>
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
        justifyContent: 'center',
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
        backgroundColor: "#fff",
        borderColor: 'gray',
        borderWidth: 1,
        padding: 10,
        borderRadius: 10
    }
});