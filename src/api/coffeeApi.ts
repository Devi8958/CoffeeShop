import endpoints from './endPoints';
import { getRequest } from './apiClient';
import { Category, Coffee } from '../types';

export const fetchCoffeeList = () => {
  return getRequest<Coffee[]>(endpoints.coffees);
};

export const fetchCategoryList = () => {
  return getRequest<Category[]>(endpoints.categories);
};
