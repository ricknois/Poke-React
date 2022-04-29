import { Flex, Image, Text } from "@chakra-ui/react";

type Props = {
  icon?: any;
  info: any;
  title: String;
};

export default function Info({ info, icon, title }: Props) {
  return (
    <Flex
      flexDirection="column"
      justifyContent="center"
      w="full"
      alignContent="center"
    >
      {icon ? (
        <Flex justifyContent="center">
          <Image src={icon} mr="5px" />
          <Text
            color="grayScale.dgray"
            fontSize="10px"
            fontFamily="Poppins"
          >{`${info / 10} kg`}</Text>
        </Flex>
      ) : (
        info.map((item: any) => (
          <Text
            textAlign="center"
            fontFamily="Poppins"
            color="grayScale.dgray"
            fontSize="10px"
          >
            {item.ability.name}
          </Text>
        ))
      )}
      <Text
        fontFamily="Poppins"
        textAlign="center"
        fontSize="8px"
        color="grayScale.mgray"
        mt="2px"
      >
        {title}
      </Text>
    </Flex>
  );
}
