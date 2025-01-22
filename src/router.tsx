import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Initial from './pages/Initial';
import Result from './pages/Result';
import getPermission from './util/getPermission';
import SelectionLocation from './pages/SelectionLocation';

const Router = () => {
  const [locationPermission, setLocationPermission] = useState<boolean | null>(
    null
  );

  useEffect(() => {
    getPermission()
      .then((isPermission) => {
        setLocationPermission(isPermission);
      })
      .catch(() => {
        setLocationPermission(false);
      });
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Initial isPermission={locationPermission} />} />
      <Route path="/select" element={<SelectionLocation />} />
      <Route path="/result" element={<Result />} />
    </Routes>
  );
};

export default Router;
