import { useState, useEffect } from "react";

import { Link, useNavigate, useParams } from "react-router-dom";

const Listings = ({ houses, isAuth, setIsAuth, tagCards }) => {
  // const { link } = useParams();
  const [showMap, setShowMap] = useState(true);
  const navigate = useNavigate();
  console.log("houses", houses);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div>
        <div className="flex m-auto">
         
    
        </div>
        <div className="flex flex-row flex-wrap justify-evenly m-auto my-4 scroll-smooth">
          {houses.length > 1 &&
            houses.map((house, index) => (
              <div
                key={index}
                className="flex flex-col justify-center shadow-2xl mt-6 mx-4 rounded-2xl w-80 bg-[#ffffff] shadow-xl "
              >
                <img
                  src={
                    new URL(`../assets/${house.images[0]}`, import.meta.url)
                      .href
                  }
                  alt="Card Preview"
                  className=" w-full h-1/2 rounded-t-2xl -mt-3"
                />

                <div className="  w-full -mt-8 ml-2">
                  <span className="bg-red-600 text-xs text-white rounded-lg px-1 py-.5 hover:text-red-600 hover:bg-white">
                    {" "}
                    {tagCards.map((tag,i) =>
                      tag.name === house.tags[2] ? (
                        <Link key={i}to={tag.link} className="">
                          {tag.name}
                        </Link>
                      ) : null
                    )}
                  </span>{" "}
                  <span className="bg-red-600 text-xs text-white rounded-lg px-1 py-.5">
                    {" "}
                    {house.tags[0]}
                  </span>{" "}
                  <span className="bg-red-600 text-xs text-white rounded-lg px-1 py-.5 ">
                    {house.tags[1]}
                  </span>{" "}
                </div>
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
                      bds |<span> </span>
                      <span className="text-sm font-bold ">
                        {house.bathrooms}
                        <span> </span>
                      </span>
                      ba |<span> </span>
                      <span className="text-sm font-bold ">
                        {house.sqftHouse}
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
                  <div className="flex justify-between pt-2">
                    <img
                      src={
                        new URL(
                          `../assets/logos/${house.listingAgent.logo}`,
                          import.meta.url
                        ).href
                      }
                      className="w-14 rounded-2xl"
                    />
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
            ))}
        </div>
      </div>
    </>
  );
};
export default Listings;
