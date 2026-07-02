import React, { useCallback } from 'react';
import {
  Image,
  ImageBackground,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  Linking,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import styles from './styles';
import Routes from '../../constants/Routes';
import Colors from '../../constants/Colors';
import AppConstants from '../../constants/AppConstants';
import AppIcon from '../../components/AppIcon';
import { Images } from '../../assets';
import { BackIcon, BikeIcon, PhoneIcon, LocationIcon } from '../../assets/icons';
import { RootStackParamList } from '../../types';

type Props = NativeStackScreenProps<RootStackParamList, typeof Routes.Delivery>;

const DeliveryScreen = ({ navigation }: Props) => {
  const handleBackPress = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const handleCallCourier = useCallback(async () => {
    try {
      await Linking.openURL('tel:');
    } catch (error) {
      console.log('Unable to open phone app', error);
    }
  }, []);

  return (
    <View style={styles.screen}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.transparent} translucent />

      <ImageBackground source={Images.map} style={styles.map} resizeMode="cover">
        <TouchableOpacity activeOpacity={0.8} style={styles.backButton} onPress={handleBackPress}>
          <AppIcon Icon={BackIcon} size={22} color={Colors.textPrimary} />
        </TouchableOpacity>

        <View style={styles.locationButton}>
          <AppIcon Icon={LocationIcon} size={22} color={Colors.textPrimary} />
        </View>

        <View style={styles.bottomSheet}>
          <Text style={styles.timeText}>{AppConstants.delivery.title}</Text>

          <Text style={styles.statusText}>
            {AppConstants.delivery.statusPrefix}{' '}
            <Text style={styles.statusAddress}>{AppConstants.delivery.address}</Text>
          </Text>

          <View style={styles.progressRow}>
            <View style={styles.activeProgress} />
            <View style={styles.activeProgress} />
            <View style={styles.activeProgress} />
            <View style={styles.inactiveProgress} />
          </View>

          <View style={styles.deliveryCard}>
            <View style={styles.iconBox}>
              <AppIcon Icon={BikeIcon} size={40} color={Colors.primary} />
            </View>

            <View style={styles.deliveryInfo}>
              <Text style={styles.deliveryTitle}>{AppConstants.delivery.orderStatusTitle}</Text>
              <Text numberOfLines={2} style={styles.deliveryDescription}>
                {AppConstants.delivery.orderStatusDescription}
              </Text>
            </View>
          </View>

          <View style={styles.courierRow}>
            <View style={styles.courierLeft}>
              <Image source={Images.driver} style={styles.driverImage} />

              <View style={styles.courierInfo}>
                <Text numberOfLines={1} style={styles.courierName}>
                  {AppConstants.delivery.courierName}
                </Text>
                <Text numberOfLines={1} style={styles.courierRole}>
                  {AppConstants.delivery.courierRole}
                </Text>
              </View>
            </View>

            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.callButton}
              onPress={handleCallCourier}
            >
              <AppIcon Icon={PhoneIcon} size={22} color={Colors.textPrimary} />
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default DeliveryScreen;
