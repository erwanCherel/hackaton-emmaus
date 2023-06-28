import {
  Flex,
  Image,
  Box,
  Button,
  Menu,
  MenuList,
  MenuItem,
  MenuButton,
  IconButton,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <Flex
      align="center"
      justify="space-between"
      bg="white"
      boxShadow="md"
      fontWeight="700"
      fontSize={{ base: "8px", sm: "11px", md: "16px" }}
    >
      <Box>
        <NavLink to="/home">
          <Image
            src="src/assets/logo.svg"
            w={{ base: "20", md: "32" }}
            h={{ base: "20", md: "32" }}
            ml={{ base: "4", sm: "3", md: "4" }}
          />
        </NavLink>
      </Box>
      <Box display={{ base: "none", sm: "initial" }} color="brand.bleu">
        <Flex gap="4em">
          <NavLink to="/add-phone">Ajouter un smartphone</NavLink>
          <NavLink to="/database-phones">Base de données</NavLink>
        </Flex>
      </Box>
      <Box>
        <NavLink to="/login">
          <Button
            display={{ base: "none", sm: "initial" }}
            size={{ base: "xs", sm: "sm", md: "lg" }}
            mr="5"
            color="brand.bleu"
          >
            Se connecter
          </Button>
        </NavLink>
      </Box>
      <Box
        mr="5"
        right="0"
        color="brand.bleu"
        display={{ base: "initial", sm: "none" }}
      >
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon />}
          />
          <MenuList>
            <NavLink to="/login">
              <MenuItem>Se connecter</MenuItem>
            </NavLink>
            <NavLink to="/add-phone">
              <MenuItem>Ajouter un smarthphone</MenuItem>
            </NavLink>
            <NavLink to="/database-phones">
              <MenuItem>Base de données</MenuItem>
            </NavLink>
          </MenuList>
        </Menu>
      </Box>
    </Flex>
  );
}
