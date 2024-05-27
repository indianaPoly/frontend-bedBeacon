import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import useGetHospitals from '../hooks/useGetHospitals';
import imageLoader from '../util/imageLoader';
import Loading from './common/Loading';
import Layout from '../components/Layout/Layout';
import List from '../components/List/List';
import ErrorPage from './common/ErrorPage';
import PageViewTrigger from '../util/gtag';

const Hospitals = () => {
  const { data, isLoading, isError } = useGetHospitals(
    sessionStorage.getItem('latitude') as string,
    sessionStorage.getItem('longitude') as string
  );

  useEffect(() => {
    document.title = '병원 전체 페이지';
    PageViewTrigger();
  }, []);

  return (
    <Layout>
      {isError && <ErrorPage />}
      {isLoading && <Loading />}
      {data && (
        <div className="grid place-items-center mobile:flex mobile:flex-col deskTop:grid deskTop:grid-cols-2 justify-center items-center gap-[20px]">
          {data.result.hospitalList.map((item) => (
            <Link to={`/result/${item.hpid}`} key={item.hpid}>
              <List
                key={item.hpid}
                name={item.dutyName}
                emergencyGeneralWard={item.hvec > 0 ? item.hvec : 0}
                generalWard={item.hvgc}
                distance={item.distance}
                location={item.dutyAddr}
                callNumber={item.dutyTel1}
                hospitalCode={item.hpid}
                image={imageLoader(item.hpid)}
              />
            </Link>
          ))}
        </div>
      )}
    </Layout>
  );
};

export default Hospitals;
