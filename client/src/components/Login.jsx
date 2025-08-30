import { Link, useNavigate } from "react-router-dom";
import houseLogo from "../assets/houseLogo.jpg";
import { useEffect, useState } from "react";
import axios from "axios";

const Login = ({ isAuth, setIsAuth }) => {
  const navigate = useNavigate();
  const [showMessage, setShowMessage]=useState(false);
  const [email, setemail] = useState("");

  console.log("login Email", email);
  const [users, setUsers] = useState([]);

  useEffect(() => {}, []);

  const handleLogin = async(email) => {
    console.log("login clicked");
   
      const userData = await axios.get(
        `${import.meta.env.VITE_NODE_SERVER}/users/${email}`
      );
      console.log("userData", userData);
   

 

    if (userData.data.users.length >= 1) {
      console.log("navigate to add-listings");
      sessionStorage.setItem("user", JSON.stringify(email))
      console.log("Storage: ", sessionStorage.getItem("user"))
      setIsAuth(sessionStorage.getItem("user"))
      // console.log("isAuth: ", isAuth)
      navigate("/add-listing"); // Navigate to add listing
    } else {
      setShowMessage(true)
    }
  };

  return (
    <>
      <div className="flex flex-col w-full mt-12 md:w-1/2 xl:w-2/5 2xl:w-2/5 3xl:w-1/3 mx-auto p-8 md:p-10 2xl:p-12 3xl:p-14 bg-[#ffffff] rounded-2xl shadow-xl">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src={houseLogo} className="h-8" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-red-700">
            Real E-State
          </span>
        </Link>
        <br />
        <div className="text-md font-semibold font-light text-[#6B7280] pb-8 ">
          Login for access to dashboard.
        </div>

        <form className="flex flex-col">
          <div className="pb-2">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-[#111827]"
            >
              Email
            </label>
            <div className="relative text-gray-400">
              <span className="absolute inset-y-0 left-0 flex items-center p-1 pl-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-mail"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
              </span>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setemail(e.target.value)}
                className="pl-12 mb-2 bg-gray-50 text-gray-600 border focus:border-transparent border-gray-300 sm:text-sm rounded-lg ring ring-transparent focus:ring-1 focus:outline-none focus:ring-gray-400 block w-full p-2.5 rounded-l-lg py-3 px-4"
                placeholder="name@company.com"
                autoComplete="off"
              />
            </div>
          </div>
          <div className="pb-6">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-[#111827]"
            >
              Password
            </label>
            <div className="relative text-gray-400">
              <span className="absolute inset-y-0 left-0 flex items-center p-1 pl-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-square-asterisk"
                >
                  <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                  <path d="M12 8v8"></path>
                  <path d="m8.5 14 7-4"></path>
                  <path d="m8.5 10 7 4"></path>
                </svg>
              </span>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••••"
                className="pl-12 mb-2 bg-gray-50 text-gray-600 border focus:border-transparent border-gray-300 sm:text-sm rounded-lg ring ring-transparent focus:ring-1 focus:outline-none focus:ring-gray-400 block w-full p-2.5 rounded-l-lg py-3 px-4"
                autoComplete="new-password"
              />
            </div>
          </div>
          {showMessage && 
          <div className="font-medium text-red-500  text-center">
         <p>Email or Password are incorrect</p> 
          <br/>
        </div>}
        
          <button
            type="button"
            className="w-full text-[#FFFFFF] bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-6"
            onClick={() => handleLogin(email)}
          >
            Login
          </button>
          <div className="text-sm font-light text-[#6B7280] text-center">
            Don't have an accout yet?
            <a
              onClick={() => navigate("/signup")}
              className="font-medium ml-2 text-red-600 hover:underline"
            >
              Sign Up
            </a>
          </div>
        </form>
      </div>
    </>
  );
};
export default Login;
