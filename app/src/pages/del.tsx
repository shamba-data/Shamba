import React, { useState, type ChangeEvent, useEffect } from "react";
import { trpc as api } from "../utils/trpc";
import { AppRouter } from "../server/trpc/router/_app";
import { inferProcedureInput } from "@trpc/server";
import { useRouter } from "next/router";
import Link from "next/link";
import { trpc } from "../utils/trpc";

function addMonth(dateObj: Date, num: number) {
  dateObj.setMonth(dateObj.getMonth() + num);
  return dateObj.toISOString().split("T")[0].replaceAll("-", "/");
}

const Del = () => {
  const tokenXml = api.payments.getToken.useQuery().data;
  const router = useRouter();
  const FormStates = {
    fullName: "",
    whatsappNumber: "",
  };
  const [sendPayments, setSendPayments] = useState(false);
  const farmersRouter = trpc.farmer.add.useMutation();
  // const sendPayments = () => {
  //   const data = api.payments.sendMobileToken.useQuery({
  //     phoneNumber: FormStates.whatsappNumber,
  //     transactionToken: tokenXml,
  //   });
  //   console.log(data, "Hey boo");
  // };
  const [formData, setFormData] = useState(FormStates);
  const inputFieldClasses =
    "w-[350px] rounded-md border-[1px] border-slate-300 bg-transparent py-2 px-2 text-gray-900 outline-none focus:outline-none mt-2 focus:ring-green focus:ring-2";
  const TOSclass =
    "w-4 h-4 text-gray-900 bg-gray-100 border-slate-300 rounded focus:ring-gold focus:ring-2 ";

  const createdAtDate = new Date()
    .toISOString()
    .split("T")[0]
    .replaceAll("-", "/");
  const expiresAtDate = addMonth(new Date(), 1);

  useEffect(() => {
    console.log("I got triggered");
    sendPayments &&
      api.payments.sendMobileToken.useQuery({
        phoneNumber: formData.whatsappNumber,
        transactionToken: tokenXml,
      });
  }, [sendPayments]);

  return (
    <React.Fragment>
      <form
        className="flex flex-col justify-center pl-5 md:mt-[2rem] md:ml-[7rem]"
        // action="https://formsubmit.co/b.mboya@alustudent.com"
        // method="POST"
        onSubmit={async (e) => {
          e.preventDefault();
          console.log(formData);
          type Input = inferProcedureInput<AppRouter["farmer"]["add"]>;
          const input: Input = {
            phoneNumber: formData.whatsappNumber,
            fullName: formData.fullName,
            createdAt: createdAtDate,
            expiresAt: expiresAtDate,
          };

          try {
            setSendPayments(true);
            // sendPayments();
            // await farmersRouter.mutateAsync(input);
            //send the ussd for payments
            // const paymentRouter = api.payments.sendMobileToken.useQuery({
            //   phoneNumber: formData.whatsappNumber,
            //   transactionToken: tokenXml,
            // });
            setFormData(FormStates);
            if (farmersRouter.isSuccess) {
              router.push("/zambia/success");
            }
          } catch (cause) {
            console.error({ cause }, "Failed to add the new Users");
          }
        }}
      >
        <div className="flex flex-col ">
          <label>Full Name</label>
          <input
            type="text"
            required
            id="userName"
            value={formData.fullName}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setFormData({
                ...formData,
                fullName: e.target.value,
              });
            }}
            className={inputFieldClasses}
          />
        </div>

        <div className="mt-5 flex flex-col">
          <label>Whatsapp Number</label>
          <input
            type="text"
            required
            id="whatsappNumber"
            value={formData.whatsappNumber}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setFormData({
                ...formData,
                whatsappNumber: e.target.value,
              });
            }}
            className={inputFieldClasses}
          />
        </div>

        <div className="mt-5 flex items-center gap-3">
          <input
            id="terms and conditions"
            type="checkbox"
            required
            value=""
            className={TOSclass}
          />
          <label className="text-left text-sm font-medium text-gray-800">
            By registering, you agree to our
            <Link
              href="https://drive.google.com/file/d/1jtE0kkYDu6c4t0pUQC_s6IEBk0nrT_rY/view?usp=sharing"
              replace
            >
              <p className="ml-1 font-medium text-gold hover:underline ">
                Terms and Conditions.
              </p>
            </Link>
            You may receive sms/whatsapp notifications from us and can opt out
            any time.
          </label>
        </div>
        <button
          disabled={farmersRouter.isLoading}
          type="submit"
          className="mt-7 w-[250px] cursor-pointer items-start rounded-md bg-green px-4 py-2 text-lg font-medium text-white"
        >
          {farmersRouter.isLoading ? "Loading..." : "Register"}
        </button>
      </form>
    </React.Fragment>
  );
};

export default Del;