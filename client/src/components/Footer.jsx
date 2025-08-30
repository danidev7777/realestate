import { Link ,useNavigate} from "react-router-dom";
import houseLogo from "../assets/houseLogo.jpg";

const Footer = ({ isAuth }) => {
  const navigate = useNavigate();

  return (
    <>
      <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800 mt-64">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={houseLogo} className="h-8" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-red-600">
              Real E-State
            </span>
          </Link>
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <Link to="/" className="hover:underline">
              Real E-State™
            </Link>
            . All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <Link
                to="/"
                className="block py-2 px-3 text-red-600  text-xl rounded md:bg-transparent md:text-red-600 md:p-0 dark:text-red-600 md:dark:text-red-500 hover:underline me-4 md:me-6"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/listings"
                className=" block py-2 px-3 text-red-600  text-xl rounded md:bg-transparent md:text-red-600 md:p-0 dark:text-red-600 md:dark:text-red-500 hover:underline me-4 md:me-6"
              >
                All Listings
              </Link>
            </li>
            <li>
              <Link
                to="/popular-listings"
                className="hover:underline me-4 md:me-6 block py-2 px-3 text-red-600  text-xl rounded md:bg-transparent md:text-red-600 md:p-0 dark:text-red-600 md:dark:text-red-500"
              >
                Popular
              </Link>
            </li>
            {!isAuth ? (
              <li>
                <button
                  onClick={() => navigate("/login")}
                  className="block py-2 px-3 text-xl text-slate-500 rounded md:bg-transparent hover:scale-105 md:text-slate-500 md:p-0 dark:text-slate-500 md:dark:text-slate-500"
                >
                  Realtor SignIn
                </button>
              </li>
            ) : (
              <>
                <li>
                  <Link
                    to="/add-listing"
                    className="block py-2 px-3 text-xl text-slate-500 rounded md:bg-transparent md:text-red-600 md:p-0 dark:text-red-600 md:dark:text-slate-500"
                    aria-current="page"
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <button
                    onClick={() => handleLogout()}
                    className="block py-2 px-3 ml-2 text-xl text-slate-500 rounded md:bg-transparent hover:scale-105 md:text-slate-500 md:p-0 dark:text-slate-500 md:dark:text-slate-500"
                  >
                    Logout
                  </button>
                </li>
              </>
            )}
          </ul>
          <div className="flex bg-red-600 rounded-full p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="20"
              fill="white"
              className="bi bi-arrow-up font-bold"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5"
              />
            </svg>
            <div
              className="text-white"
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  left: 0,
                  behavior: "smooth",
                })
              }
            >
              Top
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
