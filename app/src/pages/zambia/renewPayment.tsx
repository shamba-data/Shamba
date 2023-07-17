import { type ChangeEvent, useState, useEffect } from "react";
import BlurImage from "../../components/UI/BlurImage";
import { trpc as api } from "../../utils/trpc";
import Link from "next/link";
import Layout from "../../components/Layout";
import EditAccount from "../../components/priceUpdates/EditAccount";

let farmers: { phoneNumber: string; fullName: string }[] = [];

function GetAutoCompleteResult(
  query: string,
  signal?: AbortSignal
): Promise<{ phoneNumber: string; fullName: string }[]> {
  return new Promise((resolve, reject) => {
    if (signal?.aborted) {
      reject("Request aborted");
    }
    resolve(farmers.filter((farmer) => farmer.phoneNumber.includes(query)));
  });
}

function useDebounceValue(value: string, delay = 250): string {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timeout);
    };
  }, [value, delay]);

  return debouncedValue;
}

const Success = () => {
  const [query, setQuery] = useState<string>("");
  const [suggestions, setSuggestions] = useState<
    { phoneNumber: string; fullName: string }[]
  >([]);
  const debounceQuery = useDebounceValue(query);
  const controller = new AbortController();
  farmers = api.farmer.byPhoneNumber.useQuery().data;

  useEffect(() => {
    const signal = controller.signal;
    (async () => {
      setSuggestions([]);
      if (query.length > 0) {
        const data = await GetAutoCompleteResult(debounceQuery, signal);
        setSuggestions(data);
      }
    })();
    return () => controller.abort("cancel request");
  }, [debounceQuery]);

  return (
    <Layout pageTitle="Renew Payment">
      <main className="mt-[6rem]  md:mt-[12rem] md:flex md:items-center md:justify-center">
        <>
          <section className="flex flex-col items-center md:flex-row  md:justify-center md:gap-[3rem] xl:gap-[6rem]">
            <div className="flex flex-col items-center md:w-[450px] md:items-start xl:w-[550px]">
              <h3 className="text-center text-2xl md:text-4xl">
                Edit Your{" "}
                <span className="font-medium text-gold">Shamba Data</span>{" "}
                subscription
              </h3>
              <EditAccount />

              {/* <p className="mt-5 text-center tracking-wide text-gray-900 md:text-left md:text-xl md:tracking-wider">
                Please Enter your Phone Number below
              </p> */}

              {/* <div className="mt-5 flex flex-col md:items-center md:justify-between md:space-y-5">
                <label>Phone Number</label>
                <input
                  type="text"
                  name="phone"
                  value={query}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    setQuery(e.target.value);
                  }}
                  placeholder="+260780321731"
                  className="mt-3 w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 focus:border-gold focus:outline-none md:mt-0 md:w-[300px]"
                />

                {query.length > 9 &&
                  suggestions?.map((suggestion) => (
                    <section>
                      <h1 className="mt-[2rem] text-lg">
                        Below are your Details
                      </h1>
                      <div className="flex items-center space-x-5">
                        <p className="text-xl">Full Name</p>

                        <p className="text-lg">{suggestion.fullName}</p>
                      </div>

                      <div className="flex items-center space-x-5">
                        <p className="text-xl">Phone Number</p>

                        <p className="text-lg">{suggestion.phoneNumber}</p>
                      </div>
                    </section>
                  ))}

                {suggestions.length === 0 && query.length > 0 && (
                  <p className="text-red-500">No suggestions found</p>
                )}
                <Link href="https://secure.3gdirectpay.com/payv3.php?ID=09A1B806-229A-4AC6-8076-4E941308690B">
                  <button
                    type="submit"
                    className="mt-3 w-full rounded-md   bg-green px-4 py-3 text-white md:mt-0 md:w-[300px]"
                  >
                    Proceed to Payment
                  </button>
                </Link>
              </div> */}
            </div>
            <div className="relative mt-5 h-[500px] w-[350px] md:mt-0 md:w-[490px]">
              <BlurImage
                imageUrl="/contact.png"
                preload={true}
                rounded={false}
              />
            </div>
          </section>
        </>
      </main>
    </Layout>
  );
};

export default Success;
