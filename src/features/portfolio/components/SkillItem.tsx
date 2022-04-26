import { Box, Image, Text } from "@chakra-ui/react"

export const SkillItem = () => {
  return (
    <Box
      display={"flex"}
      flexDirection="column"
      p={5}
      gap={2}
      borderRadius={5}
      shadow="lg"
    >
      <Image
        boxSize="100px"
        objectFit="cover"
        src="https://play-lh.googleusercontent.com/efwNlvQ3pch_-hZ9xeHf6YF-f_rHzQQo21IVevPLOxpzSVfxuVKom2_7C6axFbC-3rU"
        alt="Figma tool"
        borderRadius={20}
      />
      <Text fontSize={"lg"} fontWeight={"bold"}>
        Poweful Design System
      </Text>
      <Text fontSize={"lg"} color="gray.500">
        Figma UI Kit and Design System targeting a wide
        variety of use cases.
      </Text>
    </Box>
  )
}
