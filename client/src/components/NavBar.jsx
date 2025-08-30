import { Link, useNavigate } from "react-router-dom";
import houseLogo from "../assets/houseLogo.jpg";

const NavBar = ({ setSearch, isAuth, setIsAuth }) => {
  const navigate = useNavigate();


  const handleLogout =()=>{
     setIsAuth(false)
     sessionStorage.clear()
     navigate("/")
  }
  return (
    <>
      <nav className="bg-white border-b-4 border-slate-600  dark:bg-white-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={houseLogo} className="h-8" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-red-600">
              Real E-State
            </span>
          </Link>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-white-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className="hidden bg-white w-full md:block md:w-auto"
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-white rounded-lg bg-white md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-white  ">
              <li>
                <Link
                  to="/"
                  className="block py-2 px-3 text-red-600  text-xl rounded md:bg-transparent md:text-red-600 md:p-0 dark:text-red-600 md:dark:text-red-500 hover:scale-105 hover:font-semibold"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <button
                  onClick={() => {
                    setSearch("");
                    navigate("/listings");
                  }}
                  className="block py-2 px-3 text-red-600 text-xl bg-white rounded md:bg-transparent md:text-red-600 md:p-0 dark:text-red-600 md:dark:text-red-500 hover:scale-105 hover:font-semibold"
                  aria-current="page"
                >
                  All Listings
                </button>
              </li>
              <li>
                <Link
                  to="/popular-listings"
                  className="block py-2 px-3 text-xl text-red-600 rounded md:bg-transparent md:text-red-600 md:p-0 dark:text-red-600 md:dark:text-red-500 hover:scale-105 hover:font-semibold"
                  aria-current="page"
                >
                  Popular
                </Link>
              </li>
              {!isAuth ? (
                <li>
                  <button onClick={() => navigate("/login")} className="block py-2 px-3 text-xl text-slate-500 rounded md:bg-transparent hover:scale-105 hover:font-semibold md:text-slate-500 md:p-0 dark:text-slate-500 md:dark:text-slate-500 hover:scale-105 hover:font-semibold">
                    Realtor SignIn
                  </button>
                </li>
              ) : (
                <>
                  <li>
                    <Link
                      to="/add-listing"
                      className="block py-2 px-3 text-xl text-slate-600 rounded md:bg-transparent md:text-red-600 md:p-0 dark:text-red-600 md:dark:text-slate-600 hover:scale-105 hover:font-semibold"
                      aria-current="page"
                    >
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <button onClick={() => handleLogout()}  className="block py-2 px-3 text-xl text-slate-00 rounded md:bg-transparent hover:scale-105 hover:font-semibold md:text-slate-600 md:p-0 dark:text-slate-600 md:dark:text-slate-600">
                      Logout
                    </button>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
