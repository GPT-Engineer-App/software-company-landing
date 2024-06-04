import { Container, Box, VStack, HStack, Text, Heading, Button, IconButton, Image, useColorMode, useColorModeValue, FormControl, FormLabel, Input } from "@chakra-ui/react";
import backgroundImage from "../assets/abstract-background.jpg";
import { FaRocket, FaSun, FaMoon } from "react-icons/fa";

const Index = () => {
  const { toggleColorMode } = useColorMode();
  const colorModeIcon = useColorModeValue(<FaMoon />, <FaSun />);

  return (
    <Container maxW="container.xl" p={4} bgImage={`url(${backgroundImage})`} bgSize="cover" bgPosition="center">
      <Box as="header" w="100%" py={4} display="flex" justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="lg">
          APIControl
        </Heading>
        <IconButton aria-label="Toggle color mode" icon={colorModeIcon} onClick={toggleColorMode} />
      </Box>

      <VStack spacing={8} mt={8} textAlign="center">
        <Heading as="h2" size="2xl">
          Innovative Software Solutions
        </Heading>
        <Text fontSize="xl">Empowering businesses with cutting-edge technology and unparalleled support.</Text>
        <Button colorScheme="red" size="lg" rightIcon={<FaRocket />}>
          Get Started
        </Button>
      </VStack>

      <HStack spacing={8} mt={16} justifyContent="center" alignItems="flex-start">
        <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
          <Image src="https://images.unsplash.com/photo-1610563166150-b34df4f3bcd6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50fGVufDB8fHx8MTcxNzU0MjI3Nnww&ixlib=rb-4.0.3&q=80&w=1080" alt="Software Development" height="200px" objectFit="cover" />
          <Box p={6}>
            <Heading as="h3" size="md">
              Custom Software Development
            </Heading>
            <Text mt={4}>Tailored solutions to meet your unique business needs.</Text>
          </Box>
        </Box>
        <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
          <Image src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMHNlcnZpY2VzfGVufDB8fHx8MTcxNzU0MjI3Nnww&ixlib=rb-4.0.3&q=80&w=1080" alt="Cloud Services" height="200px" objectFit="cover" />
          <Box p={6}>
            <Heading as="h3" size="md">
              Cloud Services
            </Heading>
            <Text mt={4}>Scalable and secure cloud solutions for your business.</Text>
          </Box>
        </Box>
        <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
          <Image src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwc3VwcG9ydHxlbnwwfHx8fDE3MTc1NDIyNzd8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Tech Support" height="200px" objectFit="cover" />
          <Box p={6}>
            <Heading as="h3" size="md">
              24/7 Tech Support
            </Heading>
            <Text mt={4}>Round-the-clock support to keep your operations running smoothly.</Text>
          </Box>
        </Box>
      </HStack>
    </Container>
  );
};

export default Index;
