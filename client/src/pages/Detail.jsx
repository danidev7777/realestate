import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Carousel from "../components/Carousel.jsx";
import DetailCalculator from "../components/DetailCalculator.jsx";
import ContactMe from "../components/ContactMe.jsx";
import Drawer from "../components/Drawer.jsx"
const Detail = ({ isAuth, setIsAuth, tagCards }) => {
  const { houseId } = useParams();
  // console.log("houseId: ", houseId);
  const [showCalculator, setshowCalculator] = useState(false);
  const [showContact, setshowContact] = useState(true);

  const [house, setHouse] = useState({
    address: { street1: "", city: "", state: "", zipCode: 0 },
    tags: [],
    images: [],
    price: "",
    bedrooms: 0,
    bathrooms: 0,
    sqftHouse: 0,
    sqftLot: 0,
    garage: 0,
    yearBuilt: 0,
    listingAgent: { firstName: "", lastName: "", phone: "", brokerage: "" },
    views: 0,
    recentlyViewed: true,
  });

  useEffect(() => {
    console.log("working");
    const getHouse = async () => {
      const houseData = await axios.get(
        `${import.meta.env.VITE_NODE_SERVER}/listings/${houseId}`
      );
      setHouse(houseData.data[0]);
    };
    getHouse();
  }, []);

  // Below turns the house price to a Number
  const dollar = house.price.replace(",", "");
  const housePrice = parseInt(dollar);
  const sqftPrice = (housePrice / house.sqftHouse).toFixed();

  // SHARE BUTTON: Below is the function to copy the details link
  const [showPopUp, setShowPopUp] = useState(false);
  const url = window.location.href;
  console.log("Details URL: ", url);
  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(url)
      .then(() => {
        console.log("Text copied to clipboard");

        setShowPopUp(!showPopUp);
      })
      .catch((err) => {
        console.error("Could not copy text: ", err);
      });
    console.log(showPopUp);
    console.log("URL: ", url);
  };

  return (
    <>
      <div className="flex flex-row  w-full mb-8 -mt-4">
        <div className="mt-20">
          <Carousel
            images={house.images}
            tags={house.tags}
            city={house.address.city}
            tagCards={tagCards}
          />
          <div className=" flex flex-row  justify-between mx-56 mt-2 w-3/4 ">
            <div>
              <span className="bg-red-600 text-sm text-white  rounded-xl px-4 py-1 mx-2">
                {house.tags[2]}
              </span>{" "}
              <span className="bg-red-600 text-sm text-white  rounded-xl px-4 py-1 mx-2">
                {" "}
                {house.tags[0]}
              </span>{" "}
              <span className="bg-red-600 text-sm text-white rounded-xl px-4 py-1 mx-2">
                {house.tags[1]}
              </span>{" "}
            </div>

            <div className=" mx-8 text-md text-[#374151]">
              <span className="text-sm font-bold ">{house.bedrooms}</span> Bds |
              <span className="text-sm font-bold "> {house.bathrooms}</span> Ba
              |<span className="text-sm font-bold "> {house.garage}</span> Ga |
              <span className="text-sm font-bold "> {house.sqftHouse} </span>
              House sqft |
              <span className="text-sm font-bold "> {house.sqftLot} </span> Lot
              sqft
            </div>
          </div>

          <div className=" flex flex-row items-center justify-between mx-56 mt-4 w-3/4 mr-4">
            <p className="text-2xl mx-4 font-bold text-[#374151] ">
              ${house.price}
            </p>
            {showPopUp == true ? (
              <div className="flex items-center border border-red-600  p-2 rounded-2xl mr-8 mr-4">
                <span
                  onClick={() => setShowPopUp(false)}
                  className=" flex items-center text-center  p-2 rounded-2xl mr-20 text-black w-30 text-sm px-2 py-2 float-right"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="size-6"
                  >
                    <path d="M7.493 18.5c-.425 0-.82-.236-.975-.632A7.48 7.48 0 0 1 6 15.125c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75A.75.75 0 0 1 15 2a2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23h-.777ZM2.331 10.727a11.969 11.969 0 0 0-.831 4.398 12 12 0 0 0 .52 3.507C2.28 19.482 3.105 20 3.994 20H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 0 1-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227Z" />
                  </svg>
                 <span className="ml-2"> The link has been added to the clipboard</span>
                </span>
              </div>
            ) : (
              <div
                onClick={copyToClipboard}
                className="flex items-center border border-red-600 p-2 rounded-2xl mr-8"
              >
                <svg
                  class="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="red"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="red"
                    stroke-linecap="round"
                    stroke-width="2"
                    d="M7.926 10.898 15 7.727m-7.074 5.39L15 16.29M8 12a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm12 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm0-11a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
                  />
                </svg>
                <div className="border-l border-red-600 ml-1 pl-2">
                  {" "}
                  <span> </span>Share
                </div>
              </div>
            )}
          </div>
          <div
            key={house.id}
            className="flex flex-col justify-center text-center  mx-56 w-3/4 py-5 rounded-b-2xl  bg-[#ffffff] shadow-xl"
          >
            <div className="flex p-4 ">
              <div className="flex flex-row w-full justify-evenly">
                <div className="flex flex-col">
                  <div className="flex justify-between ">
                    <div className="flex">
                      <svg
                        className="w-[29px] h-[29px] text-gray-800 dark:text-red-600 mr-2 mt-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8.4 6.763c-.251.1-.383.196-.422.235L6.564 5.584l2.737-2.737c1.113-1.113 3.053-1.097 4.337.187l1.159 1.159a1 1 0 0 1 1.39.022l4.105 4.105a1 1 0 0 1 .023 1.39l1.345 1.346a1 1 0 0 1 0 1.415l-2.052 2.052a1 1 0 0 1-1.414 0l-1.346-1.346a1 1 0 0 1-1.323.039L11.29 8.983a1 1 0 0 1 .04-1.324l-.849-.848c-.18-.18-.606-.322-1.258-.25a3.271 3.271 0 0 0-.824.202Zm1.519 3.675L3.828 16.53a1 1 0 0 0 0 1.414l2.736 2.737a1 1 0 0 0 1.414 0l6.091-6.091-4.15-4.15Z" />
                      </svg>{" "}
                      <div>
                        <p className="text-sm -mb-4 font-semibold ">
                          {house.yearBuilt}
                        </p>
                        <br />
                        <p className="text-xs"> Year built </p>
                      </div>
                    </div>
                    <div className="flex mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-rulers dark:text-red-600 mr-2 mt-2"
                        viewBox="0 0 16 16"
                      >
                        <path d="M1 0a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h5v-1H2v-1h4v-1H4v-1h2v-1H2v-1h4V9H4V8h2V7H2V6h4V2h1v4h1V4h1v2h1V2h1v4h1V4h1v2h1V2h1v4h1V1a1 1 0 0 0-1-1z" />
                      </svg>

                      <div>
                        <p className="text-sm -mb-4 font-semibold ">
                          ${sqftPrice}
                        </p>
                        <br />
                        <p className="text-xs">Per sqft</p>
                      </div>
                    </div>
                  </div>
                  <br />
                  <div className="flex justify-between ">
                    <div className="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        className="bi bi-car-front dark:text-red-600 mr-2 mt-2"
                        viewBox="0 0 16 16"
                      >
                        <path d="M4 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0m10 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0M6 8a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2zM4.862 4.276 3.906 6.19a.51.51 0 0 0 .497.731c.91-.073 2.35-.17 3.597-.17s2.688.097 3.597.17a.51.51 0 0 0 .497-.731l-.956-1.913A.5.5 0 0 0 10.691 4H5.309a.5.5 0 0 0-.447.276" />
                        <path d="M2.52 3.515A2.5 2.5 0 0 1 4.82 2h6.362c1 0 1.904.596 2.298 1.515l.792 1.848c.075.175.21.319.38.404.5.25.855.715.965 1.262l.335 1.679q.05.242.049.49v.413c0 .814-.39 1.543-1 1.997V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.338c-1.292.048-2.745.088-4 .088s-2.708-.04-4-.088V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.892c-.61-.454-1-1.183-1-1.997v-.413a2.5 2.5 0 0 1 .049-.49l.335-1.68c.11-.546.465-1.012.964-1.261a.8.8 0 0 0 .381-.404l.792-1.848ZM4.82 3a1.5 1.5 0 0 0-1.379.91l-.792 1.847a1.8 1.8 0 0 1-.853.904.8.8 0 0 0-.43.564L1.03 8.904a1.5 1.5 0 0 0-.03.294v.413c0 .796.62 1.448 1.408 1.484 1.555.07 3.786.155 5.592.155s4.037-.084 5.592-.155A1.48 1.48 0 0 0 15 9.611v-.413q0-.148-.03-.294l-.335-1.68a.8.8 0 0 0-.43-.563 1.8 1.8 0 0 1-.853-.904l-.792-1.848A1.5 1.5 0 0 0 11.18 3z" />
                      </svg>{" "}
                      <div>
                        <p className="text-ms -mb-4 font-semibold ">
                          {house.garage} Cars
                        </p>
                        <br />
                        <p className="text-xs">Garage</p>
                      </div>
                    </div>

                    <div className="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="red"
                        className="bi bi-house dark:text-red-600 mr-2 mt-2 "
                        viewBox="0 0 16 16"
                      >
                        <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z" />
                      </svg>
                      <div>
                        <p className="text-sm -mb-4 font-semibold ">
                          Single Family
                        </p>
                        <br />
                        <p className="text-xs">Property Type</p>
                      </div>
                    </div>
                  </div>
                  <br />
                  <div className="flex flex-row items-center px-2 rounded-xl shadow-md border m-auto p-2">
                    <div className="flex items-center">
                      <img
                        src={
                          new URL(
                            `../assets/${house.listingAgent.gender}`,
                            import.meta.url
                          ).href
                        }
                        className="size-20 rounded-2xl mr-2"
                      />

                      <div className="flex flex-col">
                        <strong>
                          {house.listingAgent.firstName}{" "}
                          {house.listingAgent.lastName}
                        </strong>
                        <span>{house.listingAgent.brokerage}</span>
                        Direct: 602-{house.listingAgent.phone}
                      </div>
                    </div>
                  </div>

                  <button
                    className="w-38 mt-2 text-red-600  hover:scale-105 hover:outline-none focus:ring-red-600 font-medium rounded-lg text-lg px-5 py-2 text-center m-auto transition ease-in-out delay-150 text-red-600hover:-translate-y-1 hover:scale-110 hover:text-slate-600 hover:text-white duration-300 ..."
                    onClick={() => setshowContact(!showContact)}
                  >
                    Contact an Agent Now!
                  </button>
                  {house.listingAgent.logo != "" ? (
                    <img
                      src={
                        new URL(
                          `../assets/logos/${house.listingAgent.logo}`,
                          import.meta.url
                        ).href
                      }
                      className="w-22 m-auto rounded-2xl"
                    />
                  ) : (
                    <img
                      src={
                        new URL(`../assets/logos/tru.jpg`, import.meta.url).href
                      }
                      className="w-22 m-auto rounded-2xl"
                    />
                  )}
                </div>

                <div className="text-lg font-semibold  text-center text-[#374151] px-4 mx-4">
                  {house.address.street1}. {house.address.city} <span> </span>
                  {house.address.state} <span> </span>
                  {house.address.zipCode}
                  {house.listingAgent.brokerage === "Truth Realty" ? (
                    <img
                      src={new URL(`../assets/map2.jpg`, import.meta.url).href}
                      className="rounded-2xl shadow-xl mt-4 m-auto"
                    />
                  ) : house.listingAgent.brokerage != "" ? (
                    <img
                      src={new URL(`../assets/map2.jpg`, import.meta.url).href}
                      className="rounded-2xl shadow-xl mt-4 m-auto"
                    />
                  ) : null}
                  <button
                    type="button"
                    onClick={() => setshowCalculator(!showCalculator)}
                    className="w-38 mt-2 text-[#FFFFFF] bg-red-600 focus:ring-1 focus:outline-none hover:scale-105 focus:ring-red-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center m-auto"
                  >
                    Mortgage Calculator
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {showCalculator && (
          <DetailCalculator
            house={house}
            setshowCalculator={setshowCalculator}
          />
        )}
        {showContact && (
          <ContactMe setshowContact={setshowContact} house={house} />
        )}
      </div>
     
    </>
  );
};
export default Detail;
