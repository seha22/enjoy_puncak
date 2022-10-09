import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': '96b0af1cccmshbe01a6f90711b2dp1b66a1jsn04a059ea276c' ,
    },
  });
    
  return data;
}

// headers: {
//   'X-RapidAPI-Key': '96b0af1cccmshbe01a6f90711b2dp1b66a1jsn04a059ea276c',
//   'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
// }