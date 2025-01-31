import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout/Layout';

const Result = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = '주변 병원 페이지';
  }, []);

  useEffect(() => {
    if (
      sessionStorage.getItem('longitude') === null &&
      sessionStorage.getItem('latitude') === null
    ) {
      navigate('/select');
    }
  }, [navigate]);

  const location = `${sessionStorage.getItem('city')} ${sessionStorage.getItem(
    'district'
  )}`;

  return (
    <Layout>
      <div className="desktop:w-[900px] gap-[15px] flex flex-col items-center">
        <div className=" w-full flex justify-center items-center gap-[3px]">
        </div>
      </div>
    </Layout>
  );
};

export default Result;
