import { useCallback, useEffect, useMemo, useState } from 'react';

import { filterCoffees, loadHomeData } from '../services';
import { Category, Coffee } from '../types';

export const useCoffee = () => {
  const [coffees, setCoffees] = useState<Coffee[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState('all');
  const [searchText, setSearchText] = useState('');

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchHomeData = useCallback(async () => {
    try {
      setLoading(true);
      setError('');

      const result = await loadHomeData();

      setCoffees(result.coffees);
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

  const filteredCoffees = useMemo(() => {
    return filterCoffees(coffees, selectedCategoryId, searchText);
  }, [coffees, selectedCategoryId, searchText]);

  return {
    coffees: filteredCoffees,
    categories,
    selectedCategoryId,
    searchText,
    loading,
    error,
    setSelectedCategoryId,
    setSearchText,
    refetch: fetchHomeData,
  };
};
