import { Suspense, useState } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../components/Layout';
import { DetailHospitalDataProp, Room } from '../types';
import imageLoader from '../util/imageLoader';
import RoomList from '../components/RoomList';
import FeasibleList from '../components/FeasibleList';
import useGetEmerMedAvailable from '../hooks/useGetEmerMedAvailable';
import surgeryName from '../util/surgeryName';

type Item = {
  [key: string]: string;
};

const HospitalRoom = ({
  hospitalRoomData,
}: {
  hospitalRoomData: Array<Room>;
}) => {
  return (
    <div className=" grid mobile:grid-cols-1 grid-cols-2 flex-col gap-[10px]">
      {hospitalRoomData.map((item) => {
        return (
          <RoomList
            key={item.roomName}
            name={item.roomName}
            availableNumber={item.availableRooms}
          />
        );
      })}
    </div>
  );
};

const MedicalFeasibility = ({
  medicalFeasibilityIndex,
}: {
  medicalFeasibilityIndex: Item;
}) => {
  const result = Object.keys(medicalFeasibilityIndex)
    .filter((key) => key.startsWith('MKioskTy') && !key.includes('Msg')) // "MKioskTy"로 시작하는 키만 필터링
    .map((key) => ({
      surgeryCode: key,
      feasible: medicalFeasibilityIndex[key].trim() === 'Y',
    }));

  return (
    <div className="grid mobile:grid-cols-1 grid-cols-2 flex-col gap-[10px]">
      {result.map((item) => {
        return (
          <FeasibleList
            key={item.surgeryCode}
            name={surgeryName(item.surgeryCode)}
            feasible={item.feasible}
          />
        );
      })}
    </div>
  );
};

const Detail = () => {
  const params = useParams();

  const [hospitalDataType, setHospitalDataType] = useState<
    'hospitalRoom' | 'medicalFeasibilityIndex'
  >('hospitalRoom');

  // 해당 데이터 가져오는 쿼리 작성
  const dummyData: DetailHospitalDataProp = {
    name: '서울 아산 병원',
    location: '서울특별시 송파구 올림픽로43길 88',
    distance: 1.6,
    callNumber: '02-123-1234',
    hospitalLink: 'https://www.amc.seoul.kr/asan/main.do',
    hospitalOpen: true,
    hospitalCode: params.hospitalCode as string,
    hospitalRoomData: [
      {
        roomName: '일반 병상',
        availableRooms: 49,
      },
      {
        roomName: '응급 병상',
        availableRooms: 30,
      },
      {
        roomName: '병상3',
        availableRooms: -1,
      },
      {
        roomName: '병상4',
        availableRooms: 0,
      },
    ],
  };

  const { data } = useGetEmerMedAvailable(dummyData.hospitalCode);

  return (
    <Layout>
      <div className="flex flex-col gap-[20px] mobile:mt-[25px]">
        <div className="flex mobile:flex-col mobile:items-center justify-center deskTop:gap-[100px] mobile:gap-[30px]">
          <img
            alt="병원 대표 사진"
            src={imageLoader(dummyData.hospitalCode)}
            className=" w-[230px] h-[230px] mobile:w-[250px] mobile:h-[250px] rounded-3xl border-[0.5px] border-[#4095BD]"
          />
          <div className="flex flex-col justify-evenly">
            <div className="flex flex-col gap-[5px]">
              <div className="flex gap-[5px]">
                <span className=" text-[20px] font-semibold">
                  {dummyData.name}
                </span>
                <span className="text-[15px] font-bold text-[#4095BD] block">
                  {dummyData.hospitalOpen ? '영업 중' : '영업 종료'}
                </span>
              </div>
              <div>
                <span className=" text-[15px] font-medium text-gray-400">
                  {dummyData.distance}km | {dummyData.location}
                </span>
              </div>
            </div>

            <div className="flex mobile:mt-[20px] justify-between items-center">
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
                    href={`tel:${dummyData.callNumber}`}
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
          <ul className="flex w-full list-none justify-evenly mobile:flex-col">
            <button
              onClick={(event) => {
                event.preventDefault();
                setHospitalDataType('hospitalRoom');
              }}
              type="button"
              className={`text-[16px] font-bold ${
                hospitalDataType === 'hospitalRoom' && 'text-[#4095BD]'
              }`}
            >
              실시간 병상 정보 확인하기
            </button>
            <button
              onClick={(event) => {
                event.preventDefault();
                setHospitalDataType('medicalFeasibilityIndex');
              }}
              type="button"
              className={`text-[16px] font-bold ${
                hospitalDataType === 'medicalFeasibilityIndex' &&
                'text-[#4095BD]'
              }`}
            >
              중증질환자 수용가능 여부
            </button>
          </ul>
          <div className=" flex justify-center">
            {hospitalDataType === 'hospitalRoom' && (
              <HospitalRoom hospitalRoomData={dummyData.hospitalRoomData} />
            )}
            {hospitalDataType === 'medicalFeasibilityIndex' && data && (
              <Suspense>
                <MedicalFeasibility medicalFeasibilityIndex={data[0]} />
              </Suspense>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Detail;
