import React from 'react';

interface InitialChatbotProps {
  onButtonClick: (buttonText: string) => void;
}

const InitialChatbot: React.FC<InitialChatbotProps> = ({ onButtonClick }) => {
  return (
    <div
      className="bg-white border border-gray-300 rounded-3xl shadow-lg p-4"
      style={{ backgroundColor: '#F2F2F2' }}
    >
      <div className="mb-4 text-left">
        <p className="text-lg font-semibold">어떤 것을 도와드릴까요?</p>
      </div>
      <div className="flex flex-col mb-4">
        <button
          className="text-white font-semibold text-[15px] px-4 py-2 rounded mb-2"
          style={{ backgroundColor: '#4095BD' }}
          onClick={() => onButtonClick('Button 1')}
          type="button"
        >
          건강 정보를 검색하고 싶어
        </button>
        <button
          className="text-white font-semibold text-[15px] px-4 py-2 rounded mb-2"
          style={{ backgroundColor: '#0C3046' }}
          onClick={() => onButtonClick('Button 2')}
          type="button"
        >
          각 병원의 입원실 가격에 대해 알고 싶어
        </button>
        <button
          className="text-white font-semibold text-[15px] px-4 py-2 rounded mb-2 bg-sky-300"
          onClick={() => onButtonClick('Button 3')}
          type="button"
        >
          내 병에 대해 상담 받고 싶어
        </button>
      </div>
    </div>
  );
};

export default InitialChatbot;
