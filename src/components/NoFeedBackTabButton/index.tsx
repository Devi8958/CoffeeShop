import React from 'react';
import {Pressable} from 'react-native';
import {BottomTabBarButtonProps} from '@react-navigation/bottom-tabs';

const NoFeedbackTabButton = ({
  children,
  onPress,
  onLongPress,
  accessibilityState,
  accessibilityLabel,
  testID,
  style,
}: BottomTabBarButtonProps) => {
  return (
    <Pressable
      onPress={onPress}
      onLongPress={onLongPress}
      accessibilityState={accessibilityState}
      accessibilityLabel={accessibilityLabel}
      testID={testID}
      style={style}
      android_ripple={{color: 'transparent', borderless: false}}>
      {children}
    </Pressable>
  );
};

export default NoFeedbackTabButton;