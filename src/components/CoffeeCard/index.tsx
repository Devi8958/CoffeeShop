import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import styles from './styles';
import { Coffee } from '../../types';
import ImageMapper from '../../utils/ImageMapper';
import Colors from '../../constants/Colors';
import { PlusIcon, StarIcon } from '../../assets/icons';
import AppIcon from '../AppIcon';

interface CoffeeCardProps {
  item: Coffee;
  onPress: () => void;
}

const CoffeeCard = ({ item, onPress }: CoffeeCardProps) => {
  return (
    <TouchableOpacity activeOpacity={0.85} onPress={onPress} style={styles.container}>
      <View>
        <Image source={ImageMapper[item.image]} style={styles.image} resizeMode="cover" />

        <View style={styles.ratingContainer}>
          <AppIcon Icon={StarIcon} size={12} color={Colors.yellow} />
          <Text style={styles.rating}>{item.rating}</Text>
        </View>
      </View>

      <Text numberOfLines={1} style={styles.name}>
        {item.name}
      </Text>

      <Text numberOfLines={1} style={styles.subtitle}>
        {item.subtitle}
      </Text>

      <View style={styles.footer}>
        <Text style={styles.price}>$ {item.price.toFixed(2)}</Text>

        <TouchableOpacity activeOpacity={0.8} style={styles.addButton}>
          <AppIcon Icon={PlusIcon} size={16} color={Colors.white} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default React.memo(CoffeeCard);
