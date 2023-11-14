// utils/fetchPlayerData.js
import fetchData from './fetchData';

const fetchPlayerData = async (searchInput) => {
  try {
    const res = await fetchData('player', searchInput);
    console.log(res)
    return res;
  } catch (error) {
    console.error('Error fetching player data:', error);
    throw error;
  }
};

export default fetchPlayerData;
