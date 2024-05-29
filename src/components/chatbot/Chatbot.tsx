import { useState, ChangeEvent, useEffect, useRef } from 'react';
import chatbotClient from '../../api/client/chatbotClient';
import InitialChatbot from './InitalChatbot';
import HospitalList from './HospitalList';
import loadingIcon from '../../assets/chatbot/chatbotLoading.png';
import potalImg from '../../assets/chatbot/potal.png';

const Chatbot = () => {
  const [inputMessage, setInputMessage] = useState<string>('');
  const [sentMessage, setSentMessage] = useState<string>('');
  const [showButtons, setShowButtons] = useState<boolean>(true);
  const [showButtons2, setShowButtons2] = useState<boolean>(false);
  const [userComment1, setUserComment1] = useState<boolean>(false);
  const [userComment2, setUserComment2] = useState<boolean>(false);
  const [userComment3, setUserComment3] = useState<boolean>(false);
  const [showURL, setShowURL] = useState<boolean>(false);
  const [showHospitalList, setShowHospitalList] = useState<boolean>(false);
  const [startConsult, setStartConsult] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [question, setQuestion] = useState<boolean>(false);
  const [loading2, setLoading2] = useState<boolean>(false);
  const [responses, setResponses] = useState<string[]>([]);
  const [disable, setDisable] = useState(true);
  const showHospitalListRef = useRef<HTMLDivElement>(null);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputMessage(e.target.value);
  };

  const clearResponses = () => {
    setResponses([]);
    setUserComment1(false);
    setUserComment2(false);
    setUserComment3(false);
    setShowURL(false);
    setShowHospitalList(false);
    setStartConsult(false);
    setQuestion(false);
    setLoading2(false);
  };

  const handleButtonClick = (buttonText: string) => {
    clearResponses();
    setShowButtons(false);
    if (buttonText === 'Button 1') {
      setUserComment1(true);
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setShowURL(true);
        setDisable(true);
      }, 2000);
    } else if (buttonText === 'Button 2') {
      setUserComment2(true);
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setShowHospitalList(true);
        setDisable(true);
      }, 2000);
    } else if (buttonText === 'Button 3') {
      setUserComment3(true);
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setStartConsult(true);
        setDisable(false);
      }, 2000);
    }
  };

  const handleButtonClick2 = (buttonText: string) => {
    clearResponses();
    setShowButtons2(false);
    setDisable(true);
    if (buttonText === 'Button 1') {
      setUserComment1(true);
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setShowURL(true);
      }, 2000);
    } else if (buttonText === 'Button 2') {
      setUserComment2(true);
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setShowHospitalList(true);
      }, 2000);
    } else if (buttonText === 'Button 3') {
      setUserComment3(true);
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setStartConsult(true);
        setDisable(false);
      }, 2000);
    }
  };

  const handleSend = async () => {
    if (inputMessage.trim() === '' || disable) return;
    setLoading2(true);
    setQuestion(true);
    setSentMessage(inputMessage);
    setInputMessage('');

    try {
      const encodedMessage = encodeURIComponent(inputMessage.trim());
      const response = await chatbotClient.get(`chatbot/${encodedMessage}`);
      const data = await response.data;
      setResponses((prevResponses) => [...prevResponses, data.response]);
    } catch (error) {
      setResponses((prevResponses) => [
        ...prevResponses,
        'Error fetching response. Please try again later.',
      ]);
    } finally {
      setLoading2(false);
      setShowButtons2(true);
      setDisable(true);
    }
  };

  useEffect(() => {
    if (showHospitalListRef.current) {
      setTimeout(() => {
        showHospitalListRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }, 50);
    }
  }, [showHospitalList]);

  return (
    <div className="fixed bottom-20 right-4 bg-white w-[350px] h-[550px] border border-gray-300 rounded-3xl shadow-md p-4 overflow-y-auto scrollbar-hide space-y-8">
      {showButtons && <InitialChatbot onButtonClick={handleButtonClick} />}
      {userComment1 && (
        <div className="text-white flex items-center justify-center ml-auto w-[160px] h-auto px-3 py-2 font-semibold text-[12.5px] bg-blue-600 border border-gray-300 rounded-2xl shadow-lg animate-bounce">
          <div>건강 정보를 검색하고 싶어</div>
        </div>
      )}

      {userComment2 && (
        <div className="text-white flex items-center justify-center ml-auto w-[220px] h-auto px-3 py-2 font-semibold text-[12.5px] bg-blue-600 border border-gray-300 rounded-2xl shadow-lg animate-bounce">
          <div>각 병원의 입원실 가격에 대해 알고 싶어</div>
        </div>
      )}

      {userComment3 && (
        <div className="text-white flex items-center justify-center ml-auto w-[200px] h-auto px-3 py-2 font-semibold text-[12.5px] bg-blue-600 border border-gray-300 rounded-2xl shadow-lg animate-bounce">
          <div>내 병 증상에 관하여 상담 받고 싶어</div>
        </div>
      )}

      {loading && (
        <div className="text-white font-semibold text-[13px] bg-neutral-200 border rounded-3xl shadow-lg p-4 py-2 mr-44 flex items-center">
          <span>Loading...</span>
          <img
            src={loadingIcon}
            alt="Loading Icon"
            className="w-5 h-5 animate-spin ml-7"
          />
        </div>
      )}

      {showURL && (
        <>
          <div className="text-white text-left flex items-center justify-center font-semibold text-[13px] w-[250px] h-auto bg-sky-400 border px-3 py-2 border-gray-300 rounded-2xl shadow-lg mr-auto">
            <div>
              건강 정보에 대해 검색할 수 있는 사이트를 <br />
              알려드릴게요!
            </div>
          </div>
          <div className="max-w-sm border flex flex-col justify-center items-center rounded-lg shadow-md bg-slate-100">
            <img className="rounded-t-lg" src={potalImg} alt="질병관리청" />
            <div className="p-5">
              <a
                href="https://health.kdca.go.kr/healthinfo/openapi/svcNew/healthSearchListApi.do?TOKEN=18f573d88e93"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800"
              >
                링크로 이동하기
                <svg
                  className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
          <InitialChatbot onButtonClick={handleButtonClick2} />
        </>
      )}

      {showHospitalList && (
        <>
          <div className="text-white flex items-center justify-start text-left font-semibold w-[210px] h-auto px-3 py-2 text-[13px] bg-sky-400 border border-gray-300 rounded-2xl shadow-lg">
            <div>병원의 입원실 가격을 알려드릴게요!</div>
          </div>
          <div ref={showHospitalListRef}>
            <HospitalList />
          </div>
          <InitialChatbot onButtonClick={handleButtonClick2} />
        </>
      )}

      {startConsult && (
        <div className="text-white items-center justify-start flex font-semibold text-[13px] w-[230px] h-auto px-3 py-2 bg-sky-400 border border-gray-300 rounded-2xl shadow-lg">
          <div>
            병 증상에 관하여 상담 받고 싶으시군요! <br /> 아래에 채팅을
            입력해주세요.
          </div>
        </div>
      )}

      <div className="flex flex-col">
        {question && (
          <div>
            <div className="text-white font-semibold text-[13px] bg-blue-500 border border-gray-300 rounded-3xl shadow-lg p-4 py-2 ml-32 animate-bounce max-w-[230px] float-right">
              {sentMessage}
            </div>
          </div>
        )}

        {loading2 && (
          <div className="flex flex-col items-end mr-44 mt-4">
            <div className="text-white font-semibold text-[13px] bg-neutral-200 border rounded-3xl shadow-lg p-4 py-2 flex items-center mt-2 w-fit">
              <span>Loading...</span>
              <img
                src={loadingIcon}
                alt="Loading Icon"
                className="w-5 h-5 animate-spin ml-7"
              />
            </div>
          </div>
        )}
      </div>

      {responses.length > 0 &&
        responses.map((response) => (
          <div
            key={response}
            className="text-white font-semibold text-[13px] bg-sky-400 border border-gray-300 rounded-3xl shadow-lg p-4 py-2 mr-32 inline-block max-w-[230px]"
          >
            {response}
          </div>
        ))}

      {showButtons2 && !loading && !loading2 && (
        <InitialChatbot onButtonClick={handleButtonClick2} />
      )}

      {!disable && (
        <div className="flex mb-8 fixed bottom-5 right-20 ">
          <input
            type="text"
            value={inputMessage}
            onChange={handleInputChange}
            placeholder="채팅을 입력하세요."
            className="flex-1 pl-4 py-2 pr-20 border border-gray-300 rounded-full focus:outline-none focus:border-blue-500"
          />
          <button
            onClick={handleSend}
            className="absolute top-0 right-0 mt-2 mr-3 text-blue-500 hover:text-blue-700 focus:outline-none"
            type="button"
          >
            보내기
          </button>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
