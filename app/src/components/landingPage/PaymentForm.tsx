import React from "react";

const PaymentForm = () => {
  return (
    <form
      className="flex flex-col justify-center pl-5 md:mt-[2rem] md:ml-[7rem]"
      // action="https://formsubmit.co/b.mboya@alustudent.com"
      // method="POST"
      onSubmit={async (e) => {
        e.preventDefault();
        console.log(formData);
        type Input = inferProcedureInput<AppRouter["farmer"]["add"]>;
        const input: Input = {
          phoneNumber: formData.phoneNumber,
          fullName: formData.fullName,
        };

        try {
          // await farmersRouter.mutateAsync(input);
          setFormData(formStates);
          router.push(
            `https://secure.3gdirectpay.com/payv3.php?ID=09A1B806-229A-4AC6-8076-4E941308690B`
          );

          console.log("It Fucking worked");
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
          value={formData.phoneNumber}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setFormData({
              ...formData,
              phoneNumber: e.target.value,
            });
          }}
          className={inputFieldClasses}
        />
      </div>
      <div className="mt-5 flex flex-col">
        <label>Password</label>
        <input
          type="password"
          required
          id="password"
          value={formData.password}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setFormData({
              ...formData,
              password: e.target.value,
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
          You may receive sms/whatsapp notifications from us and can opt out any
          time.
        </label>
      </div>
      <button
        disabled={farmersRouter.isLoading}
        type="submit"
        className="mt-7 w-[250px] cursor-pointer items-start rounded-md bg-green px-4 py-2 text-lg font-medium text-white"
      >
        Sign Up
      </button>
    </form>
  );
};

export default PaymentForm;
