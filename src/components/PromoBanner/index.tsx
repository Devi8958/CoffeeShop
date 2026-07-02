import React from 'react';
import { ImageBackground, Text, View } from 'react-native';

import styles from './styles';
import { Images } from '../../assets';
import AppConstants from '../../constants/AppConstants';

const PromoBanner = () => {
  return (
    <View style={styles.wrapper}>
      <ImageBackground source={Images.promo} style={styles.container} imageStyle={styles.image}>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{AppConstants.home.promoFlag}</Text>
        </View>
        <View style={styles.titleWrapper}>
          <View style={styles.lineWrapper}>
            <View style={styles.lineBg} />
            <Text style={styles.title}>{AppConstants.home.promoTitle1}</Text>
          </View>

          <View style={styles.lineWrapper}>
            <View style={styles.lineBg} />
            <Text style={styles.title}>{AppConstants.home.promoTitle2}</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default React.memo(PromoBanner);
