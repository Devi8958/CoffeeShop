import { useCallback, useMemo, useState } from 'react';

interface Params {
  itemPrice: number;
  deliveryFee?: number;
}

export const useOrderCalculation = ({ itemPrice, deliveryFee = 1 }: Params) => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = useCallback(() => {
    setQuantity(prev => prev + 1);
  }, []);

  const decreaseQuantity = useCallback(() => {
    setQuantity(prev => (prev > 1 ? prev - 1 : 1));
  }, []);

  const itemTotal = useMemo(() => itemPrice * quantity, [itemPrice, quantity]);
  const totalPrice = useMemo(() => itemTotal + deliveryFee, [itemTotal, deliveryFee]);

  return {
    quantity,
    itemTotal,
    deliveryFee,
    totalPrice,
    increaseQuantity,
    decreaseQuantity,
  };
};
