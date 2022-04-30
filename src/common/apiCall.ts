import axios from 'axios';

const baseUrl = 'https://swapi.dev/api/';
export const getRequest = async ({ url }: { url: string }) => {
  const response = await axios.get(`${baseUrl}${url}`);
  return response.data;
};


