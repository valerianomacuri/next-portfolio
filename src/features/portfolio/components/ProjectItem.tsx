import { Box, Button } from "@chakra-ui/react";
import { useState } from "react";
import { BodyText } from "./BodyText";

type ProjectItemProps = {
  project: {
    picture: string;
    description: string;
    repository: string | null;
    title: string;
  };
};

export const ProjectItem = ({ project }: ProjectItemProps) => {
  const [isContainImage, setIsContainImage] = useState(true);
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
        backgroundSize={isContainImage ? "contain" : "cover"}
        backgroundPosition={"center"}
        backgroundRepeat="no-repeat"
        cursor={"pointer"}
        style={{
          aspectRatio: "16 / 9",
        }}
        onClick={() => setIsContainImage((old) => !old)}
      ></Box>
      <Box
        padding={"24px"}
        display="flex"
        flexDirection={"column"}
        minHeight="250px"
        gap={"10px"}
      >
        <BodyText color={"#fff"} flexGrow={1} fontSize={20}>
          {project.title}
        </BodyText>
        <BodyText color={"#607B96"} flexGrow={1}>
          {project.description}
        </BodyText>
        <Button
          as="a"
          bg={"#1C2B3A"}
          color="white"
          width={"fit-content"}
          href={project.repository ? project.repository : ""}
          isDisabled={!project.repository}
          target="_blank"
        >
          view-project
        </Button>
      </Box>
    </Box>
  );
};
