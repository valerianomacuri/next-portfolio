import React from "react"
import {
  chakra,
  Box,
  SimpleGrid,
  Flex,
  useColorModeValue,
  Icon,
} from "@chakra-ui/react"
import { ProjectCard } from "./ProjectCard"
export function ProjectList() {
  return (
    <Box
      px={8}
      py={20}
      mx="auto"
      bg={useColorModeValue("white", "gray.800")}
    >
      <Box textAlign={{ lg: "center" }}>
        <chakra.p
          mt={2}
          fontSize={{ base: "3xl", sm: "4xl" }}
          lineHeight="8"
          fontWeight="extrabold"
          letterSpacing="tight"
          color={useColorModeValue("gray.900", undefined)}
        >
          Work
        </chakra.p>
        <chakra.p
          mt={4}
          maxW="2xl"
          fontSize="xl"
          mx={{ lg: "auto" }}
          color={useColorModeValue("gray.500", "gray.400")}
        >
          I have done some projects like ...
        </chakra.p>
      </Box>
      <SimpleGrid
        columns={{ base: 1, sm: 1, md: 1, lg: 1 }}
        spacingX={{ base: 16, lg: 24 }}
        spacingY={20}
        mt={6}
      >
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </SimpleGrid>
    </Box>
  )
}
