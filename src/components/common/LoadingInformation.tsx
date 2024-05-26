import loadingInformationData from '../../data/loadingInformtaionData';
import loadingInformationImageLoader from '../../util/loadingInformationImageLoader';

const LoadingInformation = () => {
  const randomNumber = Math.floor(Math.random() * 5);

  return (
    <div className="flex flex-col items-center justify-center gap-[25px] w-[300px] h-auto">
      <div className="w-auto h-auto flex flex-col items-center justify-center">
        <span className=" font-extrabold text-[17px]">TIP!</span>
        <span className=" font-bold text-[16px] text-[#4095BD]">
          {'<'}
          {loadingInformationData[randomNumber].emerTip}
          {'>'}
        </span>
      </div>

      <img
        className="w-[300px] h-[250px] rounded-xl block"
        src={loadingInformationImageLoader(randomNumber) as string}
        alt="정보 사진"
      />

      <div className="flex flex-col items-start justify-center gap-[10px]">
        {loadingInformationData[randomNumber].step.map((item) => {
          return (
            <span key={item} className="font-semibold text-[15px]">
              {item}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default LoadingInformation;
