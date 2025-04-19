import axios from 'axios';

const API_KEY = '49821114-4fd29475c454a2f5ef41f6df5';
const URL = 'https://pixabay.com/api/';

export const fetchPhotosByQuery = async (q, currentPage) => {
  try {
    const searchParams = {
      q,
      page: currentPage,
      key: '49370474-a1716903616cca1a00d36cfab',
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 15,
    };

    return await axios.get('', { params: searchParams });
  } catch (error) {
    console.log(error.message);
  }
};
