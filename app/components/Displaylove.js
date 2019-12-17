import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput, Appbar, Button } from 'react-native-paper';

const Displaylove = (props)=> {
    if(props.data == "Loading...") {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>...</Text>
            </View>
        )
    }else if(props.data.message){
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Something went wrong. Please try again.</Text>
            </View>
        )
    }else{
        return (
            <View style={styles.container}>
                <Text style={styles.text}>{props.data.percentage} %</Text>
                <Text style={styles.text}>{props.data.result}</Text>
            </View>
        )
    }
} 

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },

    text: {
        fontSize: 30,
        textAlign: 'center'
    }
});

export default Displaylove;