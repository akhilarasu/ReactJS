import axios from "axios";
import ApiUrls from '../configs/ApiUrls'
const fetchApi = async () => {
  try {
    let apiValue = await axios.get(ApiUrls + '/posts')
    return apiValue.data;
  } catch (error) {
    return error;
  }
};


export default fetchApi;