import { Flex } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Flex
      bg="brand.bleu"
      color="brand.gris"
      padding="2rem 1rem"
      fontWeight="bold"
      lineHeight="2.5rem"
      flexDirection={{ base: "column", md: "row" }}
      justify={{ base: "", md: "space-around" }}
      align="center"
      height={{ base: "163px", md: "96px" }}
    >
      <Flex>Mentions légales</Flex>
      <Flex>Politique de confidentialité</Flex>
      <Flex>© Emmaüs Connect avec LaCollecte.tech</Flex>
    </Flex>
  );
}
