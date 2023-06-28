import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Image,
} from "@chakra-ui/react";
import loginImage from "../assets/loginImage.png";

export default function Authentication() {
  return (
    <Stack direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align="center" justify="center">
        <Stack spacing={4} w="full" maxW="md">
          <Heading fontSize="2xl">Se connecter</Heading>
          <FormControl id="email">
            <FormLabel>Email :</FormLabel>
            <Input type="email" />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Mot de passe :</FormLabel>
            <Input type="password" />
          </FormControl>
          <Stack spacing={6}>
            <Stack
              direction={{ base: "column", sm: "row" }}
              align="start"
              justify="space-between"
            />
            <Button
              bg="brand.vert"
              color="brand.gris"
              borderRadius="100rem"
              fontWeight="extrabold"
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
  );
}
