import React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, Text, View, TextInput, KeyboardAvoidingView } from 'react-native';

import { connect } from 'react-redux';
import { createTodo, updateTodo, updateCompleted } from '../actions/todo';
import Colors from '../constants/Colors';

class CreateScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;

    return {
      title: (params.isEdit ? 'Edit' : 'Add'),
      headerLeft: (
        <TouchableOpacity onPress={() => { navigation.goBack(null); }}>
          <Text style={styles.headerButton}>Cancel</Text>
        </TouchableOpacity>
      ),
      headerRight: (
        <TouchableOpacity onPress={params.onSave} disabled={!params.isValid}>
          <Text style={[styles.headerButton, { fontWeight: 'bold', opacity: (params.isValid ? 1 : 0.5) }]}>Save</Text>
        </TouchableOpacity>
      )
    }
  };

  constructor(props) {
    super(props);

    this.state = {
      text: props.todo.body
    };
  }

  componentDidMount() {
    this.props.navigation.setParams({
      isValid: false,
      onSave: this.onSave
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.text !== prevState.text) {
      this.props.navigation.setParams({
        isValid: (this.state.text !== '')
      })
    }
  }

  componentWillReceiveProps(newProps) {
    if (newProps.todo.body != this.state.text) {
      this.setState({
        text: newProps.todo.body
      })
    }
  }

  onChangeText = (text) => {
    this.setState({ text });
  }

  onSave = () => {
    if (this.props.navigation.state.params.isEdit === true) {
      let data = {
        id: this.props.todo.id,
        body: this.state.text
      };

      if (this.props.todo.complete === true) {
        this.props.updateCompleted(data);
      } else {
        this.props.updateTodo(data);
      }
    } else {
      let data = {
        body: this.state.text
      };

      this.props.createTodo(data);
    }
  }

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container} >
        <TextInput
          placeholder="What is there to do?"
          multiline={true}
          style={styles.textInput}
          value={this.state.text}
          autoFocus={true}
          onChangeText={text => this.onChangeText(text)}
          placeholderTextColor="#D9D5DC"
          selectionColor={Colors.tintColor}
        />
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerButton: {
    fontSize: 17,
    paddingHorizontal: 10,
    color: Colors.tintColor
  },
  textInput: {
    flex: 1,
    paddingTop: 10,
    marginBottom: 70,
    paddingLeft: 10,
    paddingRight: 10,
    borderWidth: 0,
    fontSize: 27,
    fontWeight: '300'
  }
});

const mapStateToProps = state => ({
  todo: state.modal.todo
})

export default connect(mapStateToProps, { createTodo })(CreateScreen);