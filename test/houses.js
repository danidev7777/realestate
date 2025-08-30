// Placeholder for houses seed data

import "dotenv/config";
import axios from "axios";

const server = process.env.HOUSE_SERVER || "";
console.log("server", server);

const createListing = () => {
  const data = [{

    address: {
      street1: "123 Main St",
      city: "Phoenix",
      state: "AZ",
      zipCode: 12345
    },
    tags: [
      "Luxury",
      "Spacious",
      "New Listings"
    ],
    images: [
      "image1.jpg",
      "patio3.jpg",
      "liv5.jpg",
      "kit4.jpg"
    ],
    price: "1,000,000",
    bedrooms: 4,
    bathrooms: 3,
    sqftHouse: 2500,
    sqftLot: 5000,
    garage: 2,
    yearBuilt: 2005,
    listingAgent: {
      firstName: "John",
      lastName: "Wilson",
      phone: "555-1234",
      brokerage: "Del Case",
      logo:"delCasa.jpg",
      gender:"guy1.jpg"
    },
   dateListed: new Date("2024-06-12"),
    views: 100,
    recentlyViewed: false,
    
  },
  {
   
    address: {
      street1: "1456 E McDowell St",
      city: "Tempe",
      state: "AZ",
      zipCode: 85003
    },
    tags: [
      "Family Friendly",
      "Quiet",
      "Open Houses"
    ],
    images: [
      "image4.jpg",
      "yard.jpg",
      "br.jpg",
      "laund.jpg"
    ],
    price: "750,000",
    bedrooms: 3,
    bathrooms: 2,
    sqftHouse: 1800,
    sqftLot: 3000,
    garage: 1,
    yearBuilt: 1990,
    listingAgent: {
      firstName: "Olivia",
      lastName: "Wilson",
      phone: "555-5678",
      brokerage: "Keller Williams Realty",
      logo:"wilson.jpg",
      gender:"girl4.jpg"

    },
   dateListed: new Date("2024-06-12"),
    views: 100,
    recentlyViewed: false,
    

  },
  {
  
    address: {
      street1: "12456 Eugie Ave",
      city: "Glendale",
      state: "AZ",
      zipCode: 85305
    },
    tags: [
      "Family Friendly",
      "quiet",
      "New Home Communities"
    ],
    images: [
      "image7.jpg",
      "patio5.jpg",
      "rr5.jpg",
      "plant.jpg"
    ],
    price: "750,000",
    bedrooms: 3,
    bathrooms: 2,
    sqftHouse: 1800,
    sqftLot: 3000,
    garage: 1,
    yearBuilt: 1990,
    listingAgent: {
      firstName: "Jim",
      lastName: "Marshall",
      phone: "555-5678",
      brokerage: "Zillow Group",
      logo:"zillow.jpg",
      gender:"guy3.jpg"
    },
   dateListed: new Date("2024-06-12"),
    views: 100,
    recentlyViewed: false,
    

  },
  {
  
    address: {
      street1: "12456 Roosevelt St",
      city: "Tempe",
      state: "AZ",
      zipCode: 85421
    },
    tags: [
      "Family Friendly",
      "Quiet",
      "Recommended Homes"
    ],
    images: [
      "image5.jpg",
      "kit5.jpg",
      "patio4.jpg",
      "yard3.jpg"
    ],
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
      brokerage: "Modern Home",
      logo:"modern.jpg",
      gender:"girl2.jpg"
    },
   dateListed: new Date("2024-06-12"),
    views: 100,
    recentlyViewed: false
  },
  {
   
    address: {
      street1: "2457 University Dr",
      city: "Tempe",
      state: "AZ",
      zipCode: 85240
    },
    tags: [
      "Family Friendly",
      "quiet",
      "Price Reduced"
    ],
    images: [
      "image6.jpg",
      "br4.jpg",
      "closet3.jpg",
      "kit2.jpg"
    ],
    price: "450,000",
    bedrooms: 3,
    bathrooms: 2,
    sqftHouse: 1870,
    sqftLot: 4000,
    garage: 1,
    yearBuilt: 1998,
    listingAgent: {
      firstName: "Janet",
      lastName: "Robinson",
      phone: "475-1542",
      brokerage: "Sun Dial Realty",
      logo:"logo1.jpg",
      gender:"girl3.jpg"
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
      zipCode: 85306
    },
    tags: [
      "new",
      "modern",
      "New Home Communities"
    ],
    images: [
      "image8.jpg",
      "laund4.jpg",
      "rr4.jpg",
      "patio2.jpg"
    ],
    price: "500,000",
    bedrooms: 3,
    bathrooms: 2,
    sqftHouse: 2000,
    sqftLot: 5000,
    garage: 2,
    yearBuilt: 2010,
    listingAgent: {
      firstName: "John",
      lastName: "Doe",
      phone: "555-1234",
      brokerage: "Sunset Realty",
      logo:"logo3.jpg",
      gender:"guy2.jpg"
    },
   dateListed: new Date("2024-06-12"),
    views: 100,
    recentlyViewed: false
  },
  {
   
    address: {
      street1: "4785 Ranch St",
      city: "Scottsdale",
      state: "AZ",
      zipCode: 84512
    },
    tags: [
      "old",
      "fixer-upper",
      "Recently Sold",
      "Open Houses"
    ],
    images: [
      "image9.jpg",
      "br.jpg",
      "rr.jpg",
      "laund.jpg"
    ],
    price: "300,000",
    bedrooms: 4,
    bathrooms: 3,
    sqftHouse: 2500,
    sqftLot: 6000,
    garage: 1,
    yearBuilt: 1950,
    listingAgent: {
      firstName: "Jane",
      lastName: "Smith",
      phone: "555-5678",
      brokerage: "Redfin Realty",
      logo:"logo9.jpg",
      gender:"girl2.jpg"
    },
     dateListed: new Date("2024-06-12"),
    views: 200,
    recentlyViewed: false
  },
  {
  
    address: {
      street1: "12789 Oak St",
      city: "Buckeye",
      state: "AZ",
      zipCode: 85002
    },
    tags: [
      "new",
      "Spacious",
      "Open Houses"
    ],
    images: [
      "image10.jpg",
      "br2.jpg",
      "rr3.jpg",
      "laund2.jpg"
    ],
    price: "600,000",
    bedrooms: 5,
    bathrooms: 4,
    sqftHouse: 3000,
    sqftLot: 8000,
    garage: 3,
    yearBuilt: 2015,
    listingAgent: {
      firstName: "Bob",
      lastName: "Johnson",
      phone: "555-9012",
      brokerage: "RE/Max",
      logo:"yellow.jpg",
      gender:"guy1.jpg"
    },
    dateListed: new Date("2024-06-12"),
    views: 300,
    recentlyViewed: true
  },
  {
  
    address: {
      street1: "10151 Pine St",
      city: "Gilbert",
      state: "AZ",
      zipCode: 85624
    },
    tags: [
      "new",
      "modern",
      "New Construction"
    ],
    images: [
      "image11.jpg",
      "kit5.jpg",
      "patio3.jpg",
      "gra5.jpg"
    ],
    price: "750,000",
    bedrooms: 3,
    bathrooms: 2,
    sqftHouse: 2500,
    sqftLot: 5500,
    garage: 2,
    yearBuilt: 2012,
    listingAgent: {
      firstName: "Alice",
      lastName: "Brown",
      phone: "555-3456",
      brokerage: "Mezzer Realty",
      logo:"mezz.jpg",
      gender:"girl1.jpg"
    },
    dateListed: new Date("2024-06-12"),
    views: 400,
    recentlyViewed: false
  },
  {
  
    address: {
      street1: "20214 Birch St",
      city: "Tempe",
      state: "AZ",
      zipCode: 85624
    },
    tags: [
      "new",
      "modern",
      "Price Reduced"
    ],
    images: [
      "image12.jpg",
      "liv7.jpg",
      "closet3.jpg",
      "laund4.jpg"
    ],
    price: "200,000",
    bedrooms: 2,
    bathrooms: 1,
    sqftHouse: 1500,
    sqftLot: 3000,
    garage: 1,
    yearBuilt: 1940,
    listingAgent: {
      firstName: "Charlie",
      lastName: "Davis",
      phone: "555-6789",
      brokerage: "Realtor.com",
      logo:"realtor.jpg",
      gender:"guy3.jpg"
    },
    dateListed: new Date("2024-06-12"),
    views: 500,
    recentlyViewed: false
  },
  {
  
    address: {
      street1: "3013 Cedar St",
      city: "Gilbert",
      state: "AZ",
      zipCode: 85246
    },
    tags: [
      "New",
      "Spacious",
      "Open Houses"
    ],
    images: [
      "image13.jpg",
      "br2.jpg",
      "patio6.jpg",
      "kit3.jpg"
    ],
    price: "700,000",
    bedrooms: 4,
    bathrooms: 3,
    sqftHouse: 3500,
    sqftLot: 9000,
    garage: 3,
    yearBuilt: 2018,
    listingAgent: {
      firstName: "Eve",
      lastName: "Franklin",
      phone: "555-1234",
      brokerage: "Colony 17 Realty",
      logo:"logo6.jpg",
      gender:"girl4.jpg"
    },
    dateListed: new Date("2024-06-12"),
    views: 600,
    recentlyViewed: false
  },
  {
  
    address: {
      street1: "842 Poland Ave",
      city: "Phoenix",
      state: "AZ",
      zipCode: 85012
    },
    tags: [
      "Family Friendly",
      "quiet",
      "Recommended Homes"
    ],
    images: [
      "image2.jpg",
      "br3.jpg",
      "patio.jpg",
      "gra4.jpg"
    ],
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
      brokerage: "Salford & Co. Realty",
      logo:"stanford.jpg",
      gender:"guy3.jpg"
    },
   dateListed: new Date("2024-06-12"),
    views: 100,
    recentlyViewed: false
  },
  {
  
    address: {
      street1: "13456 Baseline Dr",
      city: "Mesa",
      state: "AZ",
      zipCode: 85324
    },
    tags: [
      "Family Friendly",
      "quiet",
      "New Construction"
    ],
    images: [
      "image3.jpg",
      "br.jpg",
      "closet.jpg",
      "liv7.jpg"
    ],
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
      brokerage: "Century 21",
      logo:"logo9.jpg",
      gender:"girl5.jpg"
    },
   dateListed: new Date("2024-06-12"),
    views: 100,
    recentlyViewed: true
  },
  {
  
    address: {
      street1: "13404 E Elm St",
      city: "Gendale",
      state: "AZ",
      zipCode: 86542
    },
    tags: [
      "old",
      "fixer-upper",
      "Price Reduced"
    ],
    images: [
      "image14.jpg",
      "rr5.jpg",
      "patio7.jpg",
      "bbq.jpg"
    ],
    price: "150,000",
    bedrooms: 2,
    bathrooms: 1,
    sqftHouse: 1200,
    sqftLot: 2500,
    garage: 1,
    yearBuilt: 1930,
    listingAgent: {
      firstName: "Frank",
      lastName: "Garcia",
      phone: "555-5678",
      brokerage: "TriStar Realty",
      logo:"tristar.jpg",
      gender:"girl6.jpg"
    },
    dateListed: new Date("2024-06-12"),
    views: 700,
    recentlyViewed: true
  },
  {
  
    address: {
      street1: "123 Main St",
      city: "Chandler",
      state: "AZ",
      zipCode: 84521
    },
    tags: [
      "Luxury",
      "Spacious",
      "New Home Communities"
    ],
    images: [
      "image1.jpg",
      "patio3.jpg",
      "liv5.jpg",
      "kit4.jpg"
    ],
    price: "1,000,000",
    bedrooms: 4,
    bathrooms: 3,
    sqftHouse: 2500,
    sqftLot: 5000,
    garage: 2,
    yearBuilt: 2005,
    listingAgent: {
      firstName: "John",
      lastName: "Doe",
      phone: "555-1234",
      brokerage: "Zillow Group",
      logo:"zillow.jpg",
      gender:"guy4.jpg"
    },
   dateListed: new Date("2024-06-12"),
    views: 100,
    recentlyViewed: false
  },
  {
  
    address: {
      street1: "8442 Poland Ave",
      city: "Glendale",
      state: "AZ",
      zipCode: 85301
    },
    tags: [
      "Family Friendly",
      "quiet",
      "New Listings"
    ],
    images: [
      "image2.jpg",
      "br3.jpg",
      "patio.jpg",
      "gra4.jpg"
    ],
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
      brokerage: "Redfin Realty",
      logo:"house3.jpg",
      gender:"girl6.jpg"
    },
   dateListed: new Date("2024-06-12"),
    views: 100,
    recentlyViewed: false
  },
  {
  
    address: {
      street1: "47512 Wood St",
      city: "Buckeye",
      state: "AZ",
      zipCode: 85005
    },
    tags: [
      "Family Friendly",
      "quiet",
      "New Listings"
    ],
    images: [
      "image7.jpg",
      "patio5.jpg",
      "rr5.jpg",
      "plant.jpg"
    ],
    price: "750,000",
    bedrooms: 3,
    bathrooms: 2,
    sqftHouse: 1800,
    sqftLot: 3000,
    garage: 1,
    yearBuilt: 1990,
    listingAgent: {
      firstName: "James",
      lastName: "Brown",
      phone: "555-5678",
      brokerage: "Realtor.com",
      logo:"realtor.jpg",
      gender:"guy5.jpg"
    },
   dateListed: new Date("2024-06-12"),
    views: 100,
    recentlyViewed: false
  },
  {
   
    address: {
      street1: "14563 Elm St",
      city: "Buckeye",
      state: "AZ",
      zipCode: 84572
    },
    tags: [
      "Family Friendly",
      "quiet",
      "New Construction"
    ],
    images: [
      "image5.jpg",
      "kit5.jpg",
      "patio4.jpg",
      "yard3.jpg"
    ],
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
      brokerage: "Zillow Group",
      logo:"zillow.jpg",
      gender:"girl5.jpg"
    },
   dateListed: new Date("2024-06-12"),
    views: 100,
    recentlyViewed: false
  },
  {
   
    address: {
      street1: "2457 University Dr",
      city: "Mesa",
      state: "AZ",
      zipCode: 85240
    },
    tags: [
      "Family Friendly",
      "quiet",
      "New Home Communities"
    ],
    images: [
      "image6.jpg",
      "br4.jpg",
      "closet3.jpg",
      "kit2.jpg"
    ],
    price: "750,000",
    bedrooms: 3,
    bathrooms: 2,
    sqftHouse: 1870,
    sqftLot: 4000,
    garage: 1,
    yearBuilt: 1998,
    listingAgent: {
      firstName: "Janet",
      lastName: "Robinson",
      phone: "475-1542",
      brokerage: "Sun Dial Realty",
      logo:"logo1.jpg",
      gender:"girl5.jpg"
    },
   dateListed: new Date("2024-06-12"),
    views: 100,
    recentlyViewed: false
  },
  {
  
    address: {
      street1: "15523 Thunderbird Rd",
      city: "Peoria",
      state: "AZ",
      zipCode: 85306
    },
    tags: [
      "new",
      "modern",
      "Open Houses"
    ],
    images: [
      "image8.jpg",
      "laund4.jpg",
      "rr4.jpg",
      "patio2.jpg"
    ],
    price: "500,000",
    bedrooms: 3,
    bathrooms: 2,
    sqftHouse: 2000,
    sqftLot: 5000,
    garage: 2,
    yearBuilt: 2010,
    listingAgent: {
      firstName: "Nicole",
      lastName: "Baker",
      phone: "555-1234",
      brokerage: "NB Realty",
      logo:"baker.jpg",
      gender:"girl5.jpg"
    },
   dateListed: new Date("2024-06-12"),
    views: 100,
    recentlyViewed: false
  },
  {
  
    address: {
      street1: "4785 Ranch St",
      city: "Gilbert",
      state: "AZ",
      zipCode: 84512
    },
    tags: [
      "old",
      "fixer-upper",
      "Price Reduced"
    ],
    images: [
      "image9.jpg",
      "br.jpg",
      "rr.jpg",
      "laund.jpg"
    ],
    price: "300,000",
    bedrooms: 4,
    bathrooms: 3,
    sqftHouse: 2500,
    sqftLot: 6000,
    garage: 1,
    yearBuilt: 1950,
    listingAgent: {
      firstName: "Alexis",
      lastName: "Carlson",
      phone: "555-5678",
      brokerage: "Real Estate Group",
      logo:"Carlson.jpg",
      gender:"girl4.jpg"
    },
     dateListed: new Date("2024-06-12"),
    views: 200,
    recentlyViewed: true
  },
  {
  
    address: {
      street1: "789 Oak St",
      city: "Phoenix",
      state: "AZ",
      zipCode: 85002
    },
    tags: [
      "new",
      "Spacious",
      "Recently Sold"
    ],
    images: [
      "image10.jpg",
      "br2.jpg",
      "rr3.jpg",
      "laund2.jpg"
    ],
    price: "600000",
    bedrooms: 5,
    bathrooms: 4,
    sqftHouse: 3000,
    sqftLot: 8000,
    garage: 3,
    yearBuilt: 2015,
    listingAgent: {
      firstName: "Bob",
      lastName: "Johnson",
      phone: "555-9012",
      brokerage: "DEF Realty",
      logo:"logo2.jpg",
      gender:"guy4.jpg"
      
    },
    dateListed: new Date("2024-06-12"),
    views: 300,
    recentlyViewed: false
  },
  {
  
    address: {
      street1: "10151 Pine St",
      city: "Chandler",
      state: "AZ",
      zipCode: 85624
    },
    tags: [
      "new",
      "modern",
      "New Construction"
    ],
    images: [
      "image11.jpg",
      "kit5.jpg",
      "patio3.jpg",
      "gra5.jpg"
    ],
    price: "750,000",
    bedrooms: 3,
    bathrooms: 2,
    sqftHouse: 2500,
    sqftLot: 5500,
    garage: 2,
    yearBuilt: 2012,
    listingAgent: {
      firstName: "Alice",
      lastName: "Brown",
      phone: "555-3456",
      brokerage: "Moose Group",
      logo:"logo4.jpg",
      gender:"girl3.jpg"
    },
    dateListed: new Date("2024-06-12"),
    views: 400,
    recentlyViewed: true
  },
  {
   
    address: {
      street1: "20214 Birch St",
      city: "Gilbert",
      state: "AZ",
      zipCode: 85624
    },
    tags: [
      "new",
      "modern",
      "Price Reduced"
    ],
    images: [
      "image12.jpg",
      "liv7.jpg",
      "closet3.jpg",
      "laund4.jpg"
    ],
    price: "200,000",
    bedrooms: 2,
    bathrooms: 1,
    sqftHouse: 1500,
    sqftLot: 3000,
    garage: 1,
    yearBuilt: 1940,
    listingAgent: {
      firstName: "Charlie",
      lastName: "Davis",
      phone: "555-6789",
      brokerage: "Life Realty",
      logo:"logo1.jpg",
      gender:"guy2.jpg"
    },
    dateListed: new Date("2024-06-12"),
    views: 500,
    recentlyViewed: false
  },
  {
  
    address: {
      street1: "3013 Cedar St",
      city: "Tempe",
      state: "AZ",
      zipCode: 85246
    },
    tags: [
      "new",
      "Spacious",
      "Recommended Homes"
    ],
    images: [
      "image13.jpg",
      "br2.jpg",
      "patio6.jpg",
      "kit3.jpg"
    ],
    price: "700,000",
    bedrooms: 4,
    bathrooms: 3,
    sqftHouse: 3500,
    sqftLot: 9000,
    garage: 3,
    yearBuilt: 2018,
    listingAgent: {
      firstName: "Eve",
      lastName: "Franklin",
      phone: "555-1234",
      brokerage: "MNO Realty",
      logo:"logo3.jpg",
      gender:"girl1.jpg"
    },
    dateListed: new Date("2024-06-12"),
    views: 600,
    recentlyViewed: true
  },
  {
  
    address: {
      street1: "13404 E Elm St",
      city: "Scottsdale",
      state: "AZ",
      zipCode: 86542
    },
    tags: [
      "old",
      "fixer-upper",
      "Price Reduced"
    ],
    images: [
      "image14.jpg",
      "rr5.jpg",
      "patio7.jpg",
      "bbq.jpg"
    ],
    price: "150,000",
    bedrooms: 2,
    bathrooms: 1,
    sqftHouse: 1200,
    sqftLot: 2500,
    garage: 1,
    yearBuilt: 1930,
    listingAgent: {
      firstName: "Frank",
      lastName: "Garcia",
      phone: "555-5678",
      brokerage: "OPQ Realty",
      logo:"logo5.jpg",
      gender:"guy2.jpg"
    },
    dateListed: new Date("2024-06-12"),
    views: 700,
    recentlyViewed: false
  },
  {
  
    address: {
      street1: "3456 Thomas St",
      city: "Phoenix",
      state: "AZ",
      zipCode: 85024
    },
    tags: [
      "Family Friendly",
      "quiet",
      "Recently Sold"
    ],
    images: [
      "image3.jpg",
      "br.jpg",
      "closet.jpg",
      "liv7.jpg"
    ],
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
      logo:"logo6.jpg",
      gender:"girl3.jpg"
    },
   dateListed: new Date("2024-06-12"),
    views: 100,
    recentlyViewed: false
  },
  {
   
    address: {
      street1: "1456 E McDowell St",
      city: "Phoenix",
      state: "AZ",
      zipCode: 85003
    },
    tags: [
      "Family Friendly",
      "quiet"
    ],
    images: [
      "image4.jpg",
      "yard.jpg",
      "br.jpg",
      "laund.jpg"
    ],
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
      logo:"logo7.jpg",
      gender:"girl2.jpg"
    },
   dateListed: new Date("2024-06-12"),
    views: 100,
    recentlyViewed: false
  },
  {
   
    address: {
      street1: "112456 W McDowell St",
      city: "Needles",
      state: "AZ",
      zipCode: 85745
    },
    tags: [
      "electric access",
      "road access",
      "Land"
    ],
    images: [
      "land1.jpg",
     
    ],
    price: "1,750,000",
    bedrooms: 0,
    bathrooms: 0,
    sqftHouse: 1800,
    sqftLot: 30700,
    garage: 0,
    yearBuilt: 1890,
    listingAgent: {
      firstName: "Alexis",
      lastName: "Carlson",
      phone: "555-5678",
      brokerage: "Real Estate Group",
      logo:"Carlson.jpg",
      gender:"girl4.jpg"
    },
   dateListed: new Date("2024-06-12"),
    views: 100,
    recentlyViewed: false
  },
  {
   
    address: {
      street1: "112456 W McDowell St",
      city: "Needles",
      state: "AZ",
      zipCode: 85745
    },
    tags: [
      "water line",
      "road access",
      "Land"
    ],
    images: [
      "land2.jpg",
     
    ],
    price: "1,750,000",
    bedrooms: 0,
    bathrooms: 0,
    sqftHouse: 0,
    sqftLot: 33000,
    garage: 0,
    yearBuilt: 1990,
    listingAgent: {
      firstName: "Alexis",
      lastName: "Carlson",
      phone: "555-5678",
      brokerage: "Real Estate Group",
      logo:"Carlson.jpg",
      gender:"girl4.jpg"
    },
   dateListed: new Date("2024-06-12"),
    views: 100,
    recentlyViewed: false
  },
  {
   
    address: {
      street1: "112456 W McDowell St",
      city: "Needles",
      state: "AZ",
      zipCode: 85745
    },
    tags: [
      "water line",
      "electric access",
      "Land"
    ],
    images: [
      "land3.jpg",
     
    ],
    price: "1,750,000",
    bedrooms: 0,
    bathrooms: 0,
    sqftHouse: 0,
    sqftLot: 43000,
    garage: 0,
    yearBuilt: 1990,
    listingAgent: {
      firstName: "Alexis",
      lastName: "Carlson",
      phone: "555-5678",
      brokerage: "Real Estate Group",
      logo:"Carlson.jpg",
      gender:"girl4.jpg"
      
    },
   dateListed: new Date("2024-06-12"),
    views: 100,
    recentlyViewed: false
  },
  {
   
    address: {
      street1: "12436 E Boot Hill St",
      city: "Tombstone",
      state: "AZ",
      zipCode: 85745
    },
    tags: [
      "water line",
      "road access",
      "Land"
    ],
    images: [
      "land4.jpg",
     
    ],
    price: "1,250,000",
    bedrooms: 0,
    bathrooms: 0,
    sqftHouse: 0,
    sqftLot: 51000,
    garage: 0,
    yearBuilt: 1990,
    listingAgent: {
      firstName: "Kevin",
      lastName: "Moon",
      phone: "535-4678",
      brokerage: "Parcel Realty"
    },
   dateListed: new Date("2024-06-12"),
    views: 100,
    recentlyViewed: false
  }
];

  data.map(async (house) => {
    const response = await axios.post(`${server}/listings`, house);

    console.log(response.data);
  });
};
createListing();
