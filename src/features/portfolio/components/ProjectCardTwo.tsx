import {
  AspectRatio,
  Box,
  IconButton,
  Image,
  Link,
  Text,
  useDisclosure,
} from "@chakra-ui/react"
import { FiLink } from "react-icons/fi"
import { Fragment } from "react"
import { ModalImage } from "./ModalImage"

type ProjectCardProps = {
  project: {
    picture: string
    description: string
    repository: string | null
  }
}
export const ProjectCardTwo = ({
  project,
}: ProjectCardProps) => {
  const { isOpen, onClose, onOpen } = useDisclosure()
  return (
    <Fragment>
      <Box
        display={"flex"}
        flexDirection="column"
        padding={6}
        shadow="lg"
        gap={4}
      >
        <Box>
          <AspectRatio
            maxW="235px"
            ratio={235 / 158}
            // bg={"gray.700"}
            borderRadius={"5px"}
            overflow="auto"
            position="relative"
            shadow={"xs"}
            _before={{
              content: '""',
              left: 0,
              right: 0,
              zIndex: -1,
              display: "block",
              backgroundImage: `url(${project.picture})`,
              backgroundSize: "cover",
              filter: "blur(8px)",
              width: "100%",
              height: "158px",
            }}
            onClick={onOpen}
            cursor="pointer"
          >
            <img
              src={project.picture}
              alt="Project"
              style={{
                objectFit: "contain",
              }}
            />
          </AspectRatio>
        </Box>
        {/* <Text fontSize={"xl"} fontWeight={"bold"}>
        Poweful Design System
      </Text> */}
        <Text fontSize={"xl"} color="gray.500">
          {project.description}
        </Text>
        <Box display={"flex"} gap={3}>
          <IconButton
            aria-label="Link to project"
            icon={<FiLink />}
            borderRadius={"50%"}
          />
          <Text fontSize={"xl"} color="teal.500">
            {project.repository ? (
              <Link href={project.repository}>
                https://webapp.com/...
              </Link>
            ) : (
              "Not Avaible"
            )}
          </Text>
        </Box>
      </Box>
      <ModalImage isOpen={isOpen} onClose={onClose}>
        <AspectRatio
          maxW="100%"
          ratio={235 / 158}
          bg={"black"}
          overflow="auto"
          onClick={onOpen}
          cursor="pointer"
        >
          <img
            src={project.picture}
            alt="Project"
            style={{
              objectFit: "contain",
            }}
          />
        </AspectRatio>
      </ModalImage>
    </Fragment>
  )
}
