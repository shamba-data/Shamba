import { ProfileImage, Nav, Footer, HeadSeo } from "../components/landingPage";

const careers = () => {
  return (
    <>
      <HeadSeo title="Careers" />
      <Nav />
      <main className="container mt-[3rem] flex  flex-col items-center justify-center font-montserrat md:max-w-[200ch]">
        <div className="mt-[6rem] text-center">
          <h3 className="text-2xl font-medium md:text-3xl">
            Meet our team of{" "}
            <span className="font-medium text-green">creators</span> and
            <span className="font-medium text-green"> problem solvers.</span>
          </h3>
          <article className="mt-[1.5rem] md:text-lg xl:w-[900px]">
            The team at Shamba Data is always looking for a diverse set of
            skills as we are buidling a product that models and shape the
            complex food system in Africa.
          </article>
        </div>

        <div className="md:grid md:grid-cols-2 md:gap-[2rem] md:space-x-5 lg:flex">
          <ProfileImage ringColor="gold" name="Brighton Mboya" position="CTO" />
          <ProfileImage
            ringColor="green"
            name="Kondwani Ngulube"
            position="CTO"
          />
          <ProfileImage
            ringColor="gold"
            name="Aime Bah"
            position="Product Designer"
          />
          <ProfileImage
            ringColor="green"
            name="Abdul Karim"
            position="Data Analyst"
          />
        </div>

        <h3 className="mt-[2rem] text-xl font-medium text-green md:text-2xl">
          Openings
        </h3>
        <p className="mt-[1rem] text-center text-lg">
          Currently we don&apos;t have any openings. Keep in touch with us in
          our social media pages in case anythings comes up.
        </p>
        <Footer />
      </main>
    </>
  );
};

export default careers;
