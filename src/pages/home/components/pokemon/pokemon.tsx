import { Flex, Text, Image, Box } from "@chakra-ui/react";
import Info from "../../../pokeDetails/components/Info";
import WeightIcon from "../../../../global/assets/Weight.png";
import HeightIcon from "../../../../global/assets/Height.png";
import { Ability } from "../../../../global/api/interfaces";

type Props = {
  name: String;
  imgUrl: string;
  id: number;
  type: String;
  height: number;
  weight: number;
  abilities: Ability[];
};

export default function Pokemon({
  name,
  imgUrl,
  id,
  type,
  height,
  weight,
  abilities,
}: Props) {
  return (
    <Flex
      borderX="2px"
      borderTop="2px"
      bgColor="white"
      borderColor={`pokeType.${type}`}
      m="1.5"
      borderRadius="3xl"
      flexDirection="column"
      w={["180px", "180px", "300px"]}
      h={["180px", "180px", "300px"]}
    >
      <Flex pt="7px" pr="7px" w="100%" justifyContent="end">
        <Text
          color={`pokeType.${type}`}
          fontSize={["10px", "10px", "15px"]}
          textAlign="end"
          fontFamily="Poppins"
        >
          {`#${id}`}
        </Text>
      </Flex>
      <Flex w="100%" justifyContent={"center"} h="full" alignItems="center">
        <Image
          src={imgUrl}
          alt={`${name} photo`}
          h={["90px", "90px", "150px"]}
          w={["90px", "90px", "150px"]}
        />
      </Flex>
      <Flex display={["none", "none", "flex"]}>
        <Info info={weight} title={"Weight"} icon={WeightIcon} />
        <Box h="full" bgColor="gray.300" paddingX="1px"></Box>
        <Info info={height} title={"Height"} icon={HeightIcon} />
        <Box h="full" bgColor="gray.300" paddingX="1px"></Box>
        <Info info={abilities} title={"Moves"} />
      </Flex>
      <Flex
        backgroundColor={`pokeType.${type}`}
        h="24px"
        w="100%"
        borderBottomRadius="xl"
        justifyContent="center"
        alignItems="center"
      >
        <Text fontFamily="Poppins" fontSize="10px" textAlign="center">
          {name}
        </Text>
      </Flex>
    </Flex>
  );
}
