import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const AgentListings = ({ broker }) => {
  // console.log("broker: ", broker);

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
      dateListed: { type: Date, default: Date.now },
    },
  ]);

  useEffect(() => {
    const getHouses = async () => {
      const houseData = await axios.get(
        `${import.meta.env.VITE_NODE_SERVER}/listings`
      );
      // console.log("houseData", houseData);
      setHouses(houseData.data.houses);
      // console.log("houses: ", houses);
    };
    getHouses();
  }, []);

  return (
    <>
      <div className="  mt-4">
        <h2 className="text-center bg-slate-700 text-white text-xl py-2 font-semibold">All Listings for {broker}</h2>
        <ul role="list" className=" w-3/4 m-auto divide-y divide-gray-100 ">
          {houses.map((house) =>
            house.listingAgent.brokerage == broker ? (
              <Link to={`/listings/${house.id}`} key={house.id}>
                <li className="flex justify-between gap-x-6 py-5">
                  <div className="flex min-w-0 gap-x-4">
                    {/* <img
                    className="size-12 flex-none rounded-full bg-gray-50"
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  /> */}
                    <img
                      src={
                        new URL(`../assets/${house.images[0]}`, import.meta.url)
                          .href
                      }
                      alt="Card Preview"
                      className="size-12 flex-none rounded-full bg-gray-50"
                    />
                    <div className="min-w-0 flex-auto">
                      <p className="text-sm/6 font-semibold text-gray-900">
                        {house.address.street1} {house.address.city},{" "}
                        {house.address.state}
                      </p>
                      <p className="mt-1 truncate text-xs/5 text-gray-500">
                        Listed by {house.listingAgent.firstName}{" "}
                        {house.listingAgent.lastName}
                      </p>
                    </div>
                  </div>
                  <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                    <p className="text-sm/6 font-semibold text-gray-900">${house.price}</p>
                    <p className="mt-1 text-xs/5 text-gray-500">
                      Listed{" "}
                      <time dateTime="2023-01-23">
                        {new Date(house.dateListed).toLocaleDateString("en-US")}
                        

                      </time>
                    </p>
                  </div>
                </li>
              </Link>
            ) : null
          )}
        </ul>
        {/* } */}
      </div>
    </>
  );
};
export default AgentListings;
