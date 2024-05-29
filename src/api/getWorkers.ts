import axios from "axios";

export const getWorkers = () => {
    try {
        return axios.get(`${process.env.REACT_APP_API_URL}/api/workers`);
    } catch(error) {
        console.error(error);
    }
    
}
