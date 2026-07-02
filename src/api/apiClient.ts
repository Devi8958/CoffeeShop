const baseUrl = 'https://6a45eed8a268c8be2ce6da67.mockapi.io/api/v1';

export const getRequest = async <T>(endpoint: string): Promise<T> => {
  const response = await fetch(`${baseUrl}${endpoint}`);

  if (!response.ok) {
    throw new Error('Something went wrong');
  }

  return response.json();
};
