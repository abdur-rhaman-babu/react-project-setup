import { NavLink } from "react-router-dom";


const Header = () => {
    return (
        <div className="navbar bg-base-100 shadow-lg fixed z-10 top-0 lg:px-40">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><NavLink to = '/'>Homepage</NavLink></li>
              <li><NavLink to = '/port'>Portfolio</NavLink></li>
              <li><NavLink to = '/about'>About</NavLink></li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <a className="btn btn-ghost text-xl">Quick Job</a>
        </div>
        <div className="navbar-end">

            <div className="indicator bg-[#f2f2f2] px-4 py-2 font-semibold rounded">
                <NavLink to = '/applied'>Applied Job</NavLink>
            </div>
          
        </div>
      </div>
    );
};

export default Header;