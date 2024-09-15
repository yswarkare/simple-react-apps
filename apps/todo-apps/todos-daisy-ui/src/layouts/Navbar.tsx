import Header from "./Header";
import paths from '../routes/path';
import { HeaderItem } from "../models";
import { DotsIcon, MenuIcon } from "yw-daisyui";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const headers01: Array<HeaderItem> = [
  { label: 'Home', path: paths.home, isPublic: true },
];

const headers02: Array<HeaderItem> = [
  { label: 'Log In', path: paths.login, isPublic: true },
  { label: 'Sign Up', path: paths.signup, isPublic: true },
];

const Navbar = () => {
  const isLoggedIn = useSelector((state) => state?.user?.isLoggedIn);;

  const logout = () => {

  }
  return (
    <div className="navbar bg-base-100">
      <div className="flex-none">
        <button className="btn btn-square btn-ghost" title="menu" type="button">
          <MenuIcon />
        </button>
      </div>
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">daisyUI</a>
        <Header items={headers01} isLoggedIn={isLoggedIn} />
      </div>
      <div className="flex-none gap-2">
        {
          isLoggedIn ? (
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                <li><Link to={paths.profile} >Profile</Link></li>
                <li><Link to={paths.dashboard} >Dashboard</Link></li>
                <li><button onClick={() => logout()} type="button">Logout</button></li>
              </ul>
            </div>
          ) : (
            <>
              <Header items={headers02} isLoggedIn={isLoggedIn} />
              <button className="btn btn-square btn-ghost" title="options" type="button">
                <DotsIcon />
              </button>
            </>
          )
        }
      </div>
    </div>
  );
}

export default Navbar;
