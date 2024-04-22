import axios from "axios";

const KEY = "JRCgPyKqek-3xDn3ZMJlEUM77lu4GANVfaWzKoflQJA";
import { ApiResponseType } from "./components/App/App.types";

axios.defaults.baseURL = "https://api.unsplash.com/search";

export const fetchPhotosWithTopic = async <ApiResponseType>(
  currentPage: number,
  per_page: number,
  topic: string
): Promise<ApiResponseType> => {
  const response = await axios.get<ApiResponseType>(
    `/photos?client_id=${KEY}&page=${currentPage}&per_page=${per_page}&query=${topic}`
  );
  return response.data;
};
