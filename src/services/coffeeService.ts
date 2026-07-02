import { fetchCategoryList, fetchCoffeeList } from '../api';
import { Category, Coffee } from '../types';

interface HomeData {
  coffees: Coffee[];
  categories: Category[];
}

export const loadHomeData = async (): Promise<HomeData> => {
  const [coffees, apiCategories] = await Promise.all([fetchCoffeeList(), fetchCategoryList()]);

  const categories: Category[] = [
    {
      id: 'all',
      title: 'All Coffee',
    },
    ...apiCategories,
  ];

  return {
    coffees,
    categories,
  };
};

export const filterCoffees = (
  coffees: Coffee[],
  selectedCategoryId: string,
  searchText: string,
): Coffee[] => {
  return coffees.filter(coffee => {
    const matchesCategory =
      selectedCategoryId === 'all' || coffee.categoryId === selectedCategoryId;

    const matchesSearch = coffee.name.toLowerCase().includes(searchText.toLowerCase());

    return matchesCategory && matchesSearch;
  });
};
