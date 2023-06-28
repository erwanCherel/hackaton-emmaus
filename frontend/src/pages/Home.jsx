import {
  Box,
  Stack,
  Heading,
  Flex,
  Button,
  Text,
  Image,
} from "@chakra-ui/react";
import handHome from "../assets/handHome.png";

export default function Home() {
  return (
    <header className="App-header">
      <Stack>
        <Box marginLeft="5rem">
          <Heading>L'accès blablaba</Heading>
          <Text>Ensemble, blablabla</Text>
          <Button>Ajouter un smartphone</Button>
        </Box>
        <Flex
          position="absolute"
          right="24"
          bottom="24"
          display={{ base: "none", xl: "initial" }}
        >
          <Image src={handHome} />
        </Flex>
      </Stack>
    </header>
  );
}
