import { View, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import MaskInput
    from "react-native-mask-input";

export default function formImc() {
    const [peso, setPeso] = React.useState('');
    const [altura, setAltura] = React.useState('');
    const [imc, setImc] = React.useState('');

    const calcImc = () => {
        const numberPeso = Number(peso);
        const numberAltura = Number(altura);
        setImc((numberPeso / numberAltura ** 2).toFixed(2))
    }

    return (

        <View style={StyleSheet.container}>
            <View style={StyleSheet.content}>
                <Text>
                    Calculadora de IMC</Text>

                <MaskInput
                    mask={[/\d/, /\d/, /\d/, '.', /\d/]}
                    style={style.TextInput}
                    onChangeText={(masked, unmaskd) => setPeso(masked)}
                    value={peso}
                    placeholder="Digite o seu peso"
                    keyboardType="numeric"
                    />
                
                <MaskInput
                    mask={[/\d/, /\d/, /\d/, '.', /\d/]}
                    style={style.TextInput}
                    onChangeText={(masked, unmaskd) => setAltura(masked)}
                    value={altura}
                    placeholder="Digite a sua altura"
                    keyboardType="numeric"
                    />

                <TouchableOpacity style={StyleSheet.button} onPress={calcImc}>

                    <Text>Calcular</Text>

                </TouchableOpacity>
                
                <Text>Seu IMC é: {imc}</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#ffff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    content: {
        gap:10,
        flex:1,
        alignItems: 'center'
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
     button:{
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        borderColor: 'gray',
        borderWidth: 1,
        padding: 10,
        borderRadius: 5
     }
})