import axios from "axios";

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'

const options = {
  method: 'GET',
  url: URL,
  params: {
    bl_latitude: '11.847676',
    tr_latitude: '12.838442',
    bl_longitude: '109.095887',
    tr_longitude: '109.149359',
    restaurant_tagcategory_standalone: '10591',
    restaurant_tagcategory: '10591',
    limit: '30',
    currency: 'USD',
    open_now: 'false',
    lunit: 'km',
    lang: 'en_US',
  },
  headers: {
    'x-rapidapi-key': '8acbbaa79emshde5c3ce29d136c1p180bccjsnd83a1b6a11cb',
    'x-rapidapi-host': 'travel-advisor.p.rapidapi.com'
  }
};



export const getPlaces = async () => {
    try {
        const {data : { data }} = await axios.get(URL, options);
        return data;
    } catch (error) {
      console.error(error);
    }
}

// 8acbbaa79emshde5c3ce29d136c1p180bccjsnd83a1b6a11cb
// 4813c0479cmsh4d795371ec5f1e0p19dc5cjsn8bee7511540d
