import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SvgProps } from 'react-native-svg';

import styles from './styles';
import Colors from '../../constants/Colors';
import AppIcon from '../AppIcon';

type IconType = React.FC<SvgProps>;

interface AppHeaderProps {
  title: string;
  leftIcon?: IconType;
  rightIcon?: IconType;
  leftIconColor?: string;
  rightIconColor?: string;
  onLeftPress?: () => void;
  onRightPress?: () => void;
}

const AppHeader = ({
  title,
  leftIcon,
  rightIcon,
  onLeftPress,
  onRightPress,
  leftIconColor = Colors.textPrimary,
  rightIconColor = Colors.textPrimary,
}: AppHeaderProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.sideContainer}>
        {leftIcon ? (
          <TouchableOpacity activeOpacity={0.8} onPress={onLeftPress} style={styles.iconButton}>
            <AppIcon Icon={leftIcon} size={22} color={leftIconColor} />
          </TouchableOpacity>
        ) : null}
      </View>

      <Text numberOfLines={1} style={styles.title}>
        {title}
      </Text>

      <View style={styles.sideContainer}>
        {rightIcon ? (
          <TouchableOpacity activeOpacity={0.8} onPress={onRightPress} style={styles.iconButton}>
            <AppIcon Icon={rightIcon} size={22} color={rightIconColor} />
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
};

export default React.memo(AppHeader);
