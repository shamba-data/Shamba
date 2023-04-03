import { Nav, Footer, HeadSeo } from "../../components/landingPage";
import { trpc as api } from "../../utils/trpc";
import { useState, type ChangeEvent } from "react";
import { inferProcedureInput } from "@trpc/server";
import { AppRouter } from "../../server/trpc/router/_app";
import { useRouter } from "next/router";

const Index = () => {
  const [info, setInfo] = useState<string>("");
  const router = useRouter();
  const infoRouter = api.farmer.marketInfo.useMutation({
    onSuccess: () => {
      router.push("/zambia/marketSuccess");
    },
  });
  return (
    <>
      <HeadSeo title="Send Market Info" />
      <main>
        <Nav />
        <h3 className="mt-[5rem] text-center text-2xl font-medium text-gray-900 md:mt-[8rem]">
          Enter today's Market Prices for the Farmers
        </h3>
        <form
          className="mt-5 flex flex-col items-center"
          onSubmit={async (e: ChangeEvent<HTMLFormElement>) => {
            e.preventDefault();
            type Input = inferProcedureInput<AppRouter["farmer"]["marketInfo"]>;
            const input: Input = {
              info,
            };
            try {
              await infoRouter.mutateAsync(input);
              setInfo("");
            } catch (error) {
              console.log(error);
            }
          }}
        >
          <textarea
            className="mt-2 h-[200px] w-[350px] rounded-md border-[1px] border-slate-300 bg-transparent py-2 px-2 text-gray-900 outline-none focus:outline-none focus:ring-2 focus:ring-green"
            value={info}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
              setInfo(e.target.value)
            }
          ></textarea>
          {infoRouter.error && (
            <p className="mt-2 text-sm text-red-500">
              {infoRouter.error.message}
            </p>
          )}
          <button
            className="mt-5 cursor-pointer rounded-md bg-green py-2 px-6 text-white"
            disabled={infoRouter.isLoading}
            type="submit"
          >
            {infoRouter.isLoading ? "Sending..." : "Send"}
          </button>
        </form>
      </main>
      <Footer />
    </>
  );
};
export default Index;
