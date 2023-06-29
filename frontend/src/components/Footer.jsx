import { Flex } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

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
      // mt="2rem"
    >
      <Flex
        _hover={{
          textDecoration: "underline",
        }}
      >
        <NavLink to="/home">Mentions légales</NavLink>
      </Flex>

      <Flex
        _hover={{
          textDecoration: "underline",
        }}
      >
        <NavLink to="/home">Politique de confidentialité</NavLink>
      </Flex>
      <Flex
        _hover={{
          textDecoration: "underline",
        }}
      >
        <NavLink to="/faq">FAQ</NavLink>
      </Flex>
      <Flex
        _hover={{
          textDecoration: "underline",
        }}
      >
        <NavLink to="/home">© Emmaüs Connect avec LaCollecte.tech</NavLink>
      </Flex>
    </Flex>
  );
}
