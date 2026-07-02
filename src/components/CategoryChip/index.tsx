import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import styles from './styles';

interface CategoryChipProps {
  title: string;
  selected: boolean;
  onPress: () => void;
}

const CategoryChip = ({ title, selected, onPress }: CategoryChipProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={[styles.container, selected && styles.selectedContainer]}
    >
      <Text style={[styles.title, selected && styles.selectedTitle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default React.memo(CategoryChip);
