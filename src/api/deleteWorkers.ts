import axios from "axios";

export const deleteWorker = (workerId: number) => {
  return axios.delete(`${process.env.REACT_APP_API_URL}/api/workers/${workerId + 1}`);
}
