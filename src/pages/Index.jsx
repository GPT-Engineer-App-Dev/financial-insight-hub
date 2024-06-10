import { Box, Container, Flex, Heading, Text, VStack, Image, Link } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" bg="background.100">
      {/* Header */}
      <Box as="header" bg="gray.800" color="white" py={4}>
        <Flex justify="space-between" align="center">
          <Heading as="h1" size="lg" ml={4}>
            Financial Times
          </Heading>
          <Flex>
            <Link href="#" mx={2} color="white">Home</Link>
            <Link href="#" mx={2} color="white">World</Link>
            <Link href="#" mx={2} color="white">Business</Link>
            <Link href="#" mx={2} color="white">Tech</Link>
            <Link href="#" mx={2} color="white">Markets</Link>
            <Link href="#" mx={2} color="white">Opinion</Link>
          </Flex>
        </Flex>
      </Box>

      {/* Main Content */}
      <Box as="main" py={8}>
        <VStack spacing={8}>
          {/* Featured Article */}
          <Box w="full" p={4} borderWidth="1px" borderRadius="lg">
            <Image src="https://via.placeholder.com/800x400" alt="Featured Article" mb={4} />
            <Heading as="h2" size="md" mb={2}>Featured Article Title</Heading>
            <Text>Placeholder text for the featured article. This is a brief summary of the article content.</Text>
          </Box>

          {/* Other Articles */}
          <Flex wrap="wrap" justify="space-between">
            {[1, 2, 3, 4].map((num) => (
              <Box key={num} w="48%" p={4} borderWidth="1px" borderRadius="lg" mb={4}>
                <Image src="https://via.placeholder.com/400x200" alt={`Article ${num}`} mb={4} />
                <Heading as="h3" size="sm" mb={2}>Article {num} Title</Heading>
                <Text>Placeholder text for article {num}. This is a brief summary of the article content.</Text>
              </Box>
            ))}
          </Flex>
        </VStack>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="gray.800" color="white" py={4} mt={8}>
        <Text textAlign="center">&copy; 2023 Financial Times. All rights reserved.</Text>
      </Box>
    </Container>
  );
};

export default Index;