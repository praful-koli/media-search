import axios from "axios";

const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY;
const PEXELS_KEY = import.meta.env.VITE_PEXELS_KEY;
const GIPHY_KEY = import.meta.env.VITE_GIPHY_KEY;
const API_UNSPLASH_URL = "https://api.unsplash.com/search/photos";
const API_PEXELS_URL = "https://api.pexels.com/videos/search";
const API_GIPHY_URL = "https://api.giphy.com/v1/gifs/search";

export async function fetchPhotos(query, page = 1, per_page = 20) {
  try {
    const res = await axios.get(API_UNSPLASH_URL, {
      params: { query, page, per_page },
      headers: {
        Authorization: `Client-ID ${UNSPLASH_KEY}`,
      },
    });
    return res.data;
  } catch (error) {
    console.log(`Error fetching photos : ${error.res?.data || error.message}`);
  }
}

export async function fetchVideo(query, per_page = 15) {
  try {
    const rep = await axios.get(API_PEXELS_URL, {
      params: { query , per_page },
      headers: {
        Authorization: PEXELS_KEY,
      },
    });

    return rep.data;
  } catch (error) {
    console.log(`Error fetcinng peixl : ${error.res?.data || error.message}`);
  }
}



export async function fetchGif(query) {
  try {
    const rep = await axios.get(API_GIPHY_URL, {
      params: {
        q: query,
        api_key: GIPHY_KEY,
        limit: 10, 
      },
    });
    
    return rep.data.data;
  } catch (error) {
    console.log(`Error fetching gif: ${error.response?.data || error.message}`);
  }
}