import { useState, useEffect, useRef } from 'react';

interface Hospital {
  name: string;
  district: string;
  price: {
    [roomType: string]: string | { [age: string]: string };
  };
}

const HospitalList = () => {
  const [costInfo, setCostInfo] = useState<Hospital | null>(null);
  const [hospitals, setHospitals] = useState<Hospital[]>([]);
  const costInfoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch('/hospitals.json')
      .then((response) => response.json())
      .then((data) => {
        setHospitals(data.hospitals);
      })
      .catch(() => {
        return null;
      });
  }, []);

  const handleButtonClick = (hospitalName: string) => {
    const selectedHospital = hospitals.find(
      (hospital) => hospital.name === hospitalName
    );
    if (selectedHospital) {
      setCostInfo(selectedHospital);
    } else {
      setCostInfo(null);
    }
  };

  useEffect(() => {
    if (costInfoRef.current) {
      costInfoRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }, [costInfo]);

  return (
    <div>
      <div
        className="bg-white border border-gray-300 rounded-3xl shadow-lg p-4 overflow-y-auto scrollbar-hide"
        style={{ maxHeight: '300px' }}
      >
        <h2 className="text-lg font-semibold mb-2">병원 리스트</h2>
        <div className="flex flex-col mb-4">
          {hospitals.map((hospital) => (
            <button
              key={hospital.name}
              className="text-white font-semibold text-[15px] px-4 py-2 rounded mb-2"
              style={{ backgroundColor: '#4095BD' }}
              onClick={() => handleButtonClick(hospital.name)}
              type="button"
            >
              {hospital.name}
            </button>
          ))}
        </div>
      </div>

      {costInfo && (
        <div>
          <div
            ref={costInfoRef}
            className="bg-white border border-gray-300 rounded-3xl shadow-lg p-6 mt-10 overflow-y-auto space-y-6"
          >
            <div>
              <h3 className="text-xl font-semibold mb-4">
                {costInfo.name} 가격 정보
              </h3>
              <ul className="space-y-4">
                {Object.entries(costInfo.price).map(([roomType, prices]) => (
                  <li key={roomType} className="border-b pb-2">
                    <h4 className="text-lg font-medium mb-2">{roomType}</h4>
                    {typeof prices === 'string' ? (
                      <p className="pl-4">{prices}</p>
                    ) : (
                      <ul className="pl-4 space-y-2">
                        {Object.entries(prices).map(([age, price]) => (
                          <li key={age} className="flex justify-between">
                            <span>{age}</span>
                            <span>{price}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HospitalList;
