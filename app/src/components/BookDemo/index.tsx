//use-client

import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { FaGlobeAfrica } from "react-icons/fa";

export default function BookDemo() {
  const [startDate, setStartDate] = React.useState(new Date());
  // state when the meeting has been booked
  const [success, setShowSuccess] = React.useState(false);
  const divClasses = "flex flex-col";
  const labelClasses = "text-gold mt-3 text-lg";
  const inputClasses =
    "focus:outline-none w-[200px] border-[1px] rounded-sm p-1 border-green ";

  return (
    <>
      <section className="pt-[3rem] font-montserrat">
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          showTimeSelect
          minDate={new Date()}
          // shouldCloseOnSelect={false}
        >
          <div className="text-[1rem]">
            <h3 className="font-bold text-green">Time Zone</h3>

            <div className="flex space-x-2">
              <span>
                <FaGlobeAfrica size={20} fill="#46783E" />
              </span>
              <p>East Africa Time</p>
            </div>
          </div>
        </DatePicker>

        <div className="pl-3 pt-3">
          <h3 className="text-lg font-medium text-green">
            {/* {startDate.toLocaleDateString("en-us", {
                  weekday: "long",
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })} */}
            {startDate.toString()}
          </h3>
        </div>

        {/* The Fuckin form */}
        {!success && (
          <div className="flex flex-col items-center justify-center">
            <h3 className="pt-5 text-lg font-medium text-gold">
              Please Enter your details
            </h3>
            <form className="ml-5">
              <div className={divClasses}>
                <label className={labelClasses}>Name</label>
                <input
                  type="text"
                  required
                  placeholder="Koundre Aime Bah"
                  name="Names"
                  className={inputClasses}
                />
              </div>
              <div className={divClasses}>
                <label className={labelClasses}>Email</label>
                <input
                  type="email"
                  required
                  placeholder="bah@shamba.io"
                  name="Email"
                  className={inputClasses}
                />
              </div>
              <div className={divClasses}>
                <label className={labelClasses}>
                  What are you planning to use Shamba Data for
                </label>
                <input
                  type="text"
                  required
                  placeholder="Academic Research"
                  className={inputClasses}
                />
              </div>

              <button
                className="mt-5 cursor-pointer rounded-md bg-gold px-2 py-1 text-white"
                type="submit"
                onSubmit={(event) => {
                  event.preventDefault();
                  setShowSuccess(!success);
                }}
              >
                Confirm Time
              </button>
            </form>
          </div>
        )}
      </section>
    </>
  );
}
