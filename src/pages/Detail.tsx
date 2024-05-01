import { useState } from 'react';
import demoImage from '../assets/demoHospitalImage.jpeg';
import Layout from '../components/Layout';

type Room = {
  roomName: string;
  availableRooms: number;
  roomImages: Array<string>;
};

interface DetailHospitalData {
  hospitalMainImage: string;
  hospitalName: string;
  hospitalLocation: string;
  hospitalNumber: string;
  hospitalLink: string;
  hospitalRoomData: Room[];
}

const Detail = () => {
  const dummyData: DetailHospitalData = {
    hospitalMainImage: demoImage,
    hospitalName: '서울 아산 병원',
    hospitalLocation: '서울특별시 송파구 올림픽로43길 88',
    hospitalNumber: '02-xxx-xxxx',
    hospitalLink: 'https://www.amc.seoul.kr/asan/main.do',
    hospitalRoomData: [
      {
        roomName: '병상1',
        availableRooms: 49,
        roomImages: ['이미지1', '이미지2'],
      },
      {
        roomName: '병상2',
        availableRooms: 30,
        roomImages: ['이미지1', '이미지2'],
      },
      {
        roomName: '병상3',
        availableRooms: -1,
        roomImages: ['이미지1', '이미지2'],
      },
      {
        roomName: '병상4',
        availableRooms: 0,
        roomImages: ['이미지1', '이미지2'],
      },
    ],
  };

  const [roomName, setRoomName] = useState<string>();

  return (
    <Layout>
      <div className="flex flex-col gap-[40px]">
        <div className="flex justify-center gap-[100px]">
          <img
            alt="병원 대표 사진"
            src={dummyData.hospitalMainImage}
            className=" w-[300px] h-[300px] rounded-3xl"
          />
          <div className=" flex-col">
            <span className=" text-[20px] font-semibold">
              {dummyData.hospitalName}
            </span>
            <span className=" text-[15px] font-medium text-gray-400 block">
              {dummyData.hospitalLocation}
            </span>
            <div className="flex gap-[10px] mt-[20px]">
              <button
                className="w-[90px] h-[50px] bg-[#4095BD] rounded-xl"
                type="button"
                onClick={(event) => {
                  event.preventDefault();
                  alert(dummyData.hospitalNumber);
                }}
              >
                <span className=" block font-semibold text-[15px] text-white tracking-[-1%]">
                  전화하기
                </span>
              </button>
              <button
                className="w-[90px] h-[50px] bg-[#4095BD] rounded-xl"
                type="button"
                onClick={(event) => {
                  event.preventDefault();
                  window.open(dummyData.hospitalLink);
                }}
              >
                <span className=" block font-semibold text-[15px] text-white tracking-[-1%]">
                  홈페이지
                </span>
              </button>
            </div>
            <div className="flex flex-col mt-[30px] gap-[5px]">
              <span className=" block text-[15px] font-semibold">
                병상 여석 정보
              </span>
              <div className="flex flex-col gap-[3px]">
                {dummyData.hospitalRoomData.map((value) => {
                  if (value.availableRooms > 0) {
                    return (
                      <span key={value.roomName} className=" block">
                        {value.roomName} : {value.availableRooms}병상
                      </span>
                    );
                  }
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center gap-[20px]">
          <ul className="flex w-full justify-between list-none">
            {dummyData.hospitalRoomData.map((value) => {
              return (
                <button
                  key={value.roomName}
                  onClick={(event) => {
                    event.preventDefault();
                    setRoomName(value.roomName);
                  }}
                  type="button"
                >
                  {value.roomName}
                </button>
              );
            })}
          </ul>
          <div className=" flex justify-center">
            {roomName === undefined ? (
              <div>병상을 클릭해보세요.</div>
            ) : (
              <div>{roomName}에 대한 정보입니다.</div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Detail;
