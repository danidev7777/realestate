import { useState, useEffect } from "react";
import Drawer from "../components/Drawer.jsx";

import TagCards from "../components/TagCards.jsx";

const Home = ({
  houses,
  search,
  setSearch,
  showDrawer,
  setShowDrawer,
  handleSearch,
  tagCards,
}) => {
  // console.log("Houses passed in from App: ", houses);
  // const [showDrawer, setShowDrawer] = useState(false);

  // useEffect(() => {
  //   console.log("showDrawer", showDrawer)
  // }, [showDrawer])

  return (
    <>
      <section className="bg-center bg-no-repeat bg-image bg-gray-600 bg-blend-multiply">
        <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
          <h1 className="mb-4 text-4xl font-bold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
            Real E-State
          </h1>
          <h1 className="mb-4 text-3xl font-semibold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
            The #1 Arizona real estate site
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
            Find Your Perfect Space. Real Estate at Your Fingertips. Transform
            your dream home into reality with our top-notch real estate
            services.
          </p>
          <form className="max-w-md mx-auto" onSubmit={handleSearch}>
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
              </svg>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                value={search}
                className="block w-full p-4 ps-10 text-sm text-gray-900 border border-red-300 rounded-lg bg-gray-50 focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
                placeholder="Search by City"
                onChange={(e) => setSearch(e.target.value)}
              />
              <button
                type="submit"
                className="text-white absolute end-2.5 bottom-2.5 bg-red-700 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </section>
    
      {showDrawer && (
        <Drawer
          setShowDrawer={setShowDrawer}
          search={search}
          houses={houses}
          setSearch={setSearch}
        />
      )}
      <TagCards tagCards={tagCards} />
      {/* <Calculator /> */}
      <div className="mt-8">
        <img
          src={new URL(`../assets/Folton-banner.jpg`, import.meta.url).href}
          className=" rounded-lg m-auto"
        />
      </div>
    </>
  );
};
export default Home;
