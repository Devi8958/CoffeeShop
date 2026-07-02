import React, { useCallback, useMemo } from 'react';
import { Image, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import styles from './styles';
import Routes from '../../constants/Routes';
import Colors from '../../constants/Colors';
import AppConstants from '../../constants/AppConstants';
import AppHeader from '../../components/AppHeader';
import AppButton from '../../components/AppButton';
import AppIcon from '../../components/AppIcon';
import ImageMapper from '../../utils/ImageMapper';
import { useCoffee } from '../../hooks/useCoffee';
import { useOrderCalculation } from '../../hooks/useOrderCalculation';
import { RootStackParamList } from '../../types';
import {
  BackIcon,
  MinusIcon,
  PlusIcon,
  EditIcon,
  DocumentIcon,
  DiscountIcon,
  WalletIcon,
  DownArrowIcon,
  RightArrowIcon,
} from '../../assets/icons';

type Props = NativeStackScreenProps<RootStackParamList, typeof Routes.Order>;

const OrderScreen = ({ navigation, route }: Props) => {
  const { coffeeId } = route.params;
  const { allCoffees } = useCoffee();

  const coffee = useMemo(
    () => allCoffees.find(item => item.id === coffeeId),
    [allCoffees, coffeeId],
  );

  const { quantity, itemTotal, deliveryFee, totalPrice, increaseQuantity, decreaseQuantity } =
    useOrderCalculation({
      itemPrice: coffee?.price ?? 0,
    });

  const handleBackPress = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const handleOrderPress = useCallback(() => {
    navigation.navigate(Routes.Delivery);
  }, [navigation]);
  if (!coffee) {
    return (
      <View style={styles.centerContainer}>
        <Text style={styles.errorText}>{AppConstants.order.itemNotFound}</Text>
      </View>
    );
  }

  return (
    <View style={styles.screen}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.transparent} translucent />

      <AppHeader
        title={AppConstants.order.title}
        leftIcon={BackIcon}
        onLeftPress={handleBackPress}
      />

      <View style={styles.content}>
        <View style={styles.tabContainer}>
          <TouchableOpacity activeOpacity={0.8} style={[styles.tabButton, styles.activeTab]}>
            <Text style={styles.activeTabText}>{AppConstants.order.delivery}</Text>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.8} style={styles.tabButton}>
            <Text style={styles.tabText}>{AppConstants.order.pickup}</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionTitle}>{AppConstants.order.deliveryAddress}</Text>
        <Text style={styles.addressTitle}>{AppConstants.order.addressTitle}</Text>
        <Text style={styles.addressDescription}>{AppConstants.order.addressDescription}</Text>

        <View style={styles.addressActionRow}>
          <TouchableOpacity activeOpacity={0.8} style={styles.addressActionButton}>
            <AppIcon Icon={EditIcon} size={14} color={Colors.textPrimary} />
            <Text style={styles.addressActionText}>{AppConstants.order.editAddress}</Text>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.8} style={styles.addressActionButton}>
            <AppIcon Icon={DocumentIcon} size={14} color={Colors.textPrimary} />
            <Text style={styles.addressActionText}>{AppConstants.order.addNote}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.itemTopDivider} />

        <View style={styles.orderItem}>
          <Image source={ImageMapper[coffee.image]} style={styles.itemImage} resizeMode="cover" />

          <View style={styles.itemInfo}>
            <Text numberOfLines={1} style={styles.itemName}>
              {coffee.name}
            </Text>

            <Text numberOfLines={1} style={styles.itemSubtitle}>
              {coffee.subtitle}
            </Text>
          </View>

          <View style={styles.quantityRow}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.quantityButton}
              onPress={decreaseQuantity}
            >
              <AppIcon Icon={MinusIcon} size={14} color={Colors.textPrimary} />
            </TouchableOpacity>

            <Text style={styles.quantityText}>{quantity}</Text>

            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.quantityButton}
              onPress={increaseQuantity}
            >
              <AppIcon Icon={PlusIcon} size={14} color={Colors.textPrimary} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.itemBottomDivider} />
        <View style={styles.discountBox}>
          <View style={styles.discountLeft}>
            <AppIcon Icon={DiscountIcon} size={18} color={Colors.primary} />
            <Text style={styles.discountText}>{AppConstants.order.discountApplied}</Text>
          </View>

          <AppIcon Icon={RightArrowIcon} size={18} color={Colors.textPrimary} />
        </View>

        <Text style={styles.sectionTitle}>{AppConstants.order.paymentSummary}</Text>

        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>{AppConstants.order.price}</Text>
          <Text style={styles.summaryValue}>$ {itemTotal.toFixed(2)}</Text>
        </View>

        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>{AppConstants.order.deliveryFee}</Text>

          <View style={styles.deliveryFeeRow}>
            <Text style={styles.oldDeliveryFee}>$ 2.0</Text>
            <Text style={styles.summaryValue}>$ {deliveryFee.toFixed(2)}</Text>
          </View>
        </View>
      </View>

      <View style={styles.footer}>
        <View style={styles.walletRow}>
          <View style={styles.walletLeft}>
            <AppIcon Icon={WalletIcon} size={20} color={Colors.primary} />

            <View>
              <Text style={styles.paymentTitle}>{AppConstants.order.cashWallet}</Text>
              <Text style={styles.paymentPrice}>$ {totalPrice.toFixed(2)}</Text>
            </View>
          </View>

          <AppIcon Icon={DownArrowIcon} size={18} color={Colors.textPrimary} />
        </View>

        <AppButton
          title={AppConstants.order.orderNow}
          onPress={handleOrderPress}
          buttonStyle={styles.orderButton}
        />
      </View>
    </View>
  );
};

export default OrderScreen;
