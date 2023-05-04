import React, { useContext, useState } from "react";
import { Link, NavLink, useNavigate, useNavigation } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Navbar = () => {
  const [showName, setShowName] = useState(false);
  const {user, logOut} = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
    .then(result => console.log(result))
    .catch(error => console.log(error))
  }

  // {showName ? <p className="font-semibold text-lg text-primary">{user?.displayName}</p> : <img className="rounded-full w-10" src={user?.photoURL} />}

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/">Home</Link>
              </li> 
              <li>
                <Link to= "/blog">Blog</Link>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case lg:text-3xl text-2xl font-bold">Chef Choice</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink className={({isActive}) => isActive ? "active text-white" : ""} to="/">Home</NavLink>
            </li>
            <li>
              <NavLink className={({isActive}) => isActive ? "active text-white" : ""} to="/blog">Blog</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div>
            {user && <div onMouseEnter={() => setShowName(true)} onMouseLeave={() => setShowName(false)} className=" mr-3 dropdown dropdown-hover dropdown-bottom dropdown-end">
              <img className="rounded-full w-10" tabIndex={0} src={user?.photoURL} />
              <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                <li><p className="font-semibold text-lg text-primary">{user?.displayName}</p></li>
                <li><button onClick={handleLogOut} className="btn btn-primary text-white">Logout</button></li>
              </ul>
        </div>}
          </div>
          <div>
            {user ? "" : <Link to="/login" className="btn btn-primary text-white">Login</Link>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
