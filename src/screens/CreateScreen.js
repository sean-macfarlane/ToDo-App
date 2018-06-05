import React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, Text } from 'react-native';

import Colors from '../constants/Colors';

export default class CreateScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Add',
    headerLeft: (
      <TouchableOpacity onPress={() => { navigation.goBack(null); }}>
        <Text style={styles.headerButton}>Cancel</Text>
      </TouchableOpacity>
    ),
    headerRight: (
      <TouchableOpacity onPress={() => { navigation.goBack(null); }} disabled={true}>
        <Text style={[styles.headerButton, { fontWeight: 'bold', opacity: (true ? 0.5 : 1) }]}>Save</Text>
      </TouchableOpacity>
    )
  });

  render() {
    return (
      <ScrollView style={styles.container}>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  headerButton: {
    fontSize: 17,
    paddingHorizontal: 10,
    color: Colors.tintColor
  }
});
