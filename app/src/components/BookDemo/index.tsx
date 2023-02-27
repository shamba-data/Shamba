//use-client
import Script from "next/script";
export default function BookDemo() {
  return (
    <>
      <Script
        type="text/javascript"
        src="https://assets.calendly.com/assets/external/widget.js"
        async
      />
      <div
        className="calendly-inline-widget h-[630px] min-w-[320px] lg:h-[630px] lg:min-w-[320px]"
        data-url="https://calendly.com/shamba-data/shamba-data-demo"
        // style="min-width:320px;height:630px;"
      ></div>
    </>
  );
}
