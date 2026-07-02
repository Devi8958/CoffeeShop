import React, { useCallback, useEffect, useMemo, useState } from 'react';
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  NativeSyntheticEvent,
  TextLayoutEventData,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import styles from './styles';
import Routes from '../../constants/Routes';
import Colors from '../../constants/Colors';
import AppHeader from '../../components/AppHeader';
import AppButton from '../../components/AppButton';
import AppIcon from '../../components/AppIcon';
import ImageMapper from '../../utils/ImageMapper';
import { useCoffee } from '../../hooks/useCoffee';
import { RootStackParamList } from '../../types';
import {
  StarIcon,
  FavoriteOutlined,
  BackIcon,
  CoffeeBeanIcon,
  MilkIcon,
  BikeIcon,
  FavoriteFilled,
} from '../../assets/icons';
import AppConstants from '../../constants/AppConstants';

type Props = NativeStackScreenProps<RootStackParamList, typeof Routes.Details>;

const DetailsScreen = ({ navigation, route }: Props) => {
  const { coffeeId } = route.params;
  const { allCoffees, loading, error, refetch, toggleFavorite } = useCoffee();
  const [selectedSize, setSelectedSize] = useState('');
  const [expanded, setExpanded] = useState(false);
  const [showReadMore, setShowReadMore] = useState(false);
  const [measured, setMeasured] = useState(false);

  const coffee = useMemo(
    () => allCoffees.find(item => item.id === coffeeId),
    [allCoffees, coffeeId],
  );
  const sizes = useMemo(() => coffee?.sizes ?? ['S', 'M', 'L'], [coffee]);

  useEffect(() => {
    if (sizes.length > 0) {
      setSelectedSize(sizes[0]);
    }
  }, [sizes]);

  useEffect(() => {
    setExpanded(false);
    setShowReadMore(false);
    setMeasured(false);
  }, [coffeeId]);

  const handleBackPress = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const handleBuyNow = useCallback(() => {
    if (!coffee) {
      return;
    }

    console.log('Buy now:', coffee.id, selectedSize);
  }, [coffee, selectedSize]);

  const handleFavorite = useCallback(() => {
    if (!coffee) {
      return;
    }

    toggleFavorite(coffee.id);
  }, [coffee, toggleFavorite]);

  const handleTextLayout = useCallback(
    ({ nativeEvent }: NativeSyntheticEvent<TextLayoutEventData>) => {
      if (!measured) {
        setShowReadMore(nativeEvent.lines.length > 3);
        setMeasured(true);
      }
    },
    [measured],
  );

  if (loading) {
    return (
      <View style={styles.centerContainer}>
        <Text style={styles.errorText}>{AppConstants.details.loading}</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centerContainer}>
        <Text style={styles.errorText}>{error}</Text>
        <AppButton title="Retry" onPress={refetch} buttonStyle={styles.retryButton} />
      </View>
    );
  }

  if (!coffee) {
    return (
      <View style={styles.centerContainer}>
        <Text style={styles.errorText}>{AppConstants.details.detailNotFound}</Text>
        <AppButton
          title={AppConstants.details.goBack}
          onPress={handleBackPress}
          buttonStyle={styles.retryButton}
        />
      </View>
    );
  }

  return (
    <View style={styles.screen}>
      <AppHeader
        title="Detail"
        leftIcon={BackIcon}
        rightIcon={coffee.isFavorite ? FavoriteFilled : FavoriteOutlined}
        rightIconColor={coffee.isFavorite ? Colors.primary : Colors.textPrimary}
        onLeftPress={handleBackPress}
        onRightPress={handleFavorite}
      />

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
        <Image source={ImageMapper[coffee.image]} style={styles.image} resizeMode="cover" />

        <View style={styles.infoRow}>
          <View style={styles.infoLeft}>
            <Text numberOfLines={1} style={styles.name}>
              {coffee.name}
            </Text>

            <Text numberOfLines={1} style={styles.subtitle}>
              {coffee.subtitle}
            </Text>

            <View style={styles.ratingRow}>
              <AppIcon Icon={StarIcon} size={18} color={Colors.yellow} />
              <Text style={styles.rating}>{coffee.rating}</Text>
              <Text style={styles.ratingCount}>({coffee.ratingCount ?? 230})</Text>
            </View>
          </View>

          <View style={styles.featureRow}>
            <View style={styles.featureBox}>
              <AppIcon Icon={BikeIcon} size={20} color={Colors.primary} />
            </View>

            <View style={styles.featureBox}>
              <AppIcon Icon={CoffeeBeanIcon} size={20} color={Colors.primary} />
            </View>

            <View style={styles.featureBox}>
              <AppIcon Icon={MilkIcon} size={20} color={Colors.primary} />
            </View>
          </View>
        </View>

        <View style={styles.divider} />

        <Text style={styles.sectionTitle}>{AppConstants.details.descriptionTitle}</Text>

        <View>
          <Text
            style={styles.description}
            numberOfLines={measured && !expanded ? 3 : undefined}
            onTextLayout={handleTextLayout}
          >
            {coffee.description}
          </Text>

          {showReadMore && (
            <TouchableOpacity activeOpacity={0.8} onPress={() => setExpanded(prev => !prev)}>
              <Text style={styles.readMore}>
                {expanded ? AppConstants.details.readless : AppConstants.details.readMore}
              </Text>
            </TouchableOpacity>
          )}
        </View>

        <Text style={styles.sectionTitle}>{AppConstants.details.sizeTitle}</Text>

        <View style={styles.sizeRow}>
          {sizes.map(size => {
            const isSelected = selectedSize === size;

            return (
              <TouchableOpacity
                key={size}
                activeOpacity={0.8}
                onPress={() => setSelectedSize(size)}
                style={[styles.sizeBox, isSelected && styles.selectedSizeBox]}
              >
                <Text style={[styles.sizeText, isSelected && styles.selectedSizeText]}>{size}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <View>
          <Text style={styles.priceLabel}>{AppConstants.details.price}</Text>
          <Text style={styles.price}>$ {coffee.price.toFixed(2)}</Text>
        </View>

        <AppButton
          title={AppConstants.details.buyNow}
          onPress={handleBuyNow}
          buttonStyle={styles.buyButton}
        />
      </View>
    </View>
  );
};

export default DetailsScreen;
