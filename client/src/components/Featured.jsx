import React from "react";
import { Link } from "react-router-dom";

const featuredHomes = [
  {
    id: "675c8fafa385a41133c82e9f",
    address: {
      street1: "123 Main St",
      city: "Phoenix",
      state: "AZ",
      zipCode: 12345,
    },
    tags: ["Luxury", "Spacious", "New Listings"],
    images: ["image1.jpg", "patio3.jpg", "liv5.jpg", "kit4.jpg"],
    price: "1,000,000",
    bedrooms: 4,
    bathrooms: 3,
    sqftHouse: 2500,
    sqftLot: 5000,
    garage: 2,
    yearBuilt: 2005,
    listingAgent: {
      firstName: "Julie",
      lastName: "Jones",
      phone: "555-1234",
      brokerage: "ABC Realty",
      logo: "logo4.jpg",
      gender: "girl5.jpg",
    },
    dateListed: new Date("2024-06-12"),
    views: 100,
    recentlyViewed: false,
  },
  {
    id: "675c8fafa385a41133c82e85",

    address: {
      street1: "1456 E McDowell St",
      city: "Tempe",
      state: "AZ",
      zipCode: 85003,
    },
    tags: ["family-friendly", "quiet", "Open Houses"],
    images: ["image4.jpg", "patio3.jpg", "liv5.jpg", "kit4.jpg"],
    price: "750,000",
    bedrooms: 3,
    bathrooms: 2,
    sqftHouse: 1800,
    sqftLot: 3000,
    garage: 1,
    yearBuilt: 1990,
    listingAgent: {
      firstName: "Jane",
      lastName: "Smith",
      phone: "555-5678",
      brokerage: "XYZ Realty",
      logo: "logo5.jpg",
      gender: "girl3.jpg",
    },
    dateListed: new Date("2024-06-12"),
    views: 100,
    recentlyViewed: false,
  },
  {
    id: "675c8fafa385a41133c82e87",

    address: {
      street1: "12456 Eugie Ave",
      city: "Glendale",
      state: "AZ",
      zipCode: 85305,
    },
    tags: ["family-friendly", "quiet", "New Home Communities"],
    images: ["image7.jpg", "patio5.jpg", "rr5.jpg", "plant.jpg"],
    price: "750,000",
    bedrooms: 3,
    bathrooms: 2,
    sqftHouse: 1800,
    sqftLot: 3000,
    garage: 1,
    yearBuilt: 1990,
    listingAgent: {
      firstName: "Cameron",
      lastName: "Crow",
      phone: "555-5678",
      brokerage: "XYZ Realty",
      logo: "logo4.jpg",
      gender: "guy4.jpg",
    },
    dateListed: new Date("2024-06-12"),
    views: 100,
    recentlyViewed: false,
  },
  {
    address: {
      street1: "15523 Thunderbird Rd",
      city: "Glendale",
      state: "AZ",
      zipCode: 85306,
    },
    listingAgent: {
      firstName: "John",
      lastName: "Docker",
      phone: "555-1234",
      brokerage: "ABC Realty",
      logo: "logo2.jpg",
      gender: "guy1.jpg",
    },
    tags: ["new", "modern", "New Home Communities"],
    images: ["image8.jpg", "laund4.jpg", "rr4.jpg", "patio2.jpg"],
    price: "500,000",
    bedrooms: 3,
    bathrooms: 2,
    sqftHouse: 2000,
    sqftLot: 5000,
    garage: 2,
    yearBuilt: 2010,
    dateListed: "2024-06-12T00:00:00.000Z",
    views: 100,
    recentlyViewed: false,
    id: "675c8fafa385a41133c82e8d",
  },
];

const Featured = () => {
  return (
    <div className="w-3/4 m-auto mt-4">
      <h2 className="text-4xl ml-4 font-extrabold text-red-600 mb-2">Featured Homes</h2>

      {/* <h3>
        {" "}
        Welcome to our curated selection of featured homes on RealEstate.com,
        where luxury meets comfort and style. Each property has been handpicked
        to showcase the best of what our vibrant communities have to offer. From
        sprawling estates with panoramic views to cozy, modern homes in the
        heart of the city, our featured listings are designed to inspire and
        captivate.
      </h3> */}

      <div className="grid grid-cols-4 gap-4 m-auto">
        {featuredHomes.map((home) => (
          <div
            key={home.id}
            className="max-w-sm bg-white min-h-80 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <Link to={`/listings/${home.id}`}>
              <img
                className="rounded-t-lg h-1/2 w-full"
                src={
                  new URL(`../assets/${home.images[0]}`, import.meta.url).href
                }
                alt=""
              />
            </Link>
            <div className="p-3">
              <h2 className="text-white font-bold text-lg">${home.price}</h2>
              <p className="text-white">
                <strong>{home.bedrooms}</strong> bds |{" "}
                <strong>{home.bathrooms}</strong> ba |{" "}
                <strong>{home.sqftHouse.toLocaleString("en-US")}</strong> sqft
                Active
              </p>
              <p className="text-white">
                {home.address.street1}
                <span> </span>
              </p>
              <p className="text-white">
                {home.address.city}
                <span> </span>
                {home.address.state}
              </p>
        
            </div>
            <div class="flex items-center mt-4 ml-2">
            <img
                className="w-10 h-10 me-3 rounded-full text-gray-200 dark:text-gray-700"
                src={
                  new URL(`../assets/${home.listingAgent.gender}`, import.meta.url).href
                }
                alt=""
              />
             
              <div>
                <div class="h-2.5 rounded-full  w-32 mb-2">
                  <p className="text-white">
                    {home.listingAgent.firstName}
                    <span> </span>
                    {home.listingAgent.lastName}
                  </p>
                </div>
                <div class="w-48 h-2  rounded-full ">
                   </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
