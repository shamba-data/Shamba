import React from "react";

const FAQ = () => {
  return (
    <>
      <div className="bg-gray-50">
        <div className="mx-auto max-w-7xl py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl divide-y-2 divide-gray-200">
            <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Frequently asked questions
            </h2>
            <dl className="mt-6 space-y-6 divide-y divide-gray-200">
              <div className="pt-6">
                <dt className="text-lg">
                  <button
                    type="button"
                    className="flex w-full items-start justify-between text-left text-gray-400"
                    aria-controls="faq-0"
                    aria-expanded="false"
                  >
                    <span className="font-medium text-gray-900">
                      What&#039;s the best thing about Switzerland?
                    </span>
                    <span className="ml-6 flex h-7 items-center">
                      {/* <!--
                  Expand/collapse icon, toggle classNamees based on question open state.

                  Heroicon name: outline/chevron-down

                  Open: "-rotate-180", Closed: "rotate-0"
                --> */}
                      <svg
                        className="h-6 w-6 rotate-0 transform"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </span>
                  </button>
                </dt>
                <dd className="mt-2 pr-12" id="faq-0">
                  <p className="text-base text-gray-500">
                    I don&#039;t know, but the flag is a big plus. Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Quas cupiditate
                    laboriosam fugiat.
                  </p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
