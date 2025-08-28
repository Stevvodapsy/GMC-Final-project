import axios from "axios";

const API_URL = "http://localhost:5000/api";

export const fetchAllRewards = async () => {
  const res = await axios.get(`${API_URL}/rewards`);
  return res.data;
};

export const fetchAnalytics = async () => {
  const res = await axios.get(`${API_URL}/analytics`);
  return res.data;
};
