import { useQuery } from "react-query";

async function fetchDataPersonnage() {
  const res = await fetch("https://rickandmortyapi.com/api/character");
  const json = await res.json();
  return json;
}

export function usePersonnage() {
  return useQuery(["Personnage"], fetchDataPersonnage);
}
