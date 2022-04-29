import { Flex, Text } from "@chakra-ui/react";
import { Type } from "../../../global/api/interfaces";

type Props = {
  types?: Type[];
};
export default function Types({ types }: Props) {
  return (
    <Flex
      h="fit-content"
      w="full"
      alignContent="center"
      justifyContent="center"
      mt="80px"
    >
      {types?.map((type) => (
        <Flex
          bgColor={`pokeType.${type.type.name}`}
          paddingX="15px"
          paddingY="5px"
          borderRadius="xl"
          marginX="5px"
        >
          <Text
            color="white"
            fontFamily="Poppins"
            fontSize="10px"
            fontWeight="bold"
          >
            {type.type.name}
          </Text>
        </Flex>
      ))}
    </Flex>
  );
}
