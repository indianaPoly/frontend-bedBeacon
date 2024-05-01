import { useNavigate } from 'react-router-dom';
import { HospitalDataProp } from '../types';

const List = ({
  name,
  emergencyGeneralWard,
  generalWard,
  distance,
  location,
  callNumber,
}: HospitalDataProp) => {
  const navigate = useNavigate();
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
    <article
      className=" cursor-pointer flex justify-between w-[340px] h-auto rounded-[16px] border border-[rgba(16, 17, 18, 0.10)] bg-white p-[15px] gap-[16px]"
      onClick={(e) => {
        e.preventDefault();
        navigate('/detail');
      }}
    >
      <div>
        <span className=" text-[14px] font-[600]">{name}</span>
        <div className="flex flex-col text-[12px] font-normal leading-[150%] text-[#8E9398]">
          <span>응급실일반병상: {emergencyGeneralWard}</span>
          <span>일반입원실: {generalWard}</span>
        </div>
        <div className="flex text-[12px] font-normal leading-[150%] text-[#8E9398] gap-[4px]">
          <span>{distance}km</span>
          <span> · </span>
          <span>{location}</span>
        </div>
        <button
          className="text-[12px] text-gray-600 font-semibold "
          type="button"
        >
          {callNumber}
        </button>
      </div>
      <div className=" bg-slate-400 w-[102px] h-auto rounded-[16px] flex justify-center items-center">
        <img alt="이미지 없음" />
      </div>
    </article>
  );
};

export default List;
