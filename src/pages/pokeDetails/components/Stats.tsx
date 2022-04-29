import { Flex, Stack, Text, Progress } from "@chakra-ui/react";
import { Stat } from "../../../global/api/interfaces";

type Props = {
  stats: Stat[];
  color: String;
};

const dictionary: any = {
  hp: "HP",
  attack: "ATK",
  defense: "DEF",
  "special-attack": "SATK",
  "special-defense": "SDEF",
  speed: "SPD",
};

export default function Stats({ stats, color }: Props) {
  return (
    <Flex flexDirection="column" w="full" mt="16px " paddingX="25px">
      <Text
        color={`pokeType.${color}`}
        fontFamily="Poppins"
        fontWeight="bold"
        fontSize="14px"
        textAlign="center"
        mb="16px"
      >
        Base Stats
      </Text>
      <Stack spacing={0.5}>
        {stats.map((stat) => (
          <Flex alignItems="center">
            <Text
              color={`pokeType.${color}`}
              fontSize="10px"
              fontFamily="Poppins"
              fontWeight="bold"
              w="8%"
            >
              {dictionary[stat.stat.name]}
            </Text>
            <Text fontSize="10px" fontFamily="Poppins" w="8%">
              {`${("000" + stat.base_stat).slice(-3)}`}
            </Text>
            <Progress
              colorScheme="gray"
              size="xs"
              value={stat.base_stat}
              max={200}
              w="84%"
            />
          </Flex>
        ))}
      </Stack>
    </Flex>
  );
}
