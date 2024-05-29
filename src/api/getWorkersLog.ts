import axios from "axios";

export const getWorkersLog = () => {
    try {
        return axios.get(`${process.env.REACT_APP_API_URL}/api/workers/log`);
    } catch(error) {
        console.error(error);
    }
    
}
