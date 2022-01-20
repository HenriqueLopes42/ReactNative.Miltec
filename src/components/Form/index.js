import React, {useState} from "react";
import {StyleSheet, TextInput, Text, View, Button} from 'react-native';
import ResultImc from "./ResultImc/index";

export default function Form(){


const [height, setHeight] = useState(null);
const [weight, setWeight] = useState(null);
const [messageImc,setMessageImc] = useState("Preencha o peso e altura");
const [imc,setImc] = useState(null);
const [textButton, setTextButton] = useState("Calcular");

function imcCalculator(){
    return setImc((weight/(height*height)).toFixed(2));
}

function validationImc(){
    if(weight != null && height !=null){
        imcCalculator();
        setHeight(null);
        setWeight(null);
        setMessageImc("Seu imc é igual:");
        setTextButton("Calcular novamente");
        return
    }else{
        setImc(null);
        setTextButton("Calcular")
        setMessageImc("Preencha o peso e altura")

        return
    }

}


    return(
        <View style={styles.container}>
            <View style={styles.area}>
                <Text style={styles.text}>Altura</Text>
                <TextInput
                    onChangeText={setHeight}
                    value={height}
                    placeholder="Ex: 1.75"
                    keyboardType="numeric"
                />
                <Text style={styles.text}>Peso</Text>
                <TextInput
                    onChangeText={setWeight}
                    value={weight}
                    placeholder="Ex: 75.356"
                    keyboardType="numeric"
                />
                <Button
                    style={styles.button} 
                    color="#1a63D8"
                    onPress={() => validationImc()}
                    title={textButton}
                    />
            </View>
            <ResultImc messageResultImc={messageImc} resultImc={imc}/>
        </View>
    )
}

