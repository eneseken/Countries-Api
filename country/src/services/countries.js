import axios from 'axios';

const BASE_URL = 'https://restcountries.com/v3.1/all';

const getCountries = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export { getCountries };