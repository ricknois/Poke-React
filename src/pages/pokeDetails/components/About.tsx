import { Box, Flex, Text } from "@chakra-ui/react";
import { Ability } from "../../../global/api/interfaces";
import WeightIcon from "../../../global/assets/Weight.png";
import HeightIcon from "../../../global/assets/Height.png";
import Info from "./Info";

type Props = {
  height: number;
  weight: number;
  abilities: Ability[];
  color: String;
};

export default function About({ weight, height, abilities, color }: Props) {
  return (
    <Flex flexDirection="column" w="full" alignItems="center" mt="16px">
      <Text
        color={`pokeType.${color}`}
        fontFamily="Poppins"
        fontWeight="bold"
        fontSize="14px"
        mb="16px"
      >
        About
      </Text>
      <Flex
        flexDirection="row"
        h="42px"
        justifyContent="space-around"
        alignContent="space-around"
        w="80%"
      >
        <Info info={weight} title={"Weight"} icon={WeightIcon} />
        <Box h="full" bgColor="gray.300" paddingX="1px"></Box>
        <Info info={height} title={"Height"} icon={HeightIcon} />
        <Box h="full" bgColor="gray.300" paddingX="1px"></Box>
        <Info info={abilities} title={"Moves"} />
      </Flex>
      <Text
        color="grayScale.dgray"
        fontSize="12px"
        mt="15px"
        paddingX="25px"
        textAlign="justify"
      >
        There is a plant seed on its back right from the day this Pokémon is
        born. The seed slowly grows larger.
      </Text>
    </Flex>
  );
}
