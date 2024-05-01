import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Initial from './pages/Initial';
import Result from './pages/Result';
import getPermission from './util/getPermission';
import SelectCity from './pages/SelectCity';
import Detail from './pages/Detail';

const Router = () => {
  const [locationPermission, setLocationPermission] = useState<boolean | null>(
    null
  );

  useEffect(() => {
    getPermission().then((isPermission) => {
      setLocationPermission(isPermission);
    });
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Initial isPermission={locationPermission} />} />
      <Route path="/select" element={<SelectCity />} />
      <Route path="/result" element={<Result />} />
      <Route path="/detail" element={<Detail />} />
    </Routes>
  );
};

export default Router;
