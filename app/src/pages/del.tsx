import { trpc } from "../utils/trpc";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import client from "../../client";
import { HomeQuery } from "../utils/groq";

async function getReports() {
  const reports = await client.fetch(HomeQuery);
  return reports;
}

const Del = () => {
  const dataQuery = useQuery(["reports"], getReports);
  if (dataQuery.error) {
    console.log(dataQuery.error);
  }
  console.log(dataQuery.data);
  // const reports = trpc.example.getReports(HomeQuery);

  return <div>Hey Boo</div>;
};

export default Del;
