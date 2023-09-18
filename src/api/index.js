import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://travel-advisor.p.rapidapi.com/locations/v2/auto-complete',
  params: {
    query: 'eiffel tower',
    lang: 'en_US',
    units: 'km'
  },
  headers: {
    'X-RapidAPI-Key': '4813c0479cmsh4d795371ec5f1e0p19dc5cjsn8bee7511540d',
    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}



export const getPlaces = async () => {
    try {
        const res = await axios.get()
    } catch (error) {
        
    }
}