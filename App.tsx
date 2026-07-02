// src/App.tsx

import React, { useEffect } from 'react';
import 'react-native-gesture-handler';
import RNBootSplash from 'react-native-bootsplash';

import AppNavigator from './src/navigation/AppNavigator';

const App = () => {
  useEffect(() => {
    RNBootSplash.hide({ fade: true });
  }, []);

  return <AppNavigator />;
};

export default App;
