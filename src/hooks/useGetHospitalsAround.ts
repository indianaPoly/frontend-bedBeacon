import { useQuery } from '@tanstack/react-query';
import getHospitalsAround from '../api/product/getHospitalsAround';
import getLocationName from '../api/public/getLocationName';

const useGetHospitalsAround = (latitude: string, longitude: string) => {
  return useQuery({
    queryKey: ['getHospitalsAround', latitude, longitude],
    // eslint-disable-next-line consistent-return
    queryFn: async () => {
      try {
        const hospitalAruondResponse = await getHospitalsAround(
          latitude,
          longitude
        );
        const getLoc = await getLocationName(latitude, longitude);
        return {
          hospitalAruondResponse,
          getLocation: getLoc,
        };
      } catch (e) {
        return null;
      }
    },
  });
};

export default useGetHospitalsAround;
