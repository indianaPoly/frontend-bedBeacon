import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import List from '../components/List';
import distanceToFloor from '../util/distanceToFloor';

const Result = () => {
  const dummy = [
    {
      name: '고려대학교 구로병원',
      emergencyGeneralWard: 22,
      generalWard: 364,
      distance: 1300,
      location: '서울특별시 구로구 구로동로',
      callNumber: '02-2626-1114',
    },
    {
      name: '고려대학교 구로병원',
      emergencyGeneralWard: 22,
      generalWard: 364,
      distance: 7600,
      location: '서울특별시 구로구 구로동로',
      callNumber: '02-2626-1114',
    },
    {
      name: '고려대학교 구로병원',
      emergencyGeneralWard: 22,
      generalWard: 364,
      distance: 1331,
      location: '서울특별시 구로구 구로동로',
      callNumber: '02-2626-1114',
    },
    {
      name: '고려대학교 구로병원',
      emergencyGeneralWard: 22,
      generalWard: 364,
      distance: 500,
      location: '서울특별시 구로구 구로동로',
      callNumber: '02-2626-1114',
    },
    {
      name: '고려대학교 구로병원',
      emergencyGeneralWard: 22,
      generalWard: 364,
      distance: 100,
      location: '서울특별시 구로구 구로동로',
      callNumber: '02-2626-1114',
    },
  ];

  const location = '서울특별시 구로구';

  const navigate = useNavigate();

  useEffect(() => {
    if (
      sessionStorage.getItem('longitude') === null &&
      sessionStorage.getItem('latitude') === null
    ) {
      navigate('/');
    }
  }, [navigate]);

  return (
    <Layout>
      <div className="desktop:w-[900px] gap-[15px] flex flex-col">
        <div className=" w-full flex justify-center items-center gap-[3px]">
          <span className="text-[12px] font-bold text-orange-700">
            {location}
          </span>
          <span className="text-[12px] font-normal text-gray-500">
            주변의 대학병원을 알려드릴게요.
          </span>
        </div>
        <div className="grid place-items-center mobile:flex mobile:flex-col deskTop:grid deskTop:grid-cols-2 justify-center items-center gap-[20px]">
          {dummy.map((item) => (
            <List
              key={item.name}
              name={item.name}
              emergencyGeneralWard={item.emergencyGeneralWard}
              generalWard={item.generalWard}
              distance={distanceToFloor(item.distance)}
              location={item.location}
              callNumber={item.callNumber}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Result;
