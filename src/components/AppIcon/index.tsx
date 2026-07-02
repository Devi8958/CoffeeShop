import React from 'react';
import { SvgProps } from 'react-native-svg';

interface AppIconProps {
  Icon: React.FC<SvgProps>;
  size?: number;
  color?: string;
}

const AppIcon = ({ Icon, size = 24, color }: AppIconProps) => {
  return <Icon width={size} height={size} color={color} />;
};

export default AppIcon;
