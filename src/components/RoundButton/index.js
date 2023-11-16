import React from 'react';
import { StyleSheet, Text,TouchableOpacity } from 'react-native';

const RoundButton = ({ title, onPress }) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text>{ title }</Text>
        </TouchableOpacity>
    )
}

export default RoundButton;

const styles = StyleSheet.create({
    button: {
        width: 100,
        backgroundColor: '#99FF',
        margin: 10,
        padding: 20,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    }
})