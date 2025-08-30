import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import AgentListings from "../components/AgentListings";

import { toast } from "react-toastify";
import AgentMessages from "../components/AgentMessages";
const AddListing = () => {
  let loginEmail = JSON.parse(sessionStorage.getItem("user"));

  const navigate = useNavigate();
  const [user, setUser] = useState({});
  useEffect(() => {
    const getUsers = async () => {
      const userData = await axios.get(
        `${import.meta.env.VITE_NODE_SERVER}/users/${loginEmail}`
      );
      console.log("userData", userData.data.users[0]);
      setUser(userData.data.users[0]);
      // console.log("user: ", user);
    };
    getUsers();
  }, []);

  const [listing, setListing] = useState({
    street1: "",
    city: "",
    state: "",
    zipCode: 0,
    tags: ["", "", ""],
    images: ["", "", "", ""],
    price: "",
    bedrooms: 0,
    bathrooms: 0,
    sqftHouse: 0,
    sqftLot: 0,
    garage: 0,
    yearBuilt: 0,

    firstName: "",
    lastName: "",
    phone: "",
    brokerage: "",
    gender: "",
    logo: "",
    dateListed: new Date(),
  });

  // console.log("listing", listing);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const houseObject = {
      address: {
        street1: listing.street1,
        city: listing.city,
        state: listing.state,
        zipCode: listing.zipCode,
      },
      price: listing.price,
      tags: listing.tags,
      images: listing.images,
      bedrooms: listing.bedrooms,
      bathrooms: listing.bathrooms,
      sqftHouse: listing.sqftHouse,
      sqftLot: listing.sqftLot,
      garage: listing.garage,
      yearBuilt: listing.yearBuilt,
      listingAgent: {
        firstName: user.firstName,
        lastName: user.lastName,
        phone: user.phone,
        brokerage: user.brokerage,
        logo: listing.logo,
        gender: listing.gender,
      },
      dateListed: listing.dateListed,
    };
    console.log("houseObject", houseObject);
    const addHouse = await axios.post(
      `${import.meta.env.VITE_NODE_SERVER}/listings`,
      houseObject
    );
    console.log(addHouse);
    if (addHouse.data.success === true) {
      setListing([...listing, addHouse.data.houses]);
      toast.success("Success: listing has been added");
      setTimeout(() => {
        navigate("/listings"); // Navigate back to main home list
      }, 3000);
    }
  };

  return (
    <>
      <div className="flex mx-6 ">
        <div className="rounded-md  mx-4 mt-4 w-1/2">
          <h2 className="text-center bg-slate-700 text-white text-xl py-2 font-semibold">
            Add a New listing
          </h2>
          <form
            onSubmit={handleSubmit}
            className=" mx-10 mt-4 w-1/2 px-2 py-4 "
          >
            <div className="basis-1/4 text-slate-600 font-semibold">
              Property Address:{" "}
            </div>

            <div className="flex flex-row pb-2">
              <div className=" mx-1 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-red-600">
                <input
                  value={listing.street1}
                  onChange={(e) =>
                    setListing({ ...listing, street1: e.target.value })
                  }
                  type="text"
                  name="street"
                  id="street"
                  autoComplete="street"
                  className="border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm/6"
                  placeholder="Street"
                />
              </div>
              <div className=" rounded-md mx-1 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-red-600">
                <input
                  value={listing.city}
                  onChange={(e) =>
                    setListing({ ...listing, city: e.target.value })
                  }
                  type="text"
                  name="city"
                  id="city"
                  autoComplete="city"
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm/6"
                  placeholder="City"
                />
              </div>
              <div className=" rounded-md mx-1 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-red-600">
                <input
                  value={listing.state}
                  onChange={(e) =>
                    setListing({ ...listing, state: e.target.value })
                  }
                  type="text"
                  name="state"
                  id="state"
                  autoComplete="state"
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm/6"
                  placeholder="State"
                />
              </div>
              <div className=" rounded-md mx-1  shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-red-600">
                <input
                  value={listing.zipCode === 0 ? "" : listing.zipCode}
                  onChange={(e) =>
                    setListing({ ...listing, zipCode: e.target.value })
                  }
                  type="text"
                  name="zipCode"
                  id="zipCode"
                  autoComplete="zipCode"
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm/6"
                  placeholder="Zip Code"
                />
              </div>
            </div>
            <div className="basis-1/4 text-slate-600 font-semibold">
              Property Details:{" "}
            </div>

            <div className="flex flex-row pb-2">
              <div className="w-24 mx-1 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-red-600">
                <input
                  value={listing.price === 0 ? "" : listing.price}
                  onChange={(e) =>
                    setListing({ ...listing, price: e.target.value })
                  }
                  type="text"
                  name="price"
                  id="price"
                  autoComplete="price"
                  className="border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm/6"
                  placeholder="Price"
                />
              </div>
              <div className="w-24  rounded-md mx-1 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-red-600">
                <input
                  value={listing.yearBuilt === 0 ? "" : listing.yearBuilt}
                  onChange={(e) =>
                    setListing({ ...listing, yearBuilt: e.target.value })
                  }
                  type="text"
                  name="yearBuilt"
                  id="yearBuilt"
                  autoComplete="yearBuilt"
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm/6"
                  placeholder="Year Built"
                />
              </div>
              <div className="w-24 mx-1 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-red-600">
                <input
                  value={listing.bedrooms === 0 ? "" : listing.bedrooms}
                  onChange={(e) =>
                    setListing({ ...listing, bedrooms: e.target.value })
                  }
                  type="text"
                  name="bedrooms"
                  id="bedrooms"
                  autoComplete="bedrooms"
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm/6"
                  placeholder="Bedrooms"
                />
              </div>
              <div className="w-24  rounded-md mx-1  shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-red-600">
                <input
                  value={listing.bathrooms === 0 ? "" : listing.bathrooms}
                  onChange={(e) =>
                    setListing({ ...listing, bathrooms: e.target.value })
                  }
                  type="text"
                  name="bathrooms"
                  id="bathrooms"
                  autoComplete="bathrooms"
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm/6"
                  placeholder="Bathrooms"
                />
              </div>
              <div className="w-24 rounded-md mx-1  shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-red-600">
                <input
                  value={listing.garage === 0 ? "" : listing.garage}
                  onChange={(e) =>
                    setListing({ ...listing, garage: e.target.value })
                  }
                  type="text"
                  name="garage"
                  id="garage"
                  autoComplete="garage"
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm/6"
                  placeholder="Garage"
                />
              </div>
              <div className="w-24 rounded-md mx-1 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-red-600">
                <input
                  value={listing.sqftHouse === 0 ? "" : listing.sqftHouse}
                  onChange={(e) =>
                    setListing({ ...listing, sqftHouse: e.target.value })
                  }
                  type="text"
                  name="sqftHouse"
                  id="sqftHouse"
                  autoComplete="sqftHouse"
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm/6"
                  placeholder="House Sqft"
                />
              </div>
              <div className="w-24 rounded-md mx-1 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-red-600">
                <input
                  value={listing.sqftLot === 0 ? "" : listing.sqftLot}
                  onChange={(e) =>
                    setListing({ ...listing, sqftLot: e.target.value })
                  }
                  type="text"
                  name="sqftLot"
                  id="sqftLot"
                  autoComplete="sqftLot"
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm/6"
                  placeholder="Lot Sqft"
                />
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-col">
                <label className="text-slate-600 font-semibold"> Images:</label>
                <div className="flex flex-row pb-2">
                  <div className="w-24 mx-1 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-red-600">
                    <input
                      value={listing.images[0]}
                      onChange={(e) =>
                        setListing({
                          ...listing,
                          images: [
                            e.target.value,
                            listing.images[1],
                            listing.images[2],
                            listing.images[3],
                          ],
                        })
                      }
                      type="text"
                      name="img1"
                      className="border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm/6"
                      placeholder="image1.jpg"
                    />
                  </div>
                  <div className="w-24  rounded-md mx-1 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-red-600">
                    <input
                      value={listing.images[1]}
                      onChange={(e) =>
                        setListing({
                          ...listing,
                          images: [
                            listing.images[0],
                            e.target.value,
                            listing.images[2],
                            listing.images[3],
                          ],
                        })
                      }
                      type="text"
                      name="img2"
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm/6"
                      placeholder="image2.jpg"
                    />
                  </div>

                  <div className="w-24 mx-1 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-red-600">
                    <input
                      value={listing.images[2]}
                      onChange={(e) =>
                        setListing({
                          ...listing,
                          images: [
                            listing.images[0],
                            listing.images[1],
                            e.target.value,
                            listing.images[3],
                          ],
                        })
                      }
                      type="text"
                      name="img3"
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm/6"
                      placeholder="image3.jpg"
                    />
                  </div>

                  <div className="w-24  rounded-md mx-1  shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-red-600">
                    <input
                      value={listing.images[3]}
                      onChange={(e) =>
                        setListing({
                          ...listing,
                          images: [
                            listing.images[0],
                            listing.images[1],
                            listing.images[2],
                            e.target.value,
                          ],
                        })
                      }
                      type="text"
                      name="img4"
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm/6"
                      placeholder="image4.jpg"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <label className="text-slate-600 font-semibold">Profile:</label>
                <div className="w-24 mx-1 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-red-600">
                  <input
                    value={listing.gender}
                    onChange={(e) =>
                      setListing({
                        ...listing,
                        gender: e.target.value,
                      })
                    }
                    type="text"
                    name="img3"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm/6"
                    placeholder="profile img"
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label className="text-slate-600 font-semibold">Logo:</label>
                <div className="w-24 mx-1 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-red-600">
                  <input
                    value={listing.logo}
                    onChange={(e) =>
                      setListing({
                        ...listing,
                        logo: e.target.value,
                      })
                    }
                    type="text"
                    name="img3"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm/6"
                    placeholder="comp. Logo"
                  />
                </div>
              </div>
            </div>

            <div className="basis-1/4 text-slate-600 font-semibold">Tags: </div>

            <div className="flex flex-row pb-2">
              <div className="w-32 mx-1 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-red-600">
                <input
                  value={listing.tags[0]}
                  onChange={(e) =>
                    setListing({
                      ...listing,
                      tags: [e.target.value, listing.tags[1], listing.tags[2]],
                    })
                  }
                  type="text"
                  name="tag1"
                  className="border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm/6"
                  placeholder="Family-Friendly"
                />
              </div>
              <div className="w-32  rounded-md mx-1 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-red-600">
                <input
                  value={listing.tags[1]}
                  onChange={(e) =>
                    setListing({
                      ...listing,
                      tags: [listing.tags[0], e.target.value, listing.tags[2]],
                    })
                  }
                  type="text"
                  name="tag2"
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm/6"
                  placeholder="Modern"
                />
              </div>
              <div className="w-32 mx-1 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-red-600">
                <input
                  value={listing.tags[2]}
                  onChange={(e) =>
                    setListing({
                      ...listing,
                      tags: [listing.tags[0], listing.tags[1], e.target.value],
                    })
                  }
                  type="text"
                  name="img3"
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm/6"
                  placeholder="Reduced Price"
                />
              </div>
            </div>

            <div className="basis-1/4 text-slate-600 font-semibold">
              Realtor Information:
            </div>
            <div className="flex flex-row pb-2">
              <div className="basis-1/4 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-red-600"></div>
            </div>
            <div className="flex flex-row pb-2">
              <div className=" mx-1 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-red-600">
                <input
                  value={user.firstName}
                  // onChange={(e) =>
                  //   setListing({
                  //     ...listing,
                  //     listingAgent: { firstName: e.target.value },
                  //   })
                  // }
                  type="text"
                  name="firstName"
                  id="firstName"
                  autoComplete="firstName"
                  className="border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm/6"
                  placeholder="First Name"
                />
              </div>
              <div className=" rounded-md mx-1 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-red-600">
                <input
                  value={user.lastName}
                  // onChange={(e) =>
                  //   setListing({
                  //     ...listing,
                  //     listingAgent: { lastName: e.target.value },
                  //   })
                  // }
                  type="text"
                  name="lastName"
                  id="lastName"
                  autoComplete="lastName"
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm/6"
                  placeholder="Last Name"
                />
              </div>
              <div className=" rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-red-600">
                <input
                  value={user.phone}
                  // onChange={(e) =>
                  //   setListing({
                  //     ...listing,
                  //     listingAgent: { phone: e.target.value },
                  //   })
                  // }
                  type="text"
                  name="phone"
                  id="phone"
                  autoComplete="phone"
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm/6"
                />
              </div>
              <div className=" rounded-md mx-1 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-red-600">
                <input
                  value={user.brokerage}
                  // onChange={(e) =>
                  //   setListing({
                  //     ...listing,
                  //     listingAgent: { brokerage: user.brokerage },
                  //   })
                  // }
                  type="text"
                  name="brokerage"
                  id="brokerage"
                  autoComplete="brokerage"
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm/6"
                />
              </div>
            </div>
            <div>
              <div>
                <div className="basis-1/4 text-slate-600 font-semibold">
                  Listing Date:
                </div>

                <div className="flex flex-row justify-between pb-2">
                  <input
                    value={listing.dateListed}
                    onChange={(e) =>
                      setListing({ ...listing, dateListed: e.target.value })
                    }
                    name="date"
                    id="date"
                    autoComplete="date"
                    type="date"
                    className="basis-1/4  mt-1 block w-full rounded-md shadow-sm ring-1 ring-inset ring-gray-300 bg-transparent ring-gray-900 placeholder:text-gray-400  border-0 bg-transparent py-1.5 pl-1 text-gray-400 placeholder:text-gray-400 focus:ring-red-600 sm:text-sm/6 "
                  />
                  <button
                    type="submit"
                    className="text-red-600 hover:text-white border border-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-600 dark:text-red-600 dark:hover:text-white dark:hover:bg-red-500 dark:focus:ring-red-600"
                  >
                    Add Listing
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="flex flex-col w-full">
          <AgentListings broker={user.brokerage} />
          <AgentMessages
            broker={user.brokerage}
            realtor={`${user.firstName} ${user.lastName}`}
          />
        </div>
      </div>
    </>
  );
};
export default AddListing;
