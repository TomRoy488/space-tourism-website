import { NavLink } from "react-router-dom";
import { logo, iconHamburger, iconClose } from "../assets";
import { navLinks } from "../constants";
function NavBar() {
  return (
    <nav className="flex justify-center items-center w-full  px-6 text-white relative ">
      <div className="w-full sm:max-w-screen-xl flex justify-between item-center">
        <div className="logo w-[48px] aspect-[1] ">
          <img src={logo} alt="logo" className="object-contain w-full h-full" />
        </div>
        <div className="w-[60%] absolute top-0 right-0 h-[100vh] p-5 bg-white bg-opacity-[.4] backdrop-blur-2xl">
          <div className="close-icon w-full flex justify-end">
            <div className="close-icon-img-holder">
              <img src={iconClose} alt="close icon" />
            </div>
          </div>
          <ul
            className="flex flex-col sm:flex-row
           justify-start items-start gap-[1rem] mt-[3rem]"
          >
            {navLinks.map((item, i) => (
              <li key={item.label} className="barlow-condensed">
                <span className="font-bold mr-2.5">{"0" + (i + 1)}</span>
                <NavLink to={item.href} className="font-normal">
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
