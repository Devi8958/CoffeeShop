import React from 'react';
import { Text, View } from 'react-native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

import styles from './styles';
import Routes from '../../constants/Routes';
import AppConstants from '../../constants/AppConstants';
import AppIcon from '../../components/AppIcon';
import { FavoriteFilled } from '../../assets/icons';
import { BottomTabParamList } from '../../types';
import AppHeader from '../../components/AppHeader';
import Colors from '../../constants/Colors';

type Props = BottomTabScreenProps<BottomTabParamList, typeof Routes.Notifications>;

const FavoriteScreen = ({}: Props) => {
  return (
    <View style={styles.screen}>
      <AppHeader title={AppConstants.tabs.favorites} />
      <View style={styles.content}>
        <View style={styles.iconContainer}>
          <AppIcon Icon={FavoriteFilled} size={72} color={Colors.primary} />
        </View>

        <Text style={styles.title}>{AppConstants.tabs.comingSoon}</Text>
        <Text style={styles.description}>{AppConstants.tabs.description}</Text>
      </View>
    </View>
  );
};

export default FavoriteScreen;
