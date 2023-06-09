

import { http://104.211.219.98/train/register } from '../config';

export const fetchAllTrains = async () => {
  try {
    const response = await fetch(`${http://104.211.219.98/train/registerL}/trains`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching trains:', error);
    throw error;
  }
};
