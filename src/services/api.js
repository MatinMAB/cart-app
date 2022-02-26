import axios from "../plugins/axios";

const getProducts = async () => {
  const response = await axios.get("products");
  return response.data;
};

export { getProducts };
