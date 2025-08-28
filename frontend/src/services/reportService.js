import axios from "axios";

const API_URL = "http://localhost:5000/api";

export const fetchAllReports = async () => {
  const res = await axios.get(`${API_URL}/reports`);
  return res.data;
};
