// utils/fetchPlayerStats.js
import fetchData from './fetchData';

const fetchPlayerStats = async (searchInput) => {
  try {
    const res = await fetchData('player', `${searchInput}/stats`);
    console.log(res)
    return res;
  } catch (error) {
    console.error('Error fetching player data:', error);
    throw error;
  }
};

export default fetchPlayerStats;
