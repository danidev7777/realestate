import { Link, useNavigate } from "react-router-dom";
import houseLogo from "../assets/houseLogo.jpg";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";


const ContactMe = ({ house, setshowContact }) => {
  const navigate=useNavigate()
  console.log("house: ", house, `${house.listingAgent.firstName} ${house.listingAgent.lastName}`)
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [messageForm, setMessageForm] = useState({
    realtor: "",
    property: "",
    message: "",
    buyerEmail: "",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
 
  const handleSubmitMessage = async (e) => {
    e.preventDefault();
    console.log("submit clicked");
    const messageObject = {
      realtor: `${house.listingAgent.firstName} ${house.listingAgent.lastName}`,
      property: `${house.address.street1} ${house.address.city} ${house.address.state} ${house.address.zipCode}`,
      message: messageForm.message,
      buyerEmail: messageForm.buyerEmail,
    };
    console.log("messageObject", messageObject);
    const addMessage = await axios.post(
      `${import.meta.env.VITE_NODE_SERVER}/messages`,
      messageObject
    );
    if (addMessage.data.success === true) {
      console.log("addMessage: ",addMessage);

      toast.success("You message has been sent to the realtor");
      setShowConfirmation(true);
      setMessageForm([ addMessage.data.message]);

      // setMessageForm({});
      setshowContact(false);
      navigate("/"); // Navigate back to home
    }
  };

  
  return (
    <>
      <div className="flex flex-col items-center shadow-2xl rounded-2xl mt-20 mx-8  w-1/4 py-4">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src={houseLogo} className="h-8" alt="Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-red-700">
            Real E-State
          </span>
        </Link>

        <div className="text-sm font-light text-[#6B7280] py-4 ">
          Send a message to the Realtor
        </div>
        {showConfirmation && (
          <div className="text-sm font-light text-red-600 py-4 ">
            You message has been sent to the realtor
          </div>
        )}
        <form className="flex flex-col  w-full px-4">
          <div className="pb-2">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-[#111827]"
            >
              Realtor
            </label>
            <div className="relative text-gray-400">
              <span className="absolute inset-y-0 left-0 flex items-center p-1 pl-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  fill="teal"
                  className="bi bi-person-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.708l.547.548 1.17-1.951a.5.5 0 1 1 .858.514M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
                  <path d="M8.256 14a4.5 4.5 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10q.39 0 .74.025c.226-.341.496-.65.804-.918Q8.844 9.002 8 9c-5 0-6 3-6 4s1 1 1 1z" />
                </svg>
              </span>
              <input
                type="text"
                name="realtor"
                value={`${house.listingAgent.firstName} ${house.listingAgent.lastName}`}
                className=" pl-12 mb-2 bg-gray-50 text-gray-600 font-semibold border disabled:border-slate-600 focus:border-transparent border-gray-300 sm:text-sm rounded-lg ring ring-transparent focus:ring-1 focus:outline-none focus:ring-gray-400 block w-full p-2.5 rounded-l-lg py-3 px-4"
                placeholder="name@company.com"
                autoComplete="off"
                disabled
              />
            </div>
          </div>

          <div className="pb-6">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-[#111827]"
            >
              Property
            </label>
            <div className="relative text-gray-400">
              <span className="absolute inset-y-0 left-0 flex items-center p-1 pl-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  fill="red"
                  className="bi bi-house-up"
                  viewBox="0 0 16 16"
                >
                  <path d="M7.293 1.5a1 1 0 0 1 1.414 0L11 3.793V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v3.293l2.354 2.353a.5.5 0 0 1-.708.708L8 2.207l-5 5V13.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 2 13.5V8.207l-.646.647a.5.5 0 1 1-.708-.708z" />
                  <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.354-5.854 1.5 1.5a.5.5 0 0 1-.708.708L13 11.707V14.5a.5.5 0 1 1-1 0v-2.793l-.646.647a.5.5 0 0 1-.708-.707l1.5-1.5a.5.5 0 0 1 .708 0Z" />
                </svg>
              </span>
              <input
                type="text"
                name="property"
                value={`${house.address.street1}. ${house.address.city} ${house.address.state} ${house.address.zipCode}`}
                placeholder="••••••••••"
                className="pl-12 mb-2 bg-gray-50 text-gray-600 font-semibold border disabled:border-slate-600 focus:border-transparent border-gray-300 sm:text-sm rounded-lg ring ring-transparent focus:ring-1 focus:outline-none focus:ring-gray-400 block w-full p-2.5 rounded-l-lg py-3 px-4"
                autoComplete="off"
                disabled
              />
            </div>
          </div>
          <div className="pb-6">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-[#111827]"
            >
              Message
            </label>
            <div className="relative text-gray-400">
              <span className="absolute inset-y-0 left-0 flex items-center p-1 pl-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="gold"
                  className="bi bi-pencil"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325" />
                </svg>
              </span>
              <textarea
                type="text"
                name="property"
                value={messageForm.message}
                onChange={(e) =>
                  setMessageForm({ ...messageForm, message: e.target.value })
                }
                className="pl-12 mb-2 bg-gray-50 text-gray-600 border focus:border-transparent border-gray-300 sm:text-sm rounded-lg ring ring-transparent focus:ring-1 focus:outline-none focus:ring-gray-400 block w-full p-2.5 rounded-l-lg py-3 px-4"
              ></textarea>
            </div>
          </div>
          <div className="pb-2">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-[#111827]"
            >
              Your Email
            </label>
            <div className="relative text-gray-400">
              <span className="absolute inset-y-0 left-0 flex items-center p-1 pl-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  fill="blue"
                  className="bi bi-envelope-at"
                  viewBox="0 0 16 16"
                >
                  <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2zm3.708 6.208L1 11.105V5.383zM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2z" />
                  <path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648m-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z" />
                </svg>
              </span>
              <input
                type="text"
                name="email"
                value={messageForm.buyerEmail}
                onChange={(e) => setMessageForm({...messageForm, buyerEmail: e.target.value })}
                className="pl-12 mb-2 bg-gray-50 text-gray-600 border focus:border-transparent border-gray-300 sm:text-sm rounded-lg ring ring-transparent focus:ring-1 focus:outline-none focus:ring-gray-400 block w-full p-2.5 rounded-l-lg py-3 px-4"
                autoComplete="off"
              />
            </div>
          </div>
          <button
            type="button"
            className="w-full w-38 text-[#FFFFFF] bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center m-auto"
            onClick={handleSubmitMessage}
          >
            Send Message
          </button>
        </form>
      </div>
    </>
  );
};
export default ContactMe;
