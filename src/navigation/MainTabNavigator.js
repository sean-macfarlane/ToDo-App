import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import CreateScreen from '../screens/CreateScreen';
import CompletedScreen from '../screens/CompletedScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'ToDo',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={`ios-list-box${focused ? '' : '-outline'}`}
    />
  ),
};

const CreateStack = createStackNavigator({
  Create: CreateScreen,
});

CreateStack.navigationOptions = ({ navigation }) => ({
  tabBarLabel: 'Add',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={`ios-add-circle${focused ? '' : '-outline'}`}
    />
  ),
  tabBarOnPress: ({ navigation }) => {
    navigation.navigate("CreateModal", {});
  }
});

const CompletedStack = createStackNavigator({
  Completed: CompletedScreen,
});

CompletedStack.navigationOptions = {
  tabBarLabel: 'Completed',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={`ios-checkmark-circle${focused ? '' : '-outline'}`}
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  CreateStack,
  CompletedStack,
});
