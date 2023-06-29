import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Stack,
  Flex,
  Text,
  Image,
  Heading,
  Button,
  Card,
  CardBody,
  CardFooter,
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
} from "@chakra-ui/react";

export default function RetailPhone() {
  const navigate = useNavigate();
  const [phone, setPhone] = useState();

  const { id } = useParams();

  const getOnePhone = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/phones/${id}`)
      .then((resp) => resp.json())
      .then((data) => {
        setPhone(data[0]);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getOnePhone();
  }, [id]);

  if (!phone) {
    return <p> En attente des données...</p>;
  }

  return (
    <Stack m="auto" alignItems="center">
      <Flex>
        <Card
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          variant="outline"
        >
          <Image
            objectFit="cover"
            maxW={{ base: "100%", sm: "200px" }}
            src={phone.picture}
            alt="photo téléphone"
          />

          <Flex flexDir="column" textAlign="center">
            <CardBody>
              <Heading size="md">
                {phone.marque} {phone.name}
              </Heading>

              <TableContainer>
                <Table variant="striped" colorScheme="teal">
                  <TableCaption>Caractéristiques techniques</TableCaption>
                  <Thead>
                    <Tr>
                      <Th textAlign="center">marque</Th>
                      <Th textAlign="center">sytème d'exploitation</Th>
                      <Th textAlign="center">modèle</Th>
                      <Th textAlign="center">mémoire</Th>
                      <Th textAlign="center">RAM</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td textAlign="center">{phone.marque}</Td>
                      <Td textAlign="center">{phone.os}</Td>
                      <Td textAlign="center">{phone.name} </Td>
                      <Td textAlign="center">{phone.parametreGo} Go </Td>
                      <Td textAlign="center">{phone.value} Go</Td>
                    </Tr>
                  </Tbody>
                </Table>
              </TableContainer>
            </CardBody>

            <CardFooter>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </Text>
            </CardFooter>
          </Flex>
        </Card>
      </Flex>
      <Button maxW="100px" onClick={() => navigate("/database-phones")}>
        retour
      </Button>
    </Stack>
  );
}
