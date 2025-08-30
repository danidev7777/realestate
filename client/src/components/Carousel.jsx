import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const slideTotal = 4;
const slideTimeout = 3000;

const Carousel = ({ images, tags, city, tagCards }) => {
  // console.log(tags, images, city);
  // console.log("state: ", state);
  // console.log("images", images)
  // let word = "";
  // let locationPath = "";
  // let location = "";

  // useEffect(() => {
  //   const setTags = () => {
  //     if (tags.length > 0) {
  //       word = tags[2];
  //       locationPath = word.toLowerCase().replace(" ", "-").replace(" ", "-").trim();
  //       location = `/${locationPath}`;
  //     }
  //   };
  //   setTags();
  //   console.log("location: ", location);
  // }, [tags]);

  const [slide, setSlide] = useState(0);
  const navigate = useNavigate();

  // Auto scroll slides
  useEffect(() => {
    const slideTimer = setTimeout(() => {
      handleNextClick();
    }, slideTimeout);
    return () => clearTimeout(slideTimer);
  }, [slide]);

  const handlePreviousClick = () => {
    // If current slide is 0, go to last slide, (slideTotal -1)
    if (slide === 0) {
      setSlide(slideTotal - 1);
    }
    // Get to previous slide, -1
    else {
      setSlide(slide - 1);
    }
  };

  const handleNextClick = () => {
    // If current slide is the last slide (slideTotal - 1), go to beginning, 0
    if (slide === slideTotal - 1) {
      setSlide(0);
    }
    // Go to next, +1
    else {
      setSlide(slide + 1);
    }
  };

  // Function to handle slide classes for transitions in one direction, using handleNextClick
  const handleClasses = (index) => {
    // Default to hidden slide class
    let classList = "transform z-30 -translate-x-full z-10 hidden";
    // Current slide class
    if (index === slide) {
      classList = "transform z-20 translate-x-0 z-30";
    }
    // Last slide class
    else if (index === slide - 1 || (index === 4 && slide === 0)) {
      classList = "transform z-30 -translate-x-full z-10";
    }
    // Next slide class
    else if (index === slide + 1 || (index === 0 && slide === 4)) {
      classList = "transform z-10 translate-x-full z-20";
    }
    return classList;
  };

  return (
    <>
      <div className="w-3/4 flex flex-col mx-56 ">
        <div className=" flex w-full justify-between text-sm text-gray-600 m-auto mb-2 mx-2 ">
          <div className=" flex w-1/2 text-sm text-gray-600 m-auto mb-2 mx-2 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-binoculars mx-2"
              viewBox="0 0 16 16"
            >
              <path d="M3 2.5A1.5 1.5 0 0 1 4.5 1h1A1.5 1.5 0 0 1 7 2.5V5h2V2.5A1.5 1.5 0 0 1 10.5 1h1A1.5 1.5 0 0 1 13 2.5v2.382a.5.5 0 0 0 .276.447l.895.447A1.5 1.5 0 0 1 15 7.118V14.5a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 14.5v-3a.5.5 0 0 1 .146-.354l.854-.853V9.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v.793l.854.853A.5.5 0 0 1 7 11.5v3A1.5 1.5 0 0 1 5.5 16h-3A1.5 1.5 0 0 1 1 14.5V7.118a1.5 1.5 0 0 1 .83-1.342l.894-.447A.5.5 0 0 0 3 4.882zM4.5 2a.5.5 0 0 0-.5.5V3h2v-.5a.5.5 0 0 0-.5-.5zM6 4H4v.882a1.5 1.5 0 0 1-.83 1.342l-.894.447A.5.5 0 0 0 2 7.118V13h4v-1.293l-.854-.853A.5.5 0 0 1 5 10.5v-1A1.5 1.5 0 0 1 6.5 8h3A1.5 1.5 0 0 1 11 9.5v1a.5.5 0 0 1-.146.354l-.854.853V13h4V7.118a.5.5 0 0 0-.276-.447l-.895-.447A1.5 1.5 0 0 1 12 4.882V4h-2v1.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5zm4-1h2v-.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5zm4 11h-4v.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5zm-8 0H2v.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5z" />
            </svg>
            {tagCards.map((tag) =>
              tag.name === tags[2] ? (
                <Link  key={tag.id} to={tag.link} className="hover:text-red-600 ">
                  {tag.name}
                </Link>
              ) : null
            )}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-arrow-right-short"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
              />
            </svg>
            Arizona{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-arrow-right-short"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
              />
            </svg>
            <span>{city}</span>
          </div>
          {/* <div className="mr-4">Built in {year}</div> */}
        </div>

        <div
          id="default-carousel"
          className="relative w-full"
          data-carousel="slide"
        >
          <div className=" relative h-56 overflow-hidden rounded-t-2xl shadow-xl md:h-96">
            {images.length > 1 &&
              images.map((image, index) => (
                <div
                  key={index}
                  className={`duration-700 ease-in-out absolute inset-0 transition-transform ${handleClasses(
                    index
                  )}`}
                  data-carousel-item
                >
                  <img
                    src={new URL(`../assets/${image}`, import.meta.url).href}
                    className="absolute block w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    alt="..."
                  />
                </div>
              ))}
          </div>

          <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
            <button
              onClick={() => setSlide(0)}
              type="button"
              className="w-3 h-3 rounded-full bg-white dark:bg-gray-800"
              aria-current="true"
              aria-label="Slide 1"
              data-carousel-slide-to="0"
            ></button>
            <button
              onClick={() => setSlide(1)}
              type="button"
              className="w-3 h-3 rounded-full bg-white dark:bg-gray-800"
              aria-current="true"
              aria-label="Slide 2"
              data-carousel-slide-to="1"
            ></button>
            <button
              onClick={() => setSlide(2)}
              type="button"
              className="w-3 h-3 rounded-full bg-white dark:bg-gray-800"
              aria-current="true"
              aria-label="Slide 3"
              data-carousel-slide-to="2"
            ></button>
            <button
              onClick={() => setSlide(3)}
              type="button"
              className="w-3 h-3 rounded-full bg-white dark:bg-gray-800"
              aria-current="true"
              aria-label="Slide 4"
              data-carousel-slide-to="3"
            ></button>
            {/* <button
              onClick={() => setSlide(4)}
              type="button"
              className="w-3 h-3 rounded-full bg-white dark:bg-gray-800"
              aria-current="true"
              aria-label="Slide 5"
              data-carousel-slide-to="4"
            ></button> */}
          </div>
          <button
            onClick={handlePreviousClick}
            type="button"
            className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-prev
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>
          <button
            onClick={handleNextClick}
            type="button"
            className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-next
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Carousel;
