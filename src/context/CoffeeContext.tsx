import React, { createContext, useCallback, useEffect, useMemo, useState } from 'react';

import { getFilteredCoffees, getHomeData } from '../services';
import { Category, Coffee } from '../types';

interface CoffeeContextValue {
  coffees: Coffee[];
  allCoffees: Coffee[];
  categories: Category[];
  selectedCategoryId: string;
  searchText: string;
  loading: boolean;
  error: string;
  setSelectedCategoryId: (id: string) => void;
  setSearchText: (text: string) => void;
  toggleFavorite: (coffeeId: string) => void;
  refetch: () => Promise<void>;
}

export const CoffeeContext = createContext<CoffeeContextValue | undefined>(undefined);

export const CoffeeProvider = ({ children }: { children: React.ReactNode }) => {
  const [allCoffees, setAllCoffees] = useState<Coffee[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState('all');
  const [searchText, setSearchText] = useState('');

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchHomeData = useCallback(async () => {
    try {
      setLoading(true);
      setError('');

      const result = await getHomeData();

      setAllCoffees(result.coffees);
      setCategories(result.categories);
    } catch {
      setError('Unable to load coffee list. Please try again.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchHomeData();
  }, [fetchHomeData]);

  const toggleFavorite = useCallback((coffeeId: string) => {
    setAllCoffees(prev =>
      prev.map(coffee =>
        coffee.id === coffeeId ? { ...coffee, isFavorite: !coffee.isFavorite } : coffee,
      ),
    );
  }, []);

  const coffees = useMemo(() => {
    return getFilteredCoffees(allCoffees, selectedCategoryId, searchText);
  }, [allCoffees, selectedCategoryId, searchText]);

  const value = useMemo(
    () => ({
      coffees,
      allCoffees,
      categories,
      selectedCategoryId,
      searchText,
      loading,
      error,
      setSelectedCategoryId,
      setSearchText,
      toggleFavorite,
      refetch: fetchHomeData,
    }),
    [
      coffees,
      allCoffees,
      categories,
      selectedCategoryId,
      searchText,
      loading,
      error,
      toggleFavorite,
      fetchHomeData,
    ],
  );

  return <CoffeeContext.Provider value={value}>{children}</CoffeeContext.Provider>;
};
