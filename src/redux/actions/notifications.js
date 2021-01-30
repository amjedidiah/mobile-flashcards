// Module imports
import * as Notification from 'expo-notifications';
import * as Permissions from 'expo-permissions';
import {Platform} from 'react-native';

import {SAVE_NOTIFICATION} from './types';

const saveNotification = (notification) => ({
  type: SAVE_NOTIFICATION,
  notification,
});

const createNotification = () => ({
  content: {
    title: 'Complete a quiz!',
    body: '👋 don\'t forget to complete at least one quiz today!',
  },
  trigger:
    Platform.OS === 'android' ?
      {repeats: true, hour: 13, minute: 10} :
      {
        type: 'calendar',
        repeats: true,
        dateComponents: {hour: 13, minute: 10},
      },
});

export const setLocalNotification = () => (dispatch, getState) => {
  Notification.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: true,
    }),
  });

  const {notifications} = getState();

  if (!notifications) {
    Permissions.askAsync(Permissions.NOTIFICATIONS).then(({status}) => {
      if (status === 'granted') {
        Notification.cancelAllScheduledNotificationsAsync();

        Notification.scheduleNotificationAsync(
            createNotification(),
        ).then((identifier) => dispatch(saveNotification(identifier)));
      }
    });
  }
};
