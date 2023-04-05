import React from "react";
import { trpc as api } from "../utils/trpc";
import { AppRouter } from "../server/trpc/router/_app";
import convert from "xml-js";
import { useQuery } from "@tanstack/react-query";

const del = () => {
  //   const token = getToken();
  const tokenXml = api.payments.getToken.useQuery().data;

  console.log(tokenXml);
  //   if (tokenXml !== null) {
  //     //@ts-ignore
  //     const parsedToken = convert.xml2js(tokenXml, {
  //       compact: false,
  //       spaces: 4,
  //     });
  //     const token = parsedToken["API3G"];
  //   }

  //   console.log(router.data, "nooo");

  return <div>del</div>;
};

export default del;
