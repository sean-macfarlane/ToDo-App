import React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, Text } from 'react-native';

export default class ToDo extends React.Component {

    render() {
        return (
            <TouchableOpacity style={styles.container}>
                
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingVertical: 5
    },
});