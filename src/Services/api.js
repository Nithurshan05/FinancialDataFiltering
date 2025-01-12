import axios from 'axios';

const API_URL = 'https://financialmodelingprep.com/api/v3/income-statement/AAPL?period=annual&apikey=YOUR_ACTUAL_API_KEY';

export const fetchFinancialData = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};
