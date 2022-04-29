import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IPokemon } from "../../global/api/interfaces";

export default function PokeDetails() {
  const params = useParams();
  const [pokeData, setPokeData] = useState<Partial<IPokemon>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`)
      .then((response) => response.json())
      .then((pokemon: IPokemon) => {
        setPokeData({ ...pokemon });
        setLoading(false);
      });
  }, []);

  return loading ? (
    <div>loading...</div>
  ) : (
    <div>
      <div>{pokeData.name}</div>
    </div>
  );
}
