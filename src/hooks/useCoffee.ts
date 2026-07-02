import { useContext } from 'react';

import { CoffeeContext } from '../context/CoffeeContext';

export const useCoffee = () => {
  const context = useContext(CoffeeContext);

  if (!context) {
    throw new Error('useCoffee must be used inside CoffeeProvider');
  }

  return context;
};
