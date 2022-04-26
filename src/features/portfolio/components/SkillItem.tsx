import { Box, Image, Text } from "@chakra-ui/react"

type SkillItemProps = {
  tool: {
    name: string
    logo: string
    description: string
  }
}
export const SkillItem = ({ tool }: SkillItemProps) => {
  return (
    <Box
      display={"flex"}
      flexDirection="column"
      p={5}
      gap={2}
      borderRadius={5}
      shadow="lg"
      w="100%"
    >
      <Image
        boxSize="100px"
        objectFit="cover"
        src={
          tool.logo
            ? tool.logo
            : "https://play-lh.googleusercontent.com/efwNlvQ3pch_-hZ9xeHf6YF-f_rHzQQo21IVevPLOxpzSVfxuVKom2_7C6axFbC-3rU"
        }
        alt={tool.name}
      />
      <Text fontSize={"lg"} fontWeight={"bold"}>
        {tool.name}
      </Text>
      <Text fontSize={"lg"} color="gray.500">
        {tool.description}
      </Text>
    </Box>
  )
}
