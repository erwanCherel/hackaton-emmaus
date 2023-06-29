import { Flex } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Flex
      bg="brand.bleu"
      color="brand.gris"
      padding={{ base: "1rem", xl: "2rem" }}
      fontWeight="bold"
      lineHeight="2.5rem"
      flexDirection={{ base: "column", xl: "row" }}
      justify={{ base: "", md: "space-around" }}
      align="center"
    >
      <Flex>Mentions légales</Flex>
      <Flex>Politique de confidentialité</Flex>
      <Flex>© Emmaüs Connect avec LaCollecte.tech</Flex>
    </Flex>
  );
}
