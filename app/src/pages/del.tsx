import React from "react";
import { trpc as api } from "../utils/trpc";
import { AppRouter } from "../server/trpc/router/_app";

const del = () => {
  const tokenXml = api.payments.getToken.useQuery().data;
  // const paymentRouter = api.payments.sendMobileToken.useQuery({
  //   phoneNumber: "260978964998",
  //   transactionToken: tokenXml,
  // });

  console.log(tokenXml);

  return <div>del</div>;
};

export default del;
