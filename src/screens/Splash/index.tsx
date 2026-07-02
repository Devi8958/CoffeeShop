import React from 'react';
import { Image, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import styles from './styles';
import Routes from '../../constants/Routes';
import AppConstants from '../../constants/AppConstants';
import { Images } from '../../assets';
import AppButton from '../../components/AppButton';
import { RootStackParamList } from '../../types/Navigation';

type Props = NativeStackScreenProps<RootStackParamList, typeof Routes.Splash>;

const SplashScreen = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <SafeAreaView edges={['top']} style={styles.imageContainer}>
        <Image source={Images.splash} style={styles.image} resizeMode="cover" />
      </SafeAreaView>

      <View style={styles.contentContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{AppConstants.splash.title}</Text>

          <Text style={styles.description}>{AppConstants.splash.description}</Text>

          <AppButton
            title={AppConstants.splash.buttonTitle}
            onPress={() => navigation.replace(Routes.BottomTabs)}
            buttonStyle={styles.button}
          />
        </View>
      </View>
    </View>
  );
};

export default SplashScreen;
