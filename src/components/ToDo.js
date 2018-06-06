import React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, Text, PixelRatio, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Swipeout from 'react-native-swipeout';

import { connect } from 'react-redux';
import { deleteTodo, deleteCompleted } from '../actions/todo';
import { setModalTodo } from '../actions/modal';
import Colors from '../constants/Colors';

class ToDo extends React.Component {
    swipeoutBtns = [
        {
            text: 'Edit',
            onPress: this.onEdit
        },
        {
            type: 'delete',
            text: 'Delete',
            onPress: this.onDelete
        }
    ];

    onEdit = () => {
        this.props.setModalTodo({ id: this.props.id, body: this.props.body, complete: this.props.complete });
        this.props.navigation.navigate('CreateModal', { isEdit: true });
    }

    onDelete = () => {
        if (this.props.complete === true) {
            this.props.deleteCompleted(this.props.id);
        } else {
            this.props.deleteTodo(this.props.id);
        }
    }

    renderIcon = () => {
        if (this.props.complete === true) {
            return (
                <Ionicons
                    name='ios-checkmark-circle'
                    size={26}
                    color={Colors.tintColor}
                />
            );
        }

        return (
            <Ionicons
                name='ios-radio-button-off'
                size={26}
                color='#ccc'
            />
        );
    }

    render() {
        return (
            <Swipeout right={swipeoutBtns} style={{ flex: 1 }}>
                <TouchableOpacity style={styles.container}>
                    {this.renderIcon()}
                    <Text style={styles.body}>{this.props.body}</Text>
                </TouchableOpacity>
            </Swipeout>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: '#fff',
        borderBottomWidth: 1 / PixelRatio.getPixelSizeForLayoutSize(1),
        borderColor: '#c9c9c9'
    },
    body: {
        marginHorizontal: 10
    }
});

export default connect(null, { deleteTodo, deleteCompleted })(ToDo);