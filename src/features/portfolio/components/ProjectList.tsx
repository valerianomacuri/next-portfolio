import React from "react"
import {
  chakra,
  Box,
  SimpleGrid,
  Flex,
  useColorModeValue,
  Icon,
} from "@chakra-ui/react"
import { ProjectCardTwo } from "./ProjectCardTwo"
import { projects } from "@/db"
export function ProjectList() {
  return (
    <Box
      id="ProjectList"
      px={8}
      py={{
        base: 10,
        md: 20,
      }}
      mx="auto"
      bg={useColorModeValue("white", "gray.800")}
      maxWidth="container.xl"
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
        columns={{ base: 1, sm: 1, md: 2, lg: 2 }}
        spacing={{
          base: 4,
        }}
        pt={{
          base: 12,
          sm: 12,
          md: 24,
        }}
      >
        {projects.map(project => (
          <ProjectCardTwo
            project={project}
            key={project.picture}
          />
        ))}
      </SimpleGrid>
    </Box>
  )
}
