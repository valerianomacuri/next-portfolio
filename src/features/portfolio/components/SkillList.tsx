import React from "react"
import {
  chakra,
  Box,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react"

import { SkillItem } from "./SkillItem"
import { tools } from "@/db"

export function SkillList() {
  return (
    <Box
      id="SkillList"
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
          Skills
        </chakra.p>
        <chakra.p
          mt={4}
          maxW="2xl"
          fontSize="xl"
          mx={{ lg: "auto" }}
          color={useColorModeValue("gray.500", "gray.400")}
        >
          Algunas de las herramientas con las que trabajo...
        </chakra.p>
      </Box>
      <SimpleGrid
        columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
        spacing={{
          base: 4,
        }}
        justifyItems="center"
        py={{
          base: 12,
          md: 24,
        }}
      >
        {tools.map(tool => (
          <SkillItem tool={tool} />
        ))}
      </SimpleGrid>
    </Box>
  )
}
