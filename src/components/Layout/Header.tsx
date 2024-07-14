import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import menuIcon from '../../assets/icons/ic_list_line.svg';
import MainLogo from '../../assets/main/bedBeaconLogo.webp';
import SideBar from './SideBar';

const Header = () => {
  const navigate = useNavigate();
  const [onClickMenu, setOnClickMenu] = useState(false);

  return (
    <header className="flex w-full justify-center items-center">
      <div className="flex w-[901px] min-w-[350px] justify-between px-[25px] py-[20px] ">
        <button
          className="flex items-center gap-[10px]"
          type="button"
          onClick={(e) => {
            e.preventDefault();
            navigate('/result');
          }}
        >
          <img
            src={MainLogo}
            alt="메인로고"
            className="w-[25px] h-[25px] rounded-xl"
          />
          <span className=" text-[18px] font-bold text-yellow-500">병상콕</span>
        </button>
        <button
          type="button"
          onClick={() => {
            setOnClickMenu(!onClickMenu);
          }}
        >
          <img src={menuIcon} alt="햄버거 메뉴" />
        </button>
      </div>
      {onClickMenu && (
        <SideBar onClickMenu={onClickMenu} setOnClickMenu={setOnClickMenu} />
      )}
    </header>
  );
};

export default Header;
