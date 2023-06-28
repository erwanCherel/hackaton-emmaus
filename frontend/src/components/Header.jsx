import { Flex } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <Flex justify="center" gap="20px" bg="brand.200">
      <NavLink to="/home">Accueil</NavLink>
      <NavLink to="/add-phone">Ajouter un smartphone</NavLink>
      <NavLink to="/database-phones">Base de données</NavLink>
    </Flex>
  );
}
