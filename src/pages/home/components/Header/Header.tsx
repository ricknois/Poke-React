import {
  Flex,
  Text,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";

import Sort from "../../../../global/assets/Sort.png";
import Pokeball from "../../../../global/assets/Pokeball.png";
import { SearchIcon } from "@chakra-ui/icons";

export default function Header() {
  return (
    <Flex flexDirection="column" w="full" mt="24px" paddingX="16px" mb="8px">
      <Flex alignItems="center" mb="8px">
        <Image
          src={Pokeball}
          alt="Pokeball logo"
          width="24px"
          height="24px"
          mr="16px"
        />
        <Text fontFamily="Poppins" fontWeight="bold" fontSize="24px" w="full">
          Pokédex
        </Text>
        <Image src={Sort} alt="Filter button" />
      </Flex>
      <Flex>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<SearchIcon color="gray.300" />}
          />

          <Input
            variant="filled"
            bgColor="white"
            placeholder="Search"
            borderRadius="md"
          />
        </InputGroup>
      </Flex>
    </Flex>
  );
}
