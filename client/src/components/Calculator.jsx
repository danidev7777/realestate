import { useState } from "react";

useState;

const Calculator = () => {
  const [housePrice, setHousePrice] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [downPayment, setDownPayment] = useState(0);
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  //   console.log("housePrice: ", housePrice);
  //   console.log("interestRate: ", interestRate);
  //   console.log("downPayment: ", downPayment);

  const calculateMonthlyPayment = () => {
    // Calculate the down payment as 20% of the house price
    // Calculate the loan amount
    const remainingAmount = housePrice - downPayment;

    // Convert the annual interest rate to a monthly interest rate
    const monthlyInterestRate = interestRate / 100 / 12;

    // Calculate the number of monthly payments (assuming a 30-year mortgage)
    const numberOfPayments = 30 * 12;

    console.log(
      housePrice,
      interestRate,
      downPayment,
      remainingAmount,
      monthlyInterestRate,
      numberOfPayments
    );

    // Calculate the monthly payment using the htmlFormula
    setMonthlyPayment(
      (remainingAmount * monthlyInterestRate) /
        (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments))
    );

    // console.log(`Monthly payment: $${monthlyPayment}`);
  };

  // console.log(monthlyPayment);
  return (
    <>
      <div className="flex flex-row justify-between px-4 py-4 mx-12">
        <div className="  rounded-xl ">
          <img
            src={new URL(`../assets/finance.jpg`, import.meta.url).href}
            alt="calculator-img"
            className="w-62 h-40 rounded-2xl "
          />
        </div>

        <div className="flex flex-col w-3/4 px-6">
          <div className="p-4 text-xl text-red-600 font-bold w-3/4 m-auto rounded-xl row-span-3">
            Estimated Monthly Payment: ${" "}<span className="text-red-600">
            {monthlyPayment === 0 || isNaN(monthlyPayment)
              ? "Pending"
              : monthlyPayment.toFixed(2)}</span>
            <hr className=" text-xl font-bold " />
          </div>

          <div className="flex flex-col">
            <div className="flex flex-row justify-around">
              <div className="pb-2">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-[#111827]"
                >
                  House Price
                </label>

                <div className="relative text-gray-400">
                  <span className="absolute inset-y-0 left-0 flex items-center p-1 pl-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-mail"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </svg>
                    
                  </span><p>$</p>
                  <input
                    type="price"
                    name="price"
                    value={housePrice === 0 ? "" : housePrice}
                    className="pl-12 mb-2 bg-gray-50 text-gray-600 border focus:border-transparent border-gray-300 sm:text-sm rounded-lg ring ring-transparent focus:ring-1 focus:outline-none focus:ring-gray-400 block w-full p-2.5 rounded-l-lg py-3 px-4"
                    placeholder="$350000"
                    onChange={(e) => setHousePrice(e.target.value)}
                  />
                </div>
              </div>
              <div className="pb-6">
                <label className="block mb-2 text-sm font-medium text-[#111827]">
                  Interest Rate
                </label>
                <div className="relative text-gray-400">
                  <span className="absolute inset-y-0 left-0 flex items-center p-1 pl-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-square-asterisk"
                    >
                      <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                      <path d="M12 8v8"></path>
                      <path d="m8.5 14 7-4"></path>
                      <path d="m8.5 10 7 4"></path>
                    </svg>
                  </span>
                  <input
                    type="intrest"
                    name="intrest"
                    value={interestRate === 0 ? "" : interestRate}
                    placeholder="20%"
                    className="pl-12 mb-2 bg-gray-50 text-gray-600 border focus:border-transparent border-gray-300 sm:text-sm rounded-lg ring ring-transparent focus:ring-1 focus:outline-none focus:ring-gray-400 block w-full p-2.5 rounded-l-lg py-3 px-4"
                    onChange={(e) => setInterestRate(e.target.value)}
                  />
                </div>
              </div>
              <div className="pb-6">
                <label className="block mb-2 text-sm font-medium text-[#111827]">
                  Down Payment
                </label>
                <div className="relative text-gray-400">
                  <span className="absolute inset-y-0 left-0 flex items-center p-1 pl-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-square-asterisk"
                    >
                      <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                      <path d="M12 8v8"></path>
                      <path d="m8.5 14 7-4"></path>
                      <path d="m8.5 10 7 4"></path>
                    </svg>
                  </span>
                  <input
                    type="payment"
                    name="payment"
                    value={downPayment === 0 ? "" : downPayment}
                    placeholder="$1500"
                    className="pl-12 mb-2 bg-gray-50 text-gray-600 border focus:border-transparent border-gray-300 sm:text-sm rounded-lg ring ring-transparent focus:ring-1 focus:outline-none focus:ring-gray-400 block w-full p-2.5 rounded-l-lg py-3 px-4"
                    onChange={(e) => setDownPayment(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={() => calculateMonthlyPayment()}
            className="w-36 text-[#FFFFFF] bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center m-auto"
          >
            Calculate
          </button>
        </div>
      </div>
    </>
  );
};

export default Calculator;
