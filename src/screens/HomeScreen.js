import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList
} from 'react-native';

import { connect } from 'react-redux';
import { fetchTodo } from '../actions/todo';
import ToDo from '../components/ToDo';

class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;

    return {
      title: 'ToDo' + (params.total ? ' (' + params.total + ')' : '')
    }
  };

  componentDidMount() {
    this.props.fetchTodo();
  }

  componentWillReceiveProps(newProps) {
    if (newProps.todos.length != this.props.todos.length) {
      this.props.navigation.setParams({
        total: newProps.todos.length
      })
    }
  }

  _keyExtractor = (item, index) => item.id;

  renderItem = ({ item }) => (
    <ToDo id={item.id} body={item.body} complete={item.complete} created={item.created} navigation={this.props.navigation} />
  )

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.todos}
          keyExtractor={this._keyExtractor}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});

const mapStateToProps = state => ({
  todos: state.todo.todos
})

export default connect(mapStateToProps, { fetchTodo })(HomeScreen);