import React, { useEffect, useRef, useState } from "react";
import {
  IApiResourcesList,
  IApiResources,
  IPokemon,
} from "../../global/api/interfaces";
import { Pokemon } from "./components";

export default function Home() {
  const [pokeData, setPokeData] = useState<IPokemon[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const loadMoreRef = useRef(null);

  useEffect(() => {
    const ENDPOINT = "https://pokeapi.co/api/v2/pokemon/";
    const URL_CONFIGURED = `${ENDPOINT}?offset=${currentPage}&limit=${10}`;
    fetch(URL_CONFIGURED)
      .then((response) => response.json())
      .then((newPokemons: IApiResourcesList) => {
        getPokemons(newPokemons.results);
      });
  }, [currentPage]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "20px",
      threshold: 1.0,
    };
    const observer = new IntersectionObserver((entities) => {
      const target = entities[0];

      if (target.isIntersecting) {
        setCurrentPage((old) => old + 10);
      }
    }, options);

    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }
  }, []);

  const getPokemons = async (res: IApiResources[]) => {
    res.map(async (item) => {
      fetch(item.url)
        .then((response) => response.json())
        .then((pokes: IPokemon) => {
          setPokeData((state) => [...state, pokes]);
          setLoading(false);
        });
    });
  };

  return (
    <div>
      {loading ? (
        <span>loading...</span>
      ) : (
        <div>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {pokeData.map((pokemon, index) => (
              <Pokemon
                key={index}
                name={pokemon.name}
                imgUrl={pokemon.sprites.front_default}
                id={pokemon.id}
                type={pokemon.types[0].type.name}
              />
            ))}
          </div>
          <div ref={loadMoreRef}></div>
        </div>
      )}
    </div>
  );
}
