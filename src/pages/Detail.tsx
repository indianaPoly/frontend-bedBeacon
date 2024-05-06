import { useState } from 'react';
import { useParams } from 'react-router-dom';
import demoImage from '../assets/demoHospitalImage.jpeg';
import Layout from '../components/Layout';
import DetailController from '../components/DetailController';

type Room = {
  roomName: string;
  availableRooms: number;
  roomImages: Array<string>;
};

interface DetailHospitalData {
  hospitalMainImage: string;
  hospitalName: string;
  hospitalDistance: number;
  hospitalLocation: string;
  hospitalNumber: string;
  hospitalLink: string;
  hospitalOpen: boolean;
  hospitalRoomData: Room[];
}

const Detail = () => {
  const dummyData: DetailHospitalData = {
    hospitalMainImage: demoImage,
    hospitalName: '서울 아산 병원',
    hospitalLocation: '서울특별시 송파구 올림픽로43길 88',
    hospitalDistance: 1.6,
    hospitalNumber: '02-123-1234',
    hospitalLink: 'https://www.amc.seoul.kr/asan/main.do',
    hospitalOpen: true,
    hospitalRoomData: [
      {
        roomName: '일반 병상',
        availableRooms: 49,
        roomImages: ['이미지1', '이미지2'],
      },
      {
        roomName: '응급 병상',
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

  const params = useParams();
  console.log(params.hospitalCode);

  const [roomName, setRoomName] = useState<string>();

  return (
    <Layout>
      <div className="flex flex-col gap-[40px]">
        <div className="flex justify-center gap-[100px]">
          <img
            alt="병원 대표 사진"
            src={dummyData.hospitalMainImage}
            className=" w-[230px] h-[230px] rounded-3xl border-[0.5px] border-[#4095BD]"
          />
          <div className="flex flex-col justify-evenly">
            <div className="flex flex-col gap-[5px]">
              <div className="flex gap-[5px]">
                <span className=" text-[20px] font-semibold">
                  {dummyData.hospitalName}
                </span>
                <span className="text-[15px] font-bold text-[#4095BD] block">
                  {dummyData.hospitalOpen ? '영업 중' : '영업 종료'}
                </span>
              </div>
              <div>
                <span className=" text-[15px] font-medium text-gray-400">
                  {dummyData.hospitalDistance}km | {dummyData.hospitalLocation}
                </span>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex flex-col gap-[5px]">
                <span className=" block text-[16px] font-bold">
                  병상 여석 정보 요약
                </span>
                <div className="flex flex-col gap-[5px]">
                  {dummyData.hospitalRoomData.map((value, idx) => {
                    if (value.availableRooms > 0 && idx < 2) {
                      return (
                        <span
                          key={value.roomName}
                          className=" text-[13px] block"
                        >
                          {value.roomName} : {value.availableRooms} 병상
                        </span>
                      );
                    }
                  })}
                </div>
              </div>
              <div className="flex flex-col gap-[10px]">
                <button
                  className="w-[80px] h-[30px] bg-[#4095BD] rounded-xl"
                  type="button"
                >
                  <a
                    href={`tel:${dummyData.hospitalNumber}`}
                    className=" block font-semibold text-[14px] text-white tracking-[-1%]"
                  >
                    전화하기
                  </a>
                </button>
                <button
                  className="w-[80px] h-[30px] bg-[#4095BD] rounded-xl"
                  type="button"
                  onClick={(event) => {
                    event.preventDefault();
                    window.open(dummyData.hospitalLink);
                  }}
                >
                  <span className=" block font-semibold text-[14px] text-white tracking-[-1%]">
                    홈페이지
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <hr className="w-full h-[1.25px] bg-transparent" />
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
      <DetailController />
    </Layout>
  );
};

export default Detail;
