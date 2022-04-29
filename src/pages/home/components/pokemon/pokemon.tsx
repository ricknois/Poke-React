import { Box, Flex, Text, Image } from "@chakra-ui/react";

type Props = {
  name: String;
  imgUrl: string;
  id: number;
  type: String;
};

export default function Pokemon({ name, imgUrl, id, type }: Props) {
  return (
    <Box
      border="2px"
      borderColor={`pokeType.${type}`}
      m="1.5"
      borderRadius="xl"
      w="104px"
      h="112px"
    >
      <Flex pt="4px" pr="4px" w="100%" justifyContent="end">
        <Text
          color={`pokeType.${type}`}
          fontSize="8px"
          textAlign="end"
          fontFamily="Poppins"
        >
          {`#${id}`}
        </Text>
      </Flex>
      <Flex w="100%" justifyContent={"center"}>
        <Image src={imgUrl} alt={`${name} photo`} h="72px" w="72px" />
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
    </Box>
  );
}
