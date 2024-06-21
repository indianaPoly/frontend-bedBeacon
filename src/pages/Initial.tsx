import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import saveOperatingSystemInformation from '../util/saveOperatingSystemInfomation';
import bedBeacon from '../assets/main/bedBeaconLogo.webp';
import PageViewTrigger from '../util/gtag';

const Initial = ({ isPermission }: { isPermission: boolean | null }) => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = '초기 페이지';
    PageViewTrigger();
  }, []);

  useEffect(() => {
    saveOperatingSystemInformation();
    if (isPermission === true) {
      navigate('/result');
    }
    if (isPermission === false) {
      navigate('/select');
    }
  }, [isPermission, navigate]);

  return (
    <div className="flex flex-col w-full justify-center items-center gap-[30px] mt-[40px]">
      <img
        className="w-[300px] h-[300px] rounded-xl"
        src={bedBeacon}
        alt="bedBeacon"
      />
      <div className="flex flex-col w-[340px] text-[18px] font-semibold justify-center items-center gap-[10px]">
        <span>허용하여 주변 병원을 확인하세요.</span>
        <span>거절시 지역 선택 페이지로 넘어가요.</span>
        <span className=" text-[15px] text-yellow-500 font-bold">
          해당 정보는 병원 검색 용도외에 절대 사용하지 않아요.
        </span>
      </div>
    </div>
  );
};

export default Initial;
