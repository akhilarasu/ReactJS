import axios from "axios";
import ApiUrls from '../configs/ApiUrls'
const apiFetch = async () => {
  try {
    let apiValue = await axios.get(ApiUrls + '/photos' );
    return apiValue;
  } catch (error) {
    return error;
  }
};

export default apiFetch;