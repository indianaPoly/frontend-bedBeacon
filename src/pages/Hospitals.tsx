import Layout from '../components/Layout';
import List from '../components/List';
import distanceToFloor from '../util/distanceToFloor';

const Hospitals = () => {
  const dummy = [
    {
      name: '고려대학교 구로병원',
      emergencyGeneralWard: 22,
      generalWard: 364,
      distance: 1300,
      location: '서울특별시 구로구 구로동로',
      callNumber: '02-2626-1114',
      hospitalCode: '1',
      image: '',
    },
    {
      name: '고려대학교 구로병원',
      emergencyGeneralWard: 22,
      generalWard: 364,
      distance: 7600,
      location: '서울특별시 구로구 구로동로',
      callNumber: '02-2626-1114',
      hospitalCode: '2',
      image: '',
    },
    {
      name: '고려대학교 구로병원',
      emergencyGeneralWard: 22,
      generalWard: 364,
      distance: 1331,
      location: '서울특별시 구로구 구로동로',
      callNumber: '02-2626-1114',
      hospitalCode: '3',
      image: '',
    },
    {
      name: '고려대학교 구로병원',
      emergencyGeneralWard: 22,
      generalWard: 364,
      distance: 500,
      location: '서울특별시 구로구 구로동로',
      callNumber: '02-2626-1114',
      hospitalCode: '4',
      image: '',
    },
    {
      name: '고려대학교 구로병원',
      emergencyGeneralWard: 22,
      generalWard: 364,
      distance: 100,
      location: '서울특별시 구로구 구로동로',
      callNumber: '02-2626-1114',
      hospitalCode: '5',
      image: '',
    },
  ];
  return (
    <Layout>
      <div className=" grid grid-cols-2 gap-[20px]">
        {dummy.map((item) => (
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
            pageType="hospitals"
          />
        ))}
      </div>
    </Layout>
  );
};

export default Hospitals;
