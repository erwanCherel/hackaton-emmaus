import React, { useState, useEffect } from "react";

import {
  Box,
  Stack,
  Heading,
  FormControl,
  FormLabel,
  Input,
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Tr,
  Td,
  Th,
  Tbody,
  Select,
  Button,
  Text,
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

  // const handleFormSubmit = async (event) => {
  //   event.preventDefault();
  //   try {
  //     const response = await fetch(
  //       `${import.meta.env.VITE_BACKEND_URL}/api/phones`,
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({
  //           name,
  //           stateId: JSON.parse(selectedState).id,
  //           memoryId: JSON.parse(selectedMemory).id,
  //           ramId: JSON.parse(selectedRam).id,
  //           points,
  //         }),
  //       }
  //     );
  //     if (!response.ok) {
  //       throw new Error("Failed to save phone");
  //     }
  //     setName("");
  //     setSelectedState("");
  //     setSelectedMemory("");
  //     setSelectedRam("");
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  return (
    <Stack
      direction={{ base: "column", md: "row" }}
      align={{ base: "stretch", md: "flex-start" }}
    >
      <Box
        mt="2rem"
        mx="2rem"
        flex="1"
        minH="100vh"
        textAlign={{ base: "center", md: "left" }}
        flexDirection="column"
      >
        <Heading as="h2">A quel point ton téléphone est naze :</Heading>

        <FormControl>
          <FormLabel htmlFor="name">modèle du téléphone:</FormLabel>
          <Input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="state">Etat du téléphone:</FormLabel>
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
          <FormLabel htmlFor="memory"> Mémoire du téléphone:</FormLabel>
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
          <FormLabel htmlFor="ram"> RAM (mémoire vive):</FormLabel>
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

        <Button type="submit">calculer</Button>
        <Text>Points: {points}</Text>
        <Text>Prix de rachat {price}€</Text>
      </Box>

      <Box
        flex="1"
        minW={{ base: "10%", md: "50%" }}
        h="100vh"
        bgColor={{ base: "white", md: "gray.100" }}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box backgroundColor="white">
          <TableContainer>
            <Table variant="striped" colorScheme="teal">
              <TableCaption>Tableaux </TableCaption>
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
                  <Td textAlign="center"> ee</Td>
                  <Td textAlign="center">dd</Td>
                  <Td textAlign="center">cc </Td>
                  <Td textAlign="center"> vv</Td>
                  <Td textAlign="center">cc Go</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Stack>
    // <Box>
    //   <Heading as="h2"></Heading>
    //   <form onSubmit={handleFormSubmit}>
    //     <FormControl>
    //       <FormLabel htmlFor="name">Phone Name:</FormLabel>
    //       <Input
    //         type="text"
    //         id="name"
    //         value={name}
    //         onChange={(e) => setName(e.target.value)}
    //         required
    //       />
    //     </FormControl>
    //     <FormControl>
    //       <FormLabel htmlFor="state">State:</FormLabel>
    //       <Select
    //         id="state"
    //         value={selectedState}
    //         onChange={(e) => setSelectedState(e.target.value)}
    //         required
    //       >
    //         <option value="">Select a state</option>
    //         {states.map((state) => (
    //           <option key={state.id} value={JSON.stringify(state)}>
    //             {state.name}
    //           </option>
    //         ))}
    //       </Select>
    //     </FormControl>
    //     <FormControl>
    //       <FormLabel htmlFor="memory">Memory:</FormLabel>
    //       <Select
    //         id="memory"
    //         value={selectedMemory}
    //         onChange={(e) => setSelectedMemory(e.target.value)}
    //         required
    //       >
    //         <option value="">Select a memory</option>
    //         {memories.map((memory) => (
    //           <option key={memory.id} value={JSON.stringify(memory)}>
    //             {memory.parametreGo} Go
    //           </option>
    //         ))}
    //       </Select>
    //     </FormControl>
    //     <FormControl>
    //       <FormLabel htmlFor="ram">RAM:</FormLabel>
    //       <Select
    //         id="ram"
    //         value={selectedRam}
    //         onChange={(e) => setSelectedRam(e.target.value)}
    //         required
    //       >
    //         <option value="">Select a RAM</option>
    //         {rams.map((ram) => (
    //           <option key={ram.id} value={JSON.stringify(ram)}>
    //             {ram.value} GB
    //           </option>
    //         ))}
    //       </Select>
    //     </FormControl>
    //     <Button type="submit">Add Phone</Button>
    //   </form>
    //   <Text>Points: {points}</Text>
    // </Box>
  );
}
