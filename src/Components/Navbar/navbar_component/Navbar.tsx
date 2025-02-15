/* eslint-disable react/react-in-jsx-scope */
import { useSelector, useDispatch } from 'react-redux';
import { BsChevronDoubleDown } from 'react-icons/bs';
import MenuIcon from '../../../Icons/MenuIcon';
import NavbarDesktop from '../navbar_desktop_component/NavbarDesktop';
import NavBarMobile from '../navbar_mobile_component/NavBarMobile';
import { setShowMenu, setShowMobileMenu } from '../../../Redux/NavBarReducer';

function Navbar() {
  const { showMenu } = useSelector((state: any) => state.NavbarRed);
  const { enlargeNavBar } = useSelector((state: any) => state.NavbarRed);
  const { showMobileMenu } = useSelector((state: any) => state.NavbarRed);
  const dispatch = useDispatch();
  return (
    <div
      className={`w-full ${
        enlargeNavBar ? 'h-[120px]' : 'h-[50px]'
      }  bg-[#34495E] flex flex-row justify-between pl-1 pr-4 transition-height duration-500 ease-in-out relative`}
    >
      {/* left side */}
      <div className="flex flex-row justify-start items-center w-full h-[50px]">
        <button
          type="button"
          className="text-white py-3 w-[180px] h-[50px] text-xl text-center font-bold flex flex-row justify-center items-center gap-2 max-md:hover:cursor-pointer"
          onClick={() => dispatch(setShowMobileMenu())}
        >
          <h1 data-testid="name">Linked List</h1>
          <div
            className={`hidden max-md:flex duration-300 ${
              showMobileMenu ? 'rotate-180' : ''
            }`}
          >
            <BsChevronDoubleDown />
          </div>
        </button>
        <NavbarDesktop enlargeNavBar={enlargeNavBar} />
      </div>
      <NavBarMobile showMobileMenu={showMobileMenu} />
      {/* Right Side */}
      <button
        aria-label="Toggle Menu"
        type="button"
        className="hover:scale-125 duration-100 h-[50px] w-fit flex justify-center mr-5 items-center"
        onClick={() => dispatch(setShowMenu())}
      >
        <MenuIcon size={20} showMenu={showMenu} color="#FF0000" />
      </button>
    </div>
  );
}

export default Navbar;

// 1ABC9C
