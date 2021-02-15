import axios from "axios";
import ApiUrls from '../config/ApiUrls'
const apiFetch = async () => {
  try {
    let apiValue = await axios.get(ApiUrls + `/comments`);
    return apiValue;
  } catch (error) {
    return error;
  }
};

export default apiFetch;