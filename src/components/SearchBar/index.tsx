import React from 'react';
import { TextInput, View, TouchableOpacity } from 'react-native';

import styles from './styles';
import Colors from '../../constants/Colors';
import { SearchIcon, FilterIcon } from '../../assets/icons';
import AppIcon from '../AppIcon';

interface SearchBarProps {
  value: string;
  onChangeText: (text: string) => void;
}

const SearchBar = ({ value, onChangeText }: SearchBarProps) => {
  return (
    <View style={styles.container}>
      <AppIcon Icon={SearchIcon} size={20} color={Colors.textSecondary} />

      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder="Search coffee"
        placeholderTextColor={Colors.textSecondary}
        style={styles.input}
      />

      <TouchableOpacity activeOpacity={0.8} style={styles.filterButton}>
        <AppIcon Icon={FilterIcon} size={20} color={Colors.white} />
      </TouchableOpacity>
    </View>
  );
};

export default React.memo(SearchBar);
