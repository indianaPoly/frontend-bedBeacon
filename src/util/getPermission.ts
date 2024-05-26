import saveLocationInformation from './saveLocationInformation';

const getPermission = async (): Promise<boolean> => {
  const { geolocation } = navigator;

  if (!geolocation) {
    throw new Error('GeoLocation is not Supported');
  }

  return new Promise((resolve) => {
    geolocation.getCurrentPosition(
      (pos) => {
        saveLocationInformation(pos);
        resolve(true);
      },
      () => {
        resolve(false);
      }
    );
  });
};

export default getPermission;
