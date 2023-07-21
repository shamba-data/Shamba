import { useForm, SubmitHandler } from "react-hook-form";
import { inferProcedureInput } from "@trpc/server";
import { AppRouter } from "../../server/trpc/router/_app";
import { trpc } from "../../utils/trpc";
import { ToastAction } from "../../components/UI/Toast";
import { useToast } from "../../hooks/useToast";
import { useRouter } from "next/router";
import Link from "next/link";
import { Label, Input, Button } from "../UI";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  fullName: z.string().nonempty(),
  whatsappNumber: z.string().regex(/^260\d{9}$/),
});

type ValidationSchema = z.infer<typeof schema>;

// function to add a month to a date for the expiresAt field

function addMonth(dateObj: Date, num: number) {
  dateObj.setMonth(dateObj.getMonth() + num);
  const dateString = dateObj?.toISOString()?.split("T")[0];
  if (dateString) {
    return dateString.replace(/-/g, "/");
  }
  return "";
}

const RegistrationForm = () => {
  const router = useRouter();
  const { toast } = useToast();

  const TOSclass =
    "w-4 h-4 text-gray-900 bg-gray-100 border-slate-300 rounded accent-green ";

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ValidationSchema>({ resolver: zodResolver(schema) });

  const farmersRouter = trpc.farmer.add.useMutation({});
  const tokenXml = trpc.payments.getToken.useQuery().data;
  const paymentRouter = trpc.payments.sendMobileToken.useMutation({
    onSuccess: () => {
      router.push("/zambia/success");
    },
    onError: (error) => {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: ` ${error.message}`,
        action: <ToastAction altText="Try again">Try again</ToastAction>,
        duration: 1500,
      });
    },
  });

  const onSubmit: SubmitHandler<ValidationSchema> = (data) => {
    type Input = inferProcedureInput<AppRouter["payments"]["sendMobileToken"]>;
    const input: Input = {
      phoneNumber: data.whatsappNumber,
      transactionToken: tokenXml,
    };
    type newFarmerInput = inferProcedureInput<AppRouter["farmer"]["add"]>;
    // some fancy ass stuff for the dates
    const createdAtDate = new Date()
      ?.toISOString()
      ?.split("T")[0]
      ?.replaceAll("-", "/") as string;
    const expiresAtDate = addMonth(new Date(), 1);
    const newFarmerInput: newFarmerInput = {
      fullName: data.fullName,
      phoneNumber: data.whatsappNumber,
      expiresAt: expiresAtDate,
      createdAt: createdAtDate,
    };
    console.log(data);
    try {
      paymentRouter.mutateAsync(input);
      farmersRouter.mutateAsync(newFarmerInput);
    } catch (cause) {
      console.log(cause);
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: `Please make sure your number is a valid Zambian number`,
        action: <ToastAction altText="Try again">Try again</ToastAction>,
        duration: 1500,
      });
    }
  };
  return (
    <form
      className="flex flex-col justify-center space-y-5 pl-5 md:mt-[2rem] md:ml-[7rem]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col ">
        <Label htmlFor="userName" className="relative">
          Full Name{" "}
          <sup className="text-medium absolute bottom-0 text-lg text-red-600">
            *
          </sup>
        </Label>

        <Input
          {...register("fullName")}
          className="mt-2 w-[350px]"
          placeholder="Hariet Ngulube"
        />
        {errors?.fullName?.message && (
          <span className="text-sm text-red-500">
            Please enter your full name
          </span>
        )}
      </div>

      <div className="mt-5 flex flex-col">
        <Label htmlFor="whatsappNumber" className="relative">
          Whatsapp Number{" "}
          <sup className="text-medium absolute bottom-0 text-lg text-red-600">
            *
          </sup>
        </Label>

        <Input
          type="string"
          placeholder="260780321733"
          {...register("whatsappNumber")}
          className="mt-2 w-[350px]"
        />
        {errors?.whatsappNumber?.message && (
          <span className="text-sm text-red-500">
            Please enter a whatsapp number in form of 260xxxxxxxxx
          </span>
        )}
      </div>

      <div className="mt-5 flex items-center gap-3">
        <Input
          id="terms and conditions"
          type="checkbox"
          required
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

      {farmersRouter.error && (
        <div className="text-sm text-red-500">
          <h3>Something went wrong, try again</h3>
        </div>
      )}

      <Button disabled={farmersRouter.isLoading} type="submit">
        {farmersRouter.isLoading ? "Loading..." : " Sign Up"}
      </Button>
    </form>
  );
};

export default RegistrationForm;
