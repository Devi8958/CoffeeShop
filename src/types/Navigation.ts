import Routes from '../constants/Routes';

export type RootStackParamList = {
  [Routes.Splash]: undefined;
  [Routes.BottomTabs]: undefined;
  [Routes.Details]: { coffeeId: string };
  [Routes.Order]: { coffeeId: string };
  [Routes.Delivery]: undefined;
};

export type BottomTabParamList = {
  [Routes.Home]: undefined;
  [Routes.Favorites]: undefined;
  [Routes.Cart]: undefined;
  [Routes.Notifications]: undefined;
};
