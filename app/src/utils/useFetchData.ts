import client from "../../client"

interface Props {
    query: string,
    slug?: string
}
async function useFetchData({query, slug}:Props) {
  const data = await client.fetch(query);
  return data;
}

export default useFetchData;