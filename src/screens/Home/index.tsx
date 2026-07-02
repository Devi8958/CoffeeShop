import React, { useCallback, useMemo } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import styles from './styles';
import Routes from '../../constants/Routes';
import Colors from '../../constants/Colors';
import { useCoffee } from '../../hooks/useCoffee';
import { Coffee, RootStackParamList, BottomTabParamList } from '../../types';

import SearchBar from '../../components/SearchBar';
import CategoryChip from '../../components/CategoryChip';
import PromoBanner from '../../components/PromoBanner';
import CoffeeCard from '../../components/CoffeeCard';
import AppButton from '../../components/AppButton';
import AppIcon from '../../components/AppIcon';
import AppConstants from '../../constants/AppConstants';
import { DownArrowIcon } from '../../assets';

type Props = CompositeScreenProps<
  BottomTabScreenProps<BottomTabParamList, typeof Routes.Home>,
  NativeStackScreenProps<RootStackParamList>
>;

const HomeScreen = ({ navigation }: Props) => {
  const {
    coffees,
    categories,
    selectedCategoryId,
    searchText,
    loading,
    error,
    setSelectedCategoryId,
    setSearchText,
    refetch,
  } = useCoffee();

  const handleCoffeePress = useCallback(
    (coffee: Coffee) => {
      navigation.navigate(Routes.Details, {
        coffeeId: coffee.id,
      });
    },
    [navigation],
  );

  const renderCoffeeItem = useCallback(
    ({ item }: { item: Coffee }) => (
      <CoffeeCard item={item} onPress={() => handleCoffeePress(item)} />
    ),
    [handleCoffeePress],
  );

  const ListHeader = useMemo(
    () => (
      <View>
        <View style={styles.headerContainer}>
          <View style={styles.topSection}>
            <Text style={styles.locationLabel}>{AppConstants.home.location}</Text>
            <View style={styles.locationContainer}>
              <Text style={styles.locationText}>{AppConstants.home.locationName}</Text>

              <View style={styles.arrowContainer}>
                <AppIcon Icon={DownArrowIcon} size={16} color={Colors.textSecondary} />{' '}
              </View>
            </View>
            <SearchBar value={searchText} onChangeText={setSearchText} />
          </View>

          <PromoBanner />
        </View>

        <FlatList
          horizontal
          data={categories}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <CategoryChip
              title={item.title}
              selected={selectedCategoryId === item.id}
              onPress={() => setSelectedCategoryId(item.id)}
            />
          )}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoryList}
          keyboardShouldPersistTaps="handled"
        />
      </View>
    ),
    [searchText, categories, selectedCategoryId, setSearchText, setSelectedCategoryId],
  );
  if (loading) {
    return (
      <View style={styles.centerContainer}>
        <ActivityIndicator size="large" color={Colors.primary} />
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

  return (
    <FlatList
      data={coffees}
      numColumns={2}
      keyExtractor={item => item.id}
      renderItem={renderCoffeeItem}
      ListHeaderComponent={ListHeader}
      keyboardShouldPersistTaps="handled"
      ListEmptyComponent={
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>{AppConstants.home.noCoffeeFound}</Text>
        </View>
      }
      columnWrapperStyle={styles.columnWrapper}
      contentContainerStyle={styles.listContent}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default HomeScreen;
