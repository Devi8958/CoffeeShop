import React from 'react';
import {View} from 'react-native';
import {SvgProps} from 'react-native-svg';

import styles from './styles';

interface Props {
  focused: boolean;
  color: string;
  FilledIcon: React.FC<SvgProps>;
  OutlineIcon: React.FC<SvgProps>;
}

const BottomTabIcon = ({
  focused,
  color,
  FilledIcon,
  OutlineIcon,
}: Props) => {
  const Icon = focused ? FilledIcon : OutlineIcon;

  return (
    <View style={styles.container}>
      <Icon
        width={24}
        height={24}
        color={color}
      />

      {focused && <View style={styles.indicator} />}
    </View>
  );
};

export default BottomTabIcon;