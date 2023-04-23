import Link from "next/link";
import { trpc } from "../../utils/trpc";
import { AppRouter } from "../../server/trpc/router/_app";
import { inferProcedureInput } from "@trpc/server";
import { useState, type ChangeEvent } from "react";
import { useRouter } from "next/router";

const Footer = () => {
  const date = new Date();
  const router = useRouter();
  const subscribersRouter = trpc.subscriber.add.useMutation({
    onSuccess: () => {
      router.push("/zambia/success");
    },
  });
  const [email, setEmail] = useState<string>("");
  return (
    <footer className="mt-[100px] w-full bg-green font-montserrat">
      <div className="md:flex md:flex-row-reverse md:items-start md:justify-center md:gap-[2rem]">
        <div className="mt-[30px] flex flex-col items-center justify-center">
          <h3 className="pt-5 text-xl font-medium tracking-wide text-white">
            Shamba Data
          </h3>
          <p className="mt-[4.5px] text-center text-lg text-white">
            Subscribe to receive our product updates
          </p>
          <form
            className="-ml-[80px]"
            onSubmit={async (e: ChangeEvent<HTMLFormElement>) => {
              e.preventDefault();
              type Input = inferProcedureInput<AppRouter["subscriber"]["add"]>;
              const input: Input = {
                email: email,
              };

              try {
                await subscribersRouter.mutateAsync(input);
                setEmail("");
              } catch (cause) {
                console.log(cause);
              }
            }}
          >
            <div className="relative mt-[10px]">
              <label className="hidden">Email</label>
              <input
                type="email"
                name="Email"
                value={email}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setEmail(e.target.value)
                }
                placeholder="Enter your Email"
                className="h-[44px] w-[194px] rounded-md bg-gold px-2 text-white placeholder:text-white focus:outline-none"
              />
              <button
                className="absolute -right-[57%] top-[.8px] h-[44px] w-[100px] rounded-md bg-white"
                type="submit"
                disabled={
                  email.trim().length === 0 || subscribersRouter.isLoading
                }
              >
                {subscribersRouter.isLoading ? "Loading..." : "Subscribe"}
              </button>
            </div>
          </form>
        </div>
        <div className="mt-[37px] flex flex-col items-start justify-start pl-[30px] sm:pb-[2rem] md:flex-row md:gap-[3rem] md:pl-0">
          <div>
            <h3 className="text-lg font-medium text-white">Company</h3>
            <ul className="flex flex-col space-y-3 text-[#B5C9B2]">
              <Link href="/contactus">
                <li className=" cursor-pointer">Contact Us</li>
              </Link>

              <Link href="/careers">
                <li className=" cursor-pointer">Careers</li>
              </Link>

              <Link href="/zambia">
                <li className=" cursor-pointer">Zambia</li>
              </Link>

              {/* <Link href="/construction">
                <li className=" cursor-pointer">Why Choose Us</li>
              </Link> */}

              {/* <Link href="/construction">
                <li className=" cursor-pointer">Pricing</li>
              </Link> */}

              {/* <Link href="/construction">
                <li className=" cursor-pointer">Testimonial</li>
              </Link> */}
            </ul>
          </div>
          <div>
            <h3 className="mt-5 text-lg font-medium text-white md:mt-0">
              Resources
            </h3>

            <ul className="flex flex-col space-y-3 text-[#B5C9B2]">
              <Link href="https://drive.google.com/file/d/1jtE0kkYDu6c4t0pUQC_s6IEBk0nrT_rY/view?usp=sharing">
                <li className="mt-5 cursor-pointer">Privacy Policy</li>
              </Link>

              <Link
                href="https://drive.google.com/file/d/1jtE0kkYDu6c4t0pUQC_s6IEBk0nrT_rY/view?usp=sharing"
                replace
              >
                <li className="cursor-pointer">Terms and Conditions</li>
              </Link>

              {/* <Link href="/construction">
                <li className="cursor-pointer">Blog</li>
              </Link> */}
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-[72px] md:flex md:items-center md:justify-center md:gap-[2rem]">
        <h3 className="text-center text-lg text-white">
          Copyright @ <span>{date.getFullYear().toLocaleString()}</span>
        </h3>
      </div>
    </footer>
  );
};

export default Footer;
