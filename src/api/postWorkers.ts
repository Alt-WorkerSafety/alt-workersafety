import axios from 'axios';

interface WorkerInfo {
  name: string;
  birth: string;
  pn: string;
}

export const postWorkers = async (workers: WorkerInfo[]) => {
    try {
      const response = await axios.post('/api/workers', workers, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('POST Success: ', response.data);
      return response;
    } catch (error) {
      console.error(error);
    }
};