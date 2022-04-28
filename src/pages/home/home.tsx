import React, { useEffect, useState } from "react";
import {
  IApiResourcesList,
  IApiResources,
  IPokemon,
} from "../../global/api/interfaces";

export default function Home() {
  const [pokeData, setPokeData] = useState<IPokemon[]>([]);
  // const [currentPage, setCurrentPage] = useState(0);
  // const [nextUrl, setNextUrl] = useState<URL>();

  useEffect(() => {
    const ENDPOINT = "https://pokeapi.co/api/v2/pokemon/";
    const URL_CONFIGURED = `${ENDPOINT}?offset=${0}&limit=${10}`;
    fetch(URL_CONFIGURED)
      .then((response) => response.json())
      .then((newPokemons: IApiResourcesList) => {
        // setNextUrl(newPokemons.next);
        getPokemons(newPokemons.results);
      });
  }, []);

  const getPokemons = async (res: IApiResources[]) => {
    res.map(async (item) => {
      fetch(item.url)
        .then((response) => response.json())
        .then((pokes: IPokemon) => {
          setPokeData([...pokeData, pokes]);
          console.log(pokes);
        });
    });
  };

  return <div></div>;
}
