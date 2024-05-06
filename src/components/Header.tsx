import { useNavigate } from 'react-router-dom';
import menuIcon from '../assets/icons/ic_list_line.svg';

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="flex w-full justify-center items-center">
      <div className="flex w-[901px] min-w-[350px] justify-between px-[25px] py-[20px] ">
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            navigate('/result');
          }}
        >
          <span className=" text-[18px] font-bold text-[#4095BD]">
            Bed Beacon
          </span>
        </button>
        <img src={menuIcon} alt="햄버거 메뉴" />
      </div>
    </header>
  );
};

export default Header;
