import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import saveOperatingSystemInformation from '../util/saveOperatingSystemInfomation';

const Initial = ({ isPermission }: { isPermission: boolean | null }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (isPermission === true) {
      navigate('/result');
    }
    if (isPermission === false) {
      navigate('/select');
    }
  }, [isPermission, navigate]);

  useEffect(() => {
    saveOperatingSystemInformation();
  });

  return (
    <div>
      <span className=" text-[200px]">초기 화면임</span>
    </div>
  );
};

export default Initial;
