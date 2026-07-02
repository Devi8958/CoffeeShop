import React from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';

import styles from './styles';

interface AppButtonProps extends TouchableOpacityProps {
  title: string;
  onPress: () => void;
  buttonStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

const AppButton = ({
  title,
  onPress,
  disabled = false,
  buttonStyle,
  textStyle,
  ...rest
}: AppButtonProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      disabled={disabled}
      onPress={onPress}
      style={[
        styles.button,
        disabled && styles.disabledButton,
        buttonStyle,
      ]}
      {...rest}>
      <Text style={[styles.title, textStyle]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default AppButton;