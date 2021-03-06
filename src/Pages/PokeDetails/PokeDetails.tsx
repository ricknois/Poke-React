import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { IPokemon } from "../../global/api/interfaces";
import { Flex, IconButton, Image, Text } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import PokeballSvg from "../../global/assets/PokeballSvg";
import Types from "./Components/Types";
import About from "./Components/About";
import Stats from "./Components/Stats";

export default function PokeDetails() {
  const params = useParams();
  const [pokeData, setPokeData] = useState<IPokemon | any>({});
  const [loading, setLoading] = useState(true);
  const [color, setColor] = useState("");

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`)
      .then((response) => response.json())
      .then((pokemon: IPokemon) => {
        setPokeData({ ...pokemon });
        setColor(pokemon.types[0].type.name);
        setLoading(false);
      });
  }, []);

  return loading ? (
    <div>loading...</div>
  ) : (
    <Flex
      backgroundColor={`pokeType.${color}`}
      h="calc(100vh)"
      flexDirection="column"
    >
      <Flex w="100%">
        <Flex
          position="absolute"
          zIndex="1"
          justifyContent="flex-end"
          alignContent="center"
          w="100%"
          pr="8px"
          pt="8px"
        >
          <PokeballSvg />
        </Flex>
        <Flex
          m="24px"
          alignContent="center"
          justifyContent="center"
          alignItems="center"
          w="100%"
          h="32px"
          zIndex="10"
        >
          <Link to={"/"}>
            <IconButton
              aria-label="Go back to home"
              variant="unstyled"
              color="white"
              icon={<ArrowBackIcon w="24px" h="32px" />}
            />
          </Link>
          <Text
            fontFamily="Poppins"
            fontWeight="bold"
            fontSize="24px"
            color="white"
          >
            {pokeData.name}
          </Text>
          <Text
            fontFamily="Poppins"
            fontWeight="bold"
            fontSize="12px"
            color="white"
            textAlign="end"
            w="100%"
          >
            {`#${("0000" + pokeData.id).slice(-4)}`}
          </Text>
        </Flex>
      </Flex>
      <Flex
        position="absolute"
        zIndex="2"
        top="0"
        w="100%"
        justifyContent="center"
        mt={["30px", "30px", "-10px"]}
      >
        <Image
          src={pokeData.sprites?.front_default}
          alt={`${pokeData.name} photo`}
          h={["300px", "300px", "200px"]}
          w={["300px", "300px", "200px"]}
        />
      </Flex>
      <Flex
        flexDirection="column"
        bgColor="white"
        h="100%"
        mt={["150px", "150px", "40px"]}
        mr="4px"
        ml="4px"
        mb="4px"
        borderRadius="lg"
      >
        <Types types={pokeData.types} />
        <About
          weight={pokeData.weight}
          height={pokeData.height}
          abilities={pokeData.abilities}
          color={color}
        />
        <Stats stats={pokeData.stats} color={color} />
      </Flex>
    </Flex>
  );
}
