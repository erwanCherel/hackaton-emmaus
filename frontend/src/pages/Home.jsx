import {
  Box,
  Stack,
  Heading,
  Flex,
  Button,
  Text,
  Image,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import handHome from "../assets/handHome.png";
import { useUserContext } from "../contexts/UserContext";

export default function Home() {
  const { user } = useUserContext();
  const navigate = useNavigate();

  return (
    <Stack flexDirection={{ base: "column", md: "row" }} maxW="1440px" m="auto">
      <Box
        m={{ base: "2rem", md: "auto 3rem" }}
        maxW={{ md: "50%", xl: "40%" }}
      >
        <Heading fontWeight="bold">
          L'accès à la technologie pour tous,{" "}
          <Text as="span" color="brand.rose">
            un smartphone
          </Text>{" "}
          à la fois
        </Heading>
        <Text fontWeight="light" my="1rem" p={{ xl: "1rem 0" }}>
          Ensemble, nous sommes déterminés à faire une différence dans la vie
          des personnes exclues, en leur offrant les opportunités et les outils
          nécessaires pour s'épanouir dans le monde numérique.
        </Text>
        {user ? (
          <Button
            display={{ base: "none", xl: "initial" }}
            fontWeight="extrabold"
            w="300px"
            h="60px"
            bg="brand.vert"
            borderRadius="100rem"
            color="brand.gris"
            onClick={() => navigate("/add-phone")}
          >
            Ajouter un smartphone
          </Button>
        ) : (
          <Button
            display={{ base: "none", xl: "initial" }}
            fontWeight="extrabold"
            w="300px"
            h="60px"
            bg="brand.vert"
            borderRadius="100rem"
            color="brand.gris"
            onClick={() => navigate("/login")}
          >
            Se connecter
          </Button>
        )}
      </Box>
      <Flex flexDir="column" mr={{ md: "2rem" }}>
        <Image
          m={{ base: "auto", xl: "auto auto -4rem" }}
          src={handHome}
          maxHeight={{ base: "200px", md: "400px", xl: "700px" }}
        />
        <Button
          w={{ base: "240px", md: "350px" }}
          h={{ base: "60px", md: "80px" }}
          m={{ base: "-1rem auto 2rem", md: "-3rem auto auto" }}
          bg="brand.vert"
          borderRadius="100rem"
          color="brand.gris"
          fontWeight="extrabold"
          display={{ xl: "none" }}
          onClick={() => navigate("/add-phone")}
        >
          Ajouter un smartphone
        </Button>
      </Flex>
    </Stack>
  );
}
