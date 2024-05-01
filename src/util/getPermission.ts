import saveLocationInformation from './saveLocationInformation';

const getPermission = () => {
  return new Promise<boolean>((resolve, reject) => {
    const { geolocation } = navigator;
    if (geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          saveLocationInformation(position);
          resolve(true);
        },
        () => {
          resolve(false);
        }
      );
    } else {
      reject(new Error('Geolocation is not supported'));
    }
  });
};

export default getPermission;
