import { useQuery } from "react-query";

async function fetchData() {
  const res = await fetch("https://rickandmortyapi.com/api/episode");
  const json = await res.json();
  return json;
}

export function useEpisodes() {
  return useQuery(["Episodes"], fetchData);
}
