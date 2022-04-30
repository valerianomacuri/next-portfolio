import { Box, Button } from "@chakra-ui/react"
import { useState } from "react"
import { BodyText } from "./BodyText"

type ProjectItemProps = {
  project: {
    picture: string
    description: string
    repository: string | null
  }
}

export const ProjectItem = ({
  project,
}: ProjectItemProps) => {
  const [isContainImage, setIsContainImage] =
    useState(false)
  return (
    <Box
      display={"flex"}
      flexDirection="column"
      bg={"#011221"}
      border="1px solid #1E2D3D"
      overflow={"hidden"}
    >
      <Box
        backgroundColor={"black"}
        backgroundImage={project.picture}
        backgroundSize={
          isContainImage ? "contain" : "cover"
        }
        backgroundPosition={"center"}
        backgroundRepeat="no-repeat"
        cursor={"pointer"}
        style={{
          aspectRatio: "1 / 1",
        }}
        onClick={() => setIsContainImage(old => !old)}
      ></Box>
      <Box
        padding={"24px"}
        display="flex"
        flexDirection={"column"}
        height="100%"
      >
        <BodyText color={"#607B96"} flexGrow={1}>
          {project.description}
        </BodyText>
        <Button
          as="a"
          bg={"#1C2B3A"}
          color="white"
          width={"fit-content"}
          href={
            project.repository ? project.repository : ""
          }
          isDisabled={!project.repository}
        >
          view-project
        </Button>
      </Box>
    </Box>
  )
}
