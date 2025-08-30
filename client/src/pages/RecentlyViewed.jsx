import { useNavigate } from "react-router-dom";

import Phone from "../components/Phone";
import axios from "axios"

import { useState, useEffect } from "react";

const RecentlyViewed = () => {

  const [houses, setHouses] = useState([
    {
      id: "",
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
    },
  ]);

  useEffect(() => {
    const getHouses = async () => {
      const houseData = await axios.get(
        `${import.meta.env.VITE_NODE_SERVER}/listings`
      );
      // console.log("houseData", houseData);
      setHouses(houseData.data.houses);
    };
    getHouses();
  }, []);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-row items-center">
        <div className="flex flex-row flex-wrap justify-between align-around mx-4 my-4 w-3/4">
          {houses.length > 1 &&
            houses.map((house, index) =>
              house.recentlyViewed === true ? (
                <div
                  key={index}
                  className="flex flex-col justify-center shadow-2xl mt-2 mx-4 rounded-2xl w-96 bg-[#ffffff] shadow-xl"
                >
                  <span className="absolute bg-red-600 w-26 text-xs text-white  text-sm rounded-xl px-4 py-1 -mt-80 ml-2">
                    {house.views}
                    <span> </span> views
                  </span>
                  <figure className="flex justify-center items-center rounded-2xl">
                    <img
                      src={
                        new URL(`../assets/${house.images[0]}`, import.meta.url)
                          .href
                      }
                      alt="Card Preview"
                      className=" rounded-t-2xl "
                    />
                  </figure>

                  <div className="flex flex-col p-2">
                    <div className="flex flex-row justify-between">
                      <p className="text-lg font-bold text-[#374151] ">
                        ${house.price}
                      </p>

                      <p className=" text-md text-[#374151]">
                        <span className="text-sm font-bold ">
                          {house.bedrooms}
                          <span> </span>
                        </span>
                        bds |
                        <span className="text-sm font-bold ">
                          <span> </span> {house.bathrooms}
                        </span>
                        <span> </span> ba |
                        <span className="text-sm font-bold ">
                          <span> </span> {house.sqftHouse}
                          <span> </span>
                        </span>
                        sqft
                      </p>
                    </div>

                    <div className="text-lg font-semibold  text-center text-[#374151] pt-2">
                      {house.address.street1}. {house.address.city}
                      <span> </span>
                      {house.address.state} {house.address.zipCode}
                    </div>

                    <div className="flex justify-end pt-2">
                    <button
                      className=" text-red-600 font-bold uppercase p-2 rounded-lg hover:scale-150 active:scale-95 transition-transform transform"
                      onClick={() => navigate(`/listings/${house.id}`)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="26"
                        height="26"
                        fill="currentColor"
                        className="bi bi-arrow-right"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                        />
                      </svg>
                    </button>
                    </div>
                  </div>
                </div>
              ) : null
            )}
        </div>
     
          <Phone />
        
      </div>
    </>
  );
};
export default RecentlyViewed;
