import React from 'react';
import { Notifications } from 'expo';
import { createStackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import CreateScreen from '../screens/CreateScreen';
import registerForPushNotificationsAsync from '../api/registerForPushNotificationsAsync';

const CreateStack = createStackNavigator({
  Create: CreateScreen,
});

const AppNavigator = createStackNavigator({
  Main: MainTabNavigator,
  CreateModal: CreateStack
}, {
    headerMode: 'none',
    mode: 'modal',
    navigationOptions: {
        gesturesEnabled: false,
    }
  });

export default class RootNavigation extends React.Component {
  componentDidMount() {
    this._notificationSubscription = this._registerForPushNotifications();
  }

  componentWillUnmount() {
    this._notificationSubscription && this._notificationSubscription.remove();
  }

  render() {
    return <AppNavigator />;
  }

  _registerForPushNotifications() {
    // Send our push token over to our backend so we can receive notifications
    // You can comment the following line out if you want to stop receiving
    // a notification every time you open the app. Check out the source
    // for this function in api/registerForPushNotificationsAsync.js
    registerForPushNotificationsAsync();

    // Watch for incoming notifications
    this._notificationSubscription = Notifications.addListener(this._handleNotification);
  }

  _handleNotification = ({ origin, data }) => {
    console.log(`Push notification ${origin} with data: ${JSON.stringify(data)}`);
  };
}
