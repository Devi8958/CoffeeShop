import { fetchCoffeeList, fetchCategoryList } from '../api/coffeeApi';

export const loadHomeData = async () => {
  const [coffees, categories] = await Promise.all([fetchCoffeeList(), fetchCategoryList()]);

  return {
    coffees,
    categories,
  };
};
