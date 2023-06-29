import { React, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  Flex,
  Text,
  MenuButton,
  MenuItem,
  MenuList,
  Menu,
  Button,
  SimpleGrid,
  Card,
  CardBody,
  Image,
  Stack,
  Divider,
  CardFooter,
  Heading,
  Center,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

export default function PhonesList() {
  const [phones, setPhones] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedMemory, setSelectedMemory] = useState("");

  useEffect(() => {
    if (!selectedMemory && !selectedBrand) {
      fetch("http://localhost:5000/api/phones")
        .then((response) => response.json())
        .then((data) => {
          setPhones(data);
        })
        .catch((error) => console.error(error));
    }
  }, [selectedMemory, selectedBrand]);

  useEffect(() => {
    if (selectedMemory) {
      fetch(`http://localhost:5000/api/phones/memory/${selectedMemory}`)
        .then((response) => response.json())
        .then((data) => {
          setPhones(data);
        })
        .catch((error) => console.error(error));
    }
  }, [selectedMemory]);

  return (
    <Flex flex="1">
      <Flex
        w={{ base: "100px", sm: "200px", md: "280px" }}
        maxW="280px"
        boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
        flexDir="column"
        bg="brand.vert"
      >
        <Text
          fontWeight="700"
          fontSize={{ base: "12px", sm: "16px", md: "20px" }}
          mt="5"
          textAlign="center"
          color="brand.gris"
        >
          Tri par filtres
        </Text>
        <Menu>
          <Flex justify="center" mt="10">
            <MenuButton
              bg="transparent"
              color="black"
              size={{ base: "xs", sm: "sm", md: "lg" }}
              _hover={{
                background: "black",
                color: "white",
              }}
              as={Button}
              rightIcon={<ChevronDownIcon />}
            >
              Marque
            </MenuButton>
            <MenuList>
              <MenuItem onClick={() => setSelectedBrand("")}>Tous</MenuItem>
              <MenuItem onClick={() => setSelectedBrand("Apple")}>
                Apple
              </MenuItem>
              <MenuItem onClick={() => setSelectedBrand("Samsung")}>
                Samsung
              </MenuItem>
              <MenuItem onClick={() => setSelectedBrand("Google")}>
                Google
              </MenuItem>
            </MenuList>
          </Flex>
        </Menu>
        <Menu>
          <Flex justify="center" mt="7">
            <MenuButton
              bg="transparent"
              color="black"
              size={{ base: "xs", sm: "sm", md: "lg" }}
              _hover={{
                background: "black",
                color: "white",
              }}
              as={Button}
              rightIcon={<ChevronDownIcon />}
            >
              Stockage
            </MenuButton>
            <MenuList>
              <MenuItem onClick={() => setSelectedMemory("")}>Tous</MenuItem>
              <MenuItem onClick={() => setSelectedMemory("16")}>16 Go</MenuItem>
              <MenuItem onClick={() => setSelectedMemory("32")}>32 Go</MenuItem>
              <MenuItem onClick={() => setSelectedMemory("64")}>64 Go</MenuItem>
              <MenuItem onClick={() => setSelectedMemory("128")}>
                128 Go
              </MenuItem>
              <MenuItem onClick={() => setSelectedMemory("256")}>
                256 Go
              </MenuItem>
              <MenuItem onClick={() => setSelectedMemory("512")}>
                512 Go
              </MenuItem>
            </MenuList>
          </Flex>
        </Menu>
        <Menu>
          <Flex justify="center" mt="7">
            <MenuButton
              bg="transparent"
              color="black"
              size={{ base: "xs", sm: "sm", md: "lg" }}
              _hover={{
                background: "black",
                color: "white",
              }}
              as={Button}
              rightIcon={<ChevronDownIcon />}
            >
              Catégories
            </MenuButton>
            <MenuList>
              <MenuItem>1 - HC</MenuItem>
              <MenuItem>2 - C</MenuItem>
              <MenuItem>3 - B</MenuItem>
              <MenuItem>4 - A</MenuItem>
              <MenuItem>5 - Prenium</MenuItem>
            </MenuList>
          </Flex>
        </Menu>
        <Menu>
          <Flex justify="center" mt="7">
            <MenuButton
              bg="transparent"
              color="black"
              size={{ base: "xs", sm: "sm", md: "lg" }}
              _hover={{
                background: "black",
                color: "white",
              }}
              as={Button}
              rightIcon={<ChevronDownIcon />}
            >
              Pondération
            </MenuButton>
            <MenuList>
              <MenuItem>HS</MenuItem>
              <MenuItem>Réparable</MenuItem>
              <MenuItem>Bloqué</MenuItem>
              <MenuItem>Reconditionable</MenuItem>
              <MenuItem>Reconditionné</MenuItem>
            </MenuList>
          </Flex>
        </Menu>
      </Flex>
      <SimpleGrid
        columns={{ base: 1, sm: 1, md: 2, xl: 3 }}
        spacing={10}
        m="auto"
      >
        {phones
          .filter(
            (phone) => selectedBrand === "" || phone.marque === selectedBrand
          )
          .map((phone) => (
            <Card
              key={phone.id}
              w={{ base: "160px", sm: "200px", md: "350px" }}
              justify="center"
              align="center"
              m="auto"
              mt={{ base: "4", xl: "0" }}
            >
              <CardBody>
                <Image
                  src={phone.picture}
                  alt="Phone picture"
                  borderRadius="lg"
                  maxW="200px"
                  maxH="200px"
                />
                <Stack mt="6" spacing="3">
                  <Center>
                    <Heading fontSize={{ base: "16px", md: "20px" }} size="md">
                      {phone.marque}
                    </Heading>
                  </Center>
                  <Center>
                    <Text
                      color="blue.600"
                      fontSize={{ base: "16px", md: "20px" }}
                    >
                      {phone.name}
                    </Text>
                  </Center>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <NavLink to="/retail-phone">
                  <Button bg="color.gris">Details</Button>
                </NavLink>
              </CardFooter>
            </Card>
          ))}
      </SimpleGrid>
    </Flex>
  );
}
