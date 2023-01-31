import Card from "./Card";

const MarketCards = () => {
  return (
    <section className="mt-[5rem] flex flex-col items-center justify-center">
      <div className="text-center text-green">
        <h1 className="font-regular text-xl">We cover these</h1>
        <h3 className="text-2xl font-medium tracking-wide">
          4 Zambian <span className="text-gold">markets.</span>
        </h3>
      </div>

      <div className="mt-7 flex flex-col gap-3 sm:grid sm:grid-cols-4 md:grid-cols-4">
        <Card caption="Chisokoni" image="/chisokoni.webp" buttonColor="gold" />
        <Card
          caption="Kalusambesa"
          image="/kalusambesa.webp"
          buttonColor="green"
        />
        <Card caption="Soweto" image="/soweto.webp" buttonColor="gold" />
        <Card caption="Ndola" image="/ndola.webp" buttonColor="green" />
      </div>
    </section>
  );
};

export default MarketCards;
