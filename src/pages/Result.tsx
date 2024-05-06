import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import List from '../components/List';
import distanceToFloor from '../util/distanceToFloor';

const Result = () => {
  const dummy = [
    {
      id: 1,
      name: '고려대학교 구로병원',
      emergencyGeneralWard: 22,
      generalWard: 364,
      distance: 1300,
      location: '서울특별시 구로구 구로동로',
      callNumber: '02-2626-1114',
      hospitalCode: '1',
      image: '',
    },
    {
      id: 2,
      name: '고려대학교 구로병원',
      emergencyGeneralWard: 22,
      generalWard: 364,
      distance: 7600,
      location: '서울특별시 구로구 구로동로',
      callNumber: '02-2626-1114',
      hospitalCode: '2',
      image: '',
    },
    {
      id: 3,
      name: '고려대학교 구로병원',
      emergencyGeneralWard: 22,
      generalWard: 364,
      distance: 1331,
      location: '서울특별시 구로구 구로동로',
      callNumber: '02-2626-1114',
      hospitalCode: '3',
      image: '',
    },
    {
      id: 4,
      name: '고려대학교 구로병원',
      emergencyGeneralWard: 22,
      generalWard: 364,
      distance: 500,
      location: '서울특별시 구로구 구로동로',
      callNumber: '02-2626-1114',
      hospitalCode: '4',
      image: '',
    },
    {
      id: 5,
      name: '고려대학교 구로병원',
      emergencyGeneralWard: 22,
      generalWard: 364,
      distance: 100,
      location: '서울특별시 구로구 구로동로',
      callNumber: '02-2626-1114',
      hospitalCode: '5',
      image: '',
    },
  ];

  const [location, setLocation] = useState<string | null>();

  const navigate = useNavigate();

  useEffect(() => {
    if (
      sessionStorage.getItem('longitude') === null &&
      sessionStorage.getItem('latitude') === null
    ) {
      navigate('/select');
    }
  }, [navigate]);

  // 위도 경도 값에 따른 지역구 파악해야됨.
  useEffect(() => {
    if (
      sessionStorage.getItem('district') !== null &&
      sessionStorage.getItem('city') !== null
    ) {
      setLocation(
        `${sessionStorage.getItem('city') as string} ${sessionStorage.getItem(
          'district'
        )}`
      );
    }
  }, []);

  return (
    <Layout>
      <div className="desktop:w-[900px] gap-[15px] flex flex-col">
        <div className=" w-full flex justify-center items-center gap-[3px]">
          <span className="text-[12px] font-bold text-[#4095BD]">
            {location}
          </span>
          <span className="text-[12px] font-normal text-gray-500">
            주변의 대학병원을 알려드릴게요.
          </span>
        </div>
        <div className="grid place-items-center mobile:flex mobile:flex-col deskTop:grid deskTop:grid-cols-2 justify-center items-center gap-[20px]">
          {dummy.map((item) => (
            <List
              key={item.id}
              name={item.name}
              emergencyGeneralWard={item.emergencyGeneralWard}
              generalWard={item.generalWard}
              distance={distanceToFloor(item.distance)}
              location={item.location}
              callNumber={item.callNumber}
              hospitalCode={item.hospitalCode}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Result;
