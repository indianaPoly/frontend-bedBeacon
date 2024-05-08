const DetailController = ({ hospitalName }: { hospitalName: string }) => {
  return (
    <div className="gap-[10px] fixed flex flex-col items-center justify-around right-[20px] top-3/4 w-[80px] h-[150px] p-[10px] bg-[#4095BD] rounded-xl">
      <button type="button" className=" text-white text-[15px] font-medium">
        병상정보
      </button>
      <button type="button" className=" text-white text-[15px] font-medium">
        이미지
      </button>
      <button
        type="button"
        className=" text-white text-[15px] font-medium"
        onClick={(e) => {
          e.preventDefault();
          window.open(`https://map.naver.com/p/search/${hospitalName}`);
        }}
      >
        지도뷰어
      </button>
    </div>
  );
};

export default DetailController;
