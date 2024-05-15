import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import List from '../components/List';
import distanceToFloor from '../util/distanceToFloor';
import imageLoader from '../util/imageLoader';
import chatbotIcon from '../assets/chatbot/chatbot.png';
import Chatbot from '../components/chatbot/Chatbot';

const Result = () => {
  const [location, setLocation] = useState<string | null>();
  const [showChatbot, setShowChatbot] = useState(false);

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

  const dummy = [
    {
      name: '고려대학교 구로병원',
      emergencyGeneralWard: 22,
      generalWard: 364,
      distance: 1300,
      location: '서울특별시 구로구 구로동로',
      callNumber: '02-2626-1114',
      hospitalCode: 'A1100009',
    },
    {
      name: '고려대학교 구로병원',
      emergencyGeneralWard: 22,
      generalWard: 364,
      distance: 7600,
      location: '서울특별시 구로구 구로동로',
      callNumber: '02-2626-1114',
      hospitalCode: 'A1100014',
    },
    {
      name: '고려대학교 구로병원',
      emergencyGeneralWard: 22,
      generalWard: 364,
      distance: 1331,
      location: '서울특별시 구로구 구로동로',
      callNumber: '02-2626-1114',
      hospitalCode: 'A1100014',
    },
    {
      name: '고려대학교 구로병원',
      emergencyGeneralWard: 22,
      generalWard: 364,
      distance: 500,
      location: '서울특별시 구로구 구로동로',
      callNumber: '02-2626-1114',
      hospitalCode: 'A1100014',
    },
    {
      name: '고려대학교 구로병원',
      emergencyGeneralWard: 22,
      generalWard: 364,
      distance: 100,
      location: '서울특별시 구로구 구로동로',
      callNumber: '02-2626-1114',
      hospitalCode: 'A1100014',
    },
  ];

  const modifyDummy = dummy.map((item) => ({
    ...item,
    image: imageLoader(item.hospitalCode),
  }));

  const onClickChatbot = () => {
    setShowChatbot((prevState) => !prevState);
  };

  return (
    <Layout>
      <div className="desktop:w-[900px] gap-[15px] flex flex-col relative">
        <button
          className="fixed bottom-4 right-4 w-12 h-12 flex justify-center items-center rounded-full cursor-pointer"
          onClick={onClickChatbot}
          type="button"
        >
          <img
            src={chatbotIcon}
            alt="Chatbot Icon"
            className="w-full h-full icon-click-animation"
          />
        </button>

        {showChatbot && (
          <div className="fixed bottom-20 right-4 bg-white w-64 h-15 border border-gray-300 rounded-md shadow-md p-4">
            <Chatbot />
          </div>
        )}
      </div>
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
          {modifyDummy.map((item) => (
            <List
              key={item.hospitalCode}
              name={item.name}
              emergencyGeneralWard={item.emergencyGeneralWard}
              generalWard={item.generalWard}
              distance={distanceToFloor(item.distance)}
              location={item.location}
              callNumber={item.callNumber}
              hospitalCode={item.hospitalCode}
              image={item.image}
              pageType="result"
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Result;
