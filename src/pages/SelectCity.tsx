import { useState } from 'react';
import districtsByCity from '../data/districtsByCity';

const SelectCity = () => {
  const [city, setCity] = useState<string>();
  const [district, setDistrict] = useState<string>();

  const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCity = event.target.value;
    setCity(selectedCity);
  };

  const handleDistrictChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    if (city !== undefined) {
      const selectedDistrict = event.target.value;
      setDistrict(selectedDistrict);
    } else {
      setDistrict(undefined);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (city !== undefined && district !== undefined) {
      localStorage.setItem('selectedCity', city);
      localStorage.setItem('selectDistrict', district);
    }
    // localstorage로 이동하는 단계
  };

  return (
    <div className="container mx-auto mt-8">
      <form
        onSubmit={handleSubmit}
        className="max-x-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <select
            id="city"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-done focus:shadow-outline"
            value={city}
            onChange={handleCityChange}
          >
            <option value="">시를 선택하세요</option>
            <option value="0">서울특별시</option>
            <option value="1">경기도</option>
            <option value="2">인천광역시</option>
          </select>
        </div>
        <div className="mb-6">
          <select
            id="district"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-done focus:shadow-outline"
            value={district}
            onChange={handleDistrictChange}
          >
            <option value="">구/시를 선택하세요</option>
            {city &&
              districtsByCity[0].seoul.map((item) => (
                <option key={item.cityName} value={item.cityName}>
                  {item.cityName}
                </option>
              ))}
          </select>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            저장
          </button>
        </div>
      </form>
    </div>
  );
};

export default SelectCity;
