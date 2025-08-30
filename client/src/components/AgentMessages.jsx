import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const AgentMessages = ({ broker, realtor }) => {
  console.log("broker: ", broker);
  console.log("realtor: ", realtor);
  const [showMessage, setShowMessage] = useState(false);
  const [messageIds, setMessageIds] = useState([]);

  const [messageData, setMessageData] = useState([
    {
      realtor: "",
      property: "",
      message: "",
      buyerEmail: "",
    },
  ]);
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
  useEffect(() => {
    const getMessages = async () => {
      const messageData = await axios.get(
        `${import.meta.env.VITE_NODE_SERVER}/messages`
      );
      // console.log("messageData", messageData.data.messages);
      setMessageData(messageData.data.messages);
      // console.log("messages: ", messageData);
    };
    getMessages();
  }, []);

  const handleShowMessage = (id) => {
    // const selectedMessages = messageData.filter((m) => m.id === id);
    // console.log(selectedMessage.id);
    // console.log(messageId);

    if (messageIds.includes(id)) {
      setShowMessage(false);
      setMessageIds(messageIds.filter((m) => m != id));
    } else {
      setShowMessage(true);
      setMessageIds([...messageIds, id]);
    }
  };
  const [messageDeleteId, setMessageDeleteId] = useState("");
  const [showDelete, setShowDelete] = useState(false);

  const deleteClick = (id) => {
    console.log("delete btn clicked");
    const selectedDelete = messageData.find((message) => message.id === id);
    if (selectedDelete != "") {
      console.log(selectedDelete);
      setShowDelete(true);
      window.scrollTo(0, 0);

      setMessageDeleteId(selectedDelete.id);
    }
  };
  // this closes the delete confirmation modal
  const cancelClick = () => {
    setShowDelete(false);
  };

  const handleDelete = async (id) => {
    // console.log("delete btn clicked")
    const deleted = await axios.delete(
      `${import.meta.env.VITE_NODE_SERVER}/messages/${id}`
    );
    console.log(deleted);
    const selectedDelete = messageData.find((message) => message.id === id);
    if (selectedDelete != "") {
      console.log(selectedDelete);
      setShowDelete(false);

      setMessageDeleteId(selectedDelete.id);
    }
  };
  return (
    <>
      <div className="mt-4">
        <h2 className="text-center bg-slate-700 text-white text-xl py-2 font-semibold">
          Messages for {realtor}
        </h2>
        <ul role="list" className=" w-3/4 m-auto divide-y divide-gray-100">
          {messageData.map((item) =>
            item.realtor == realtor ? (
              <li
                key={item.id}
                className="flex justify-between gap-x-6 py-5 mr-2"
              >
                <div className="flex min-w-0 gap-x-4">
                  <div className="min-w-0 ">
                    <p className="text-sm/6 text-slate-600">
                      <span className="text-sm/6 font-bold text-slate-600">
                        {item.realtor}
                      </span>{" "}
                      you have a message regarding{" "}
                      <span className="text-sm/6 font-semibold text-slate-600">
                        {item.property}
                      </span>
                    </p>
                    <br />
                    {messageIds.includes(item.id) && (
                      <div className="flex min-w-0 ">
                        <div className="text-sm/6 text-gray-900 border p-4 rounded-xl">
                          <p className="text-center font-semibold underline">
                            Inquiry About Your Listed Property at{" "}
                            {item.property}
                          </p>
                          <span className="flex">
                            {" "}
                            <p>
                              <span className="font-bold text-slate-600">
                                From:
                              </span>{" "}
                              {item.buyerEmail}
                            </p>
                          </span>
                          <p>
                            <span className="font-bold text-slate-600">
                              Subject:{" "}
                            </span>
                            Inquiry About Your Listed Property at{" "}
                            {item.property}
                          </p>
                          <span className="font-bold text-slate-600">
                            {" "}
                            <p> Message: </p>
                          </span>
                          <p>{item.message}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className=" flex">
                  <button
                    className="mt-1 text-xs/5 "
                    onClick={() => handleShowMessage(item.id)}
                  >
                    {messageIds.includes(item.id) ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="size-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="size-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                      </svg>
                    )}
                  </button>

                  <button
                    className="mt-1 text-xs/5 text-red-600"
                    onClick={() => {deleteClick(item.id);setShowDelete(!showDelete)}}
                  >
                    {showMessage != true ? (
                      ""
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        class="size-5"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M8.75 1A2.75 2.75 0 0 0 6 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 1 0 .23 1.482l.149-.022.841 10.518A2.75 2.75 0 0 0 7.596 19h4.807a2.75 2.75 0 0 0 2.742-2.53l.841-10.52.149.023a.75.75 0 0 0 .23-1.482A41.03 41.03 0 0 0 14 4.193V3.75A2.75 2.75 0 0 0 11.25 1h-2.5ZM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4ZM8.58 7.72a.75.75 0 0 0-1.5.06l.3 7.5a.75.75 0 1 0 1.5-.06l-.3-7.5Zm4.34.06a.75.75 0 1 0-1.5-.06l-.3 7.5a.75.75 0 1 0 1.5.06l.3-7.5Z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    )}
                  </button>
                  {item.id === messageDeleteId
                    ? showDelete && (
                        <div className="flex justify-between">
                          {/* <button
                            className="text-red-600 font-semibold"
                            onClick={() => setShowDelete(false)}
                          >
                            No
                          </button> */}
                          <button
                            className="text-green-600 font-semibold"
                            onClick={() => handleDelete(item.id)}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="green"
                              class="size-5"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                                clip-rule="evenodd"
                              />
                            </svg>
                          </button>
                        </div>
                      )
                    : null}
                </div>
              </li>
            ) : null
          )}
        </ul>
      </div>
    </>
  );
};
export default AgentMessages;
