const DetailController = () => {
  return (
    <div className="gap-[10px] fixed flex flex-col items-center justify-around right-[20px] top-1/3 w-[80px] h-[150px] p-[10px] bg-[#4095BD] rounded-xl">
      <button type="button" className=" text-white text-[15px] font-medium">
        병상정보
      </button>
      <button type="button" className=" text-white text-[15px] font-medium">
        이미지
      </button>
      <button type="button" className=" text-white text-[15px] font-medium">
        지도뷰어
      </button>
    </div>
  );
};

export default DetailController;
