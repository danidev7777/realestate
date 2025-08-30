
import Phone from "../components/Phone";

import { useNavigate} from "react-router-dom";
import { useState, useEffect } from "react";

const RecentlySold = ({ houses }) => {
  // const { link } = useParams();
  const navigate = useNavigate();
  console.log("houses", houses);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <> 
    <div className="flex flex-row items-center justify-evenly">
      <div  className="mt-20 mx-10">
        <div className="flex flex-row flex-wrap justify-center  mx-4 my-4 ">
          {houses.length > 1 &&
            houses.map((house, index) => house.tags[2]=="Recently Sold"?(
              <div
                key={index}
                className="flex flex-col justify-center shadow-2xl mt-6 mx-4 rounded-2xl w-96 bg-[#ffffff] shadow-xl"
              >
                 <span className="absolute bg-red-600 w-32 text-xs text-white  text-sm rounded-xl px-4 py-1 -mt-96 -my-4 ml-2">
              {" "}
              {house.tags[2]}
            </span>{" "}
                <img
                  src={
                    new URL(`../assets/${house.images[0]}`, import.meta.url)
                      .href
                  }
                  alt="Card Preview"
                  className=" w-full h-3/4 rounded-t-2xl -mt-3"
                />

                <div className="flex flex-col p-2">
                  <div className="flex flex-row justify-between">
                    <p className="text-lg font-bold text-[#374151] ">
                      ${house.price}
                    </p>

                    <p className=" text-md text-[#374151]">
                      <span className="text-sm font-bold ">
                         {house.bedrooms}
                      </span>
                      bds |<span> </span>
                      <span className="text-sm font-bold ">
                         {house.bathrooms}
                      </span> 
                      ba | <span> </span>
                      <span className="text-sm font-bold ">
                        {house.sqftHouse}
                      </span>
                      sqft
                    </p>
                  </div>

                  <div className="text-lg font-semibold  text-center text-[#374151] pt-2">
                    {house.address.street1}. {house.address.city}
                    {house.address.state}<span> </span> {house.address.zipCode}
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
            ):null)}
        </div>
      </div>
      <div className="-mt-26 ml-20">

      <Phone/>
      </div>
      </div>
    </>
  );
};
export default RecentlySold;
