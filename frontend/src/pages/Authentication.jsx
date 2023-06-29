import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Image,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import loginImage from "../assets/loginImage.png";
import { useUserContext } from "../contexts/UserContext";

export default function Authentication() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useUserContext();
  const toast = useToast();
  const navigate = useNavigate();

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email || !password) {
      // setErrorMessage("Vous devez remplir tous les champs !");
      toast({
        title: "Erreur.",
        description: "Impossible de se connecter, veuillez réessayer.",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "bottom-right",
      });
    } else {
      fetch(`${import.meta.env.VITE_BACKEND_URL}/api/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          setUser(data);
          toast({
            title: "Connexion réussie",
            description: "Vous êtes connecté",
            status: "success",
            duration: 3000,
            isClosable: true,
            position: "bottom-right",
          });
          navigate("/home");
        })
        .catch((err) => {
          console.error("Error: ", err);
        });
    }
  };

  return (
    <form>
      <Stack direction={{ base: "column", md: "row" }}>
        <Flex p={8} flex={1} align="center" justify="center">
          <Stack spacing={4} w="full" maxW="md">
            <Heading fontSize="2xl" color="brand.rose">
              Se connecter
            </Heading>
            <FormControl id="email">
              <FormLabel>Email :</FormLabel>
              <Input
                required
                name="email"
                placeholder="Email"
                type="email"
                onChange={handleChangeEmail}
                value={email}
                _placeholder={{ color: "gray.500" }}
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Mot de passe :</FormLabel>
              <Input
                required
                name="password"
                placeholder="Mot de passe"
                onChange={handleChangePassword}
                value={password}
                type="password"
              />
            </FormControl>
            <Stack spacing={6}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align="start"
                justify="space-between"
              />
              <Button
                type="button"
                bg="brand.vert"
                color="brand.gris"
                borderRadius="100rem"
                fontWeight="extrabold"
                onClick={handleSubmit}
              >
                Se connecter
              </Button>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1} display={{ base: "none", md: "initial" }} m="auto">
          <Image alt="Login Image" objectFit="cover" src={loginImage} />
        </Flex>
      </Stack>
    </form>
  );
}
