import React, { useState, useEffect } from "react";

import {
  Box,
  Stack,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Select,
  Text,
  Flex,
} from "@chakra-ui/react";

const resultPrice = [
  {
    min: 0,
    max: 50,
    price: 20,
  },
  {
    min: 51,
    max: 100,
    price: 80,
  },
  {
    min: 101,
    max: 150,
    price: 100,
  },
  {
    min: 151,
    max: 201,
    price: 150,
  },
];

export default function AddPhones() {
  const [name, setName] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedMemory, setSelectedMemory] = useState("");
  const [selectedRam, setSelectedRam] = useState("");
  const [points, setPoints] = useState(0);
  const [states, setStates] = useState([]);
  const [memories, setMemories] = useState([]);
  const [rams, setRams] = useState([]);
  const [price, setPrice] = useState(0);
  const fetchStates = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/states`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch states");
      }
      const data = await response.json();
      setStates(data);
    } catch (error) {
      console.error(error);
    }
  };
  const fetchMemories = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/memorys`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch memories");
      }
      const data = await response.json();
      setMemories(data);
    } catch (error) {
      console.error(error);
    }
  };
  const fetchRams = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/rams`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch rams");
      }
      const data = await response.json();
      setRams(data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchStates();
    fetchMemories();
    fetchRams();
  }, []);
  useEffect(() => {
    if (selectedState && selectedMemory && selectedRam) {
      const stateWeighting = parseFloat(JSON.parse(selectedState).weighting);
      const memoryPoints = parseInt(JSON.parse(selectedMemory).points, 10);
      const ramValue = parseInt(JSON.parse(selectedRam).points2, 10);
      const basePoints = memoryPoints + ramValue;
      const weightedPoints = basePoints * (1 + stateWeighting / 100);
      const calculatedPoints = weightedPoints.toFixed(2);
      setPoints(calculatedPoints);

      setPrice(
        resultPrice.find(
          (item) => item.min <= calculatedPoints && item.max >= calculatedPoints
        ).price
      );
    }
  }, [selectedState, selectedMemory, selectedRam]);

  return (
    <Stack
      direction={{ base: "column", md: "row" }}
      align={{ base: "stretch", md: "flex-start" }}
      ml="3rem"
    >
      <Box
        maxW={{ base: "100%", md: "50%" }}
        mt="2rem"
        mx="2rem"
        flex="1"
        // minH="100vh"
        textAlign={{ base: "center", md: "left" }}
        flexDirection="column"
      >
        <Heading as="h2" textAlign="center" m="1rem 0">
          Combien vaut votre smartphone ?
        </Heading>

        <FormControl>
          <FormLabel
            htmlFor="name"
            m={{ base: "2rem 0 1rem 0" }}
            fontWeight="extrabold"
          >
            Modèle du téléphone:
          </FormLabel>
          <Input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </FormControl>

        <FormControl>
          <FormLabel
            htmlFor="state"
            m={{ base: "2rem 0 1rem 0" }}
            fontWeight="extrabold"
          >
            État du téléphone:
          </FormLabel>
          <Select
            id="state"
            value={selectedState}
            onChange={(e) => setSelectedState(e.target.value)}
            required
          >
            <option value="">Sélectionner l'état du téléphone</option>
            {states.map((state) => (
              <option key={state.id} value={JSON.stringify(state)}>
                {state.name}
              </option>
            ))}
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel
            htmlFor="memory"
            m={{ base: "2rem 0 1rem 0" }}
            fontWeight="extrabold"
          >
            {" "}
            Mémoire du téléphone:
          </FormLabel>
          <Select
            id="memory"
            value={selectedMemory}
            onChange={(e) => setSelectedMemory(e.target.value)}
            required
          >
            <option value="">
              Sélectionner la taille de stockage du téléphone
            </option>
            {memories.map((memory) => (
              <option key={memory.id} value={JSON.stringify(memory)}>
                {memory.parametreGo} Go
              </option>
            ))}
          </Select>
        </FormControl>

        <FormControl>
          <FormLabel
            htmlFor="ram"
            m={{ base: "2rem 0 1rem 0" }}
            fontWeight="extrabold"
          >
            {" "}
            RAM (mémoire vive):
          </FormLabel>
          <Select
            id="ram"
            value={selectedRam}
            onChange={(e) => setSelectedRam(e.target.value)}
            required
          >
            <option value="">Sélectionner le niveau de RAM</option>
            {rams.map((ram) => (
              <option key={ram.id} value={JSON.stringify(ram)}>
                {ram.value} GB
              </option>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Flex
        m={{ base: "2rem auto", xl: "auto" }}
        gap="5rem"
        direction={{ base: "column", sm: "row", md: "column", xl: "row" }}
      >
        <Flex
          bg="#ffab1d"
          borderRadius="100rem"
          h="200px"
          w="200px"
          direction="column"
          textAlign="center"
          justify="center"
        >
          <Text fontSize="5xl">{price} €</Text>
          <Text fontSize="xl">Prix de rachat </Text>
        </Flex>
        <Flex
          bg="#00ACB0"
          borderRadius="100rem"
          h="200px"
          w="200px"
          direction="column"
          textAlign="center"
          justify="center"
        >
          <Text fontSize="5xl">{points}</Text>
          <Text fontSize="xl">Points </Text>
        </Flex>
      </Flex>
    </Stack>
  );
}
