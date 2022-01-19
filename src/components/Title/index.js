import React from "react";
import {StyleSheet, Text, View } from 'react-native';

export default function Title(){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Calcular IMC</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginBottom: 100,
    },
    title: {
        fontSize: 30,
        color: "#312f36",
    }
})