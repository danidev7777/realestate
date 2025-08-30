import { useNavigate } from "react-router-dom";

const Drawer = ({ setShowDrawer, search, houses, setSearch }) => {
  console.log("search", search);
  const navigate = useNavigate();

  return (
    <>
      {/* <!-- drawer component --> */}

      <div
        className="fixed animate__animated animate__slideInUp bottom-0 left-0 right-0 z-40 w-full p-4 overflow-y-auto transition-transform bg-white dark:bg-gray-800 transform-none "
        tabIndex="-1"
      >
        <h5 className="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="red"
            className="bi bi-search mx-2"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
          </svg>
          Results Based on Search
        </h5>
        <button
          type="button"
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
          onClick={() => setShowDrawer(false)}
        >
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          {/* <span className="sr-only">Close menu</span> */}
        </button>
        <div className="flex flex-row overscroll-x-contain overflow-auto">
          {search.map((house, index) => (
            // house.address.city == search || house.address.state == search &&
            <div
              key={index}
              className="flex flex-col shadow-2xl mt-2 mx-4 rounded-2xl w-96 bg-[#ffffff] shadow-xl"
            >
              <figure className="flex justify-center items-center rounded-2xl">
                <img
                  src={
                    new URL(`../assets/${house.images[0]}`, import.meta.url)
                      .href
                  }
                  alt="Card Preview"
                  className=" rounded-t-2xl  min-h-40  "
                />
              </figure>

              <div className="  w-full -mt-8 ml-2">
                <span className="bg-red-600 text-xs text-white rounded-lg px-1 py-.5">
                  {" "}
                  {house.tags[2]}
                </span>{" "}
                <span className="bg-red-600 text-xs text-white rounded-lg px-1 py-.5">
                  {" "}
                  {house.tags[0]}
                </span>{" "}
                <span className="bg-red-600 text-xs text-white rounded-lg px-1 py-.5 ">
                  {house.tags[1]}
                </span>{" "}
              </div>
              <div className="flex flex-col  p-4">
                <div className=" mx-8 text-md text-[#374151]">
                  <span className="text-xs font-bold ">{house.bedrooms}</span>{" "}
                  Bds |
                  <span className="text-xs font-bold "> {house.bathrooms}</span>{" "}
                  Ba |
                  <span className="text-xs font-bold "> {house.garage}</span> Ga
                </div>
                <div className="text-lg font-semibold  text-[#374151] pb-2">
                  {house.address.street1} <br />
                  {house.address.city} <span> </span>
                  {house.address.state}, {house.address.zipCode}
                </div>

                <div className="flex justify-end ">
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
export default Drawer;
