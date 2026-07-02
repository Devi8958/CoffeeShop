import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import 'react-native-gesture-handler';
import RNBootSplash from 'react-native-bootsplash';

import AppNavigator from './src/navigation/AppNavigator';
import { CoffeeProvider } from './src/context/CoffeeContext';

const App = () => {
  useEffect(() => {
    RNBootSplash.hide({ fade: true });
  }, []);

  return (
    <>
      <CoffeeProvider>
        <StatusBar barStyle="light-content" backgroundColor="#111111" />

        <AppNavigator />
      </CoffeeProvider>
    </>
  );
};

export default App;
