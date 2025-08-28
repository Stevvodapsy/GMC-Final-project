import axios from "axios";

const API_URL = "http://localhost:5000/api";

export const fetchUserPickups = async (userId) => {
  const res = await axios.get(`${API_URL}/pickups?userId=${userId}`);
  return res.data;
};

export const fetchUserReports = async (userName) => {
  const res = await axios.get(`${API_URL}/reports?reportedBy=${userName}`);
  return res.data;
};

export const fetchUserRewards = async (userId) => {
  const res = await axios.get(`${API_URL}/rewards?userId=${userId}`);
  return res.data;
};
