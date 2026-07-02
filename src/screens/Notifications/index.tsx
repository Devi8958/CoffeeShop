import React from 'react';
import { Text, View } from 'react-native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

import styles from './styles';
import Routes from '../../constants/Routes';
import AppConstants from '../../constants/AppConstants';
import AppIcon from '../../components/AppIcon';
import { NotificationFilled } from '../../assets/icons';
import { BottomTabParamList } from '../../types';
import AppHeader from '../../components/AppHeader';
import Colors from '../../constants/Colors';

type Props = BottomTabScreenProps<BottomTabParamList, typeof Routes.Notifications>;

const NotificationScreen = ({}: Props) => {
  return (
    <View style={styles.screen}>
      <AppHeader title={AppConstants.tabs.notification} />
      <View style={styles.content}>
        <View style={styles.iconContainer}>
          <AppIcon Icon={NotificationFilled} size={72} color={Colors.primary} />
        </View>

        <Text style={styles.title}>{AppConstants.tabs.comingSoon}</Text>
        <Text style={styles.description}>{AppConstants.tabs.description}</Text>
      </View>
    </View>
  );
};

export default NotificationScreen;
