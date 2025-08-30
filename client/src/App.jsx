import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios"
import NavBar from "./components/NavBar.jsx";
import Home from "./pages/Home.jsx";
import Detail from "./pages/Detail.jsx";
import Listings from "./pages/Listings.jsx";
import Login from "./components/Login.jsx";
import Signup from "./components/Signup.jsx";
import AddListing from "./pages/AddListing.jsx";
import RecentlyViewed from "./pages/RecentlyViewed.jsx";
import OpenHouses from "./pages/OpenHouses.jsx";
import NewListings from "./pages/NewListings.jsx";
import RecentlySold from "./pages/RecentlySold.jsx";
import ReducedPrice from "./pages/ReducedPrice.jsx";
import NewCommunities from "./pages/NewCommunities.jsx";
import Land from "./pages/Land.jsx";
import NewConstruction from "./pages/NewConstruction.jsx";
import RecommendedHomes from "./pages/RecommendedHomes.jsx";
import Footer from "./components/Footer.jsx";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'




function App() {
  // console.log("tagPath on App: ", tagPath)
  const [search, setSearch] = useState([]);
  // const [searchText, setSearchText] = useState('');

  const [showDrawer, setShowDrawer] = useState(false);
  const [isAuth, setIsAuth] = useState(sessionStorage.getItem("user") !== null);

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
  
  const handleSearch = async (e) => {
    e.preventDefault();
    console.log("search btn clicked");
    const houseData = await axios.get(
      `${import.meta.env.VITE_NODE_SERVER}/listings/search/${search}`
    );
    console.log("houseData", houseData);
    setSearch(houseData.data.houses);
    
    setShowDrawer(true);
  };

  useEffect(() => {
    console.log("isAuth", isAuth)
  }, [isAuth])

  const [ tagCards, setTagCards ] = useState([])
  useEffect(() => {
    // console.log(`${import.meta.env.VITE_SERVER_URL}/tags`)
    const getTags = async () => {
      const tagsData = await axios.get(`${import.meta.env.VITE_NODE_SERVER}/tags`)
      console.log("tagsData", tagsData)
      setTagCards(tagsData.data.tags)
    }
    getTags()
  }, [])

  return (
    <>
      <NavBar setSearch={setSearch} isAuth={isAuth} setIsAuth={setIsAuth}/>
      <ToastContainer/>
      <Routes>
        <Route path="/" element={<Home tagCards={tagCards} houses={houses} search={search} setSearch={setSearch} handleSearch={handleSearch} showDrawer={showDrawer} setShowDrawer={setShowDrawer} isAuth={isAuth} setIsAuth={setIsAuth}/>} />
        <Route path="/listings" element={<Listings houses={houses} isAuth={isAuth} setIsAuth={setIsAuth} tagCards={tagCards}/>} />
        <Route path="/listings/:houseId" element={<Detail tagCards={tagCards} isAuth={isAuth} setIsAuth={setIsAuth}/>} />
        <Route path="/login" element={<Login isAuth={isAuth} setIsAuth={setIsAuth}/>} />
        <Route path="/signup" element={<Signup />} />
        {/* <Route path="/add-listing" element={<AddListing isAuth={isAuth} setIsAuth={setIsAuth}/>} /> */}
        {isAuth ?<Route path="/add-listing" element={<AddListing isAuth={isAuth} setIsAuth={setIsAuth}/>} />:null}

        
      

        <Route path="/popular-listings" element={<RecentlyViewed houses={houses}/>} />
        <Route path="/open-houses" element={<OpenHouses houses={houses}/>} />
        <Route path="/new-listings" element={<NewListings houses={houses}/>} />
        <Route path="/recently-sold" element={<RecentlySold houses={houses}/>} />
        <Route path="/price-reduced" element={<ReducedPrice houses={houses}/>} /> 
         <Route path="/new-home-communities" element={<NewCommunities houses={houses}/>} />
         <Route path="/land" element={<Land houses={houses}/>} />
         <Route path="/new-construction" element={<NewConstruction houses={houses}/>} />
         <Route path="/recommended-homes" element={<RecommendedHomes houses={houses}/>} />


      




      </Routes>
      <Footer  isAuth={isAuth}/>
    </>
  );
}

export default App;
