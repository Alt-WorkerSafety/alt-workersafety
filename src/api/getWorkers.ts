import axios from "axios";

export const getWorkers = () => {
return axios.get(`${process.env.REACT_APP_API_URL}/api/workers`);
}