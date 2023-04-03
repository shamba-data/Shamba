import { Nav, Footer, HeadSeo } from "../../components/landingPage";

const Index = () => {
  return (
    <>
      <HeadSeo title="Send Market Info" />
      <main>
        <Nav />
        <h3 className="mt-[5rem] text-center text-2xl font-medium text-gray-900">
          Enter today's Market Prices for the Farmers
        </h3>
        <form className="mt-5 flex flex-col items-center">
          <textarea className="mt-2 h-[200px] w-[350px] rounded-md border-[1px] border-slate-300 bg-transparent py-2 px-2 text-gray-900 outline-none focus:outline-none focus:ring-2 focus:ring-green"></textarea>
          <button className="mt-5 cursor-pointer rounded-md bg-green py-2 px-6 text-white">
            Send
          </button>
        </form>
      </main>
      <Footer />
    </>
  );
};
export default Index;
