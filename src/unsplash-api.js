import axios from "axios";

const KEY = "JRCgPyKqek-3xDn3ZMJlEUM77lu4GANVfaWzKoflQJA";

axios.defaults.baseURL = "https://api.unsplash.com/search";

export const fetchPhotosWithTopic = async (currentPage, per_page, topic) => {
  const response = await axios.get(
    `/photos?client_id=${KEY}&page=${currentPage}&per_page=${per_page}&query=${topic}`
  );
  return response.data;
};
