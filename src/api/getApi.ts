import { hospitalDataClient, hospitalImageClient } from './axiosClient';

export const getHospitalDataAPI = {
  getHospitals: () => {
    const response = hospitalDataClient.get('');
    return response;
  },
  getHospital: () => {
    const response = hospitalDataClient.get('');
    return response;
  },
};

export const getHospitalImageAPI = {
  getHospitalsImage: () => {
    const response = hospitalImageClient.get('');
    return response;
  },
  getHospitalImage: () => {
    const response = hospitalImageClient.get('');
    return response;
  },
};
