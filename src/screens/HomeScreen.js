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

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'ToDo',
  };

  componentDidMount() {
    this.props.fetchTodo();
  }

  renderItem = ({item}) => (
    <ToDo id={item.id} body={item.body} complete={item.complete} created={item.created} />
  )
 
  render() {
    return (
      <View style={styles.container}>
        <FlatList 
          data={this.props.todos}         
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15
  },
});

const mapStateToProps = state => ({
  todos: state.todo.items
})

export default connect(mapStateToProps, { fetchTodo })(HomeScreen);