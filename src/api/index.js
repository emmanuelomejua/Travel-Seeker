import axios from "axios";



export const getPlaces = async (type, sw, ne) => {
    try {
        const {data : { data }} = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
            method: 'GET',
            url: URL,
            params: {
              bl_latitude: sw.lat,
              tr_latitude: ne.lat,
              bl_longitude: sw.lng,
              tr_longitude: ne.lng,
            },
            headers: {
              'x-rapidapi-key': '8acbbaa79emshde5c3ce29d136c1p180bccjsnd83a1b6a11cb',
              'x-rapidapi-host': 'travel-advisor.p.rapidapi.com'
            }
        });
        return data;
    } catch (error) {
      console.error(error);
    }
}

// 8acbbaa79emshde5c3ce29d136c1p180bccjsnd83a1b6a11cb
// 4813c0479cmsh4d795371ec5f1e0p19dc5cjsn8bee7511540d

export const getWeatherData = async () => {
  try {
    const { data } = await axios.get('https://community-open-weather-map.p.rapidapi.com/find', {

    });
  } catch (error) {
    console.error(error);
  }
}
