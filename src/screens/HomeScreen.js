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
  static navigationOptions = {
    title: 'ToDo',
  };

  componentDidMount() {
    this.props.fetchTodo();
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