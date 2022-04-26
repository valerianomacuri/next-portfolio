import {
  Box,
  IconButton,
  Image,
  Link,
  Text,
} from "@chakra-ui/react"
import { FiLink } from "react-icons/fi"

export const ProjectCardTwo = () => {
  return (
    <Box
      display={"flex"}
      flexDirection="column"
      padding={6}
      shadow="lg"
      gap={4}
    >
      <Image
        boxSize="150px"
        objectFit="cover"
        src="https://bit.ly/dan-abramov"
        alt="Dan Abramov"
        borderRadius={"10%"}
      />
      <Text fontSize={"xl"} fontWeight={"bold"}>
        Poweful Design System
      </Text>
      <Text fontSize={"xl"} color="gray.500">
        Figma UI Kit and Design System targeting a wide
        variety of use cases.
      </Text>
      <Box display={"flex"} gap={3}>
        <IconButton
          aria-label="Link to project"
          icon={<FiLink />}
          borderRadius={"50%"}
        />
        <Text fontSize={"xl"} color="gray.500">
          <Link color="teal.500" href="/">
            https//figma.com
          </Link>
        </Text>
      </Box>
    </Box>
  )
}
