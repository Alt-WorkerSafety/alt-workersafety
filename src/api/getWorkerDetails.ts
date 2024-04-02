import axios from "axios";

export const getWorkerDetails = (id: number) => {
    return axios.get(`${process.env.REACT_APP_API_URL}/api/workers/${id}`);
}