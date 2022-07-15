import { projects } from "@/db";
import {
  Box,
  Progress,
  SimpleGrid,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { ProjectItem } from "./ProjectItem";

export const Projects = () => {
  const [repositories, setRepositories] = useState<any[]>([]);
  useEffect(() => {
    fetch("https://gh-pinned-repos.egoist.sh/?username=valerianomacuri")
      .then((res) => res.json())
      .then(setRepositories);
  }, []);
  return (
    <Box>
      <Tabs>
        <TabList>
          <Tab>frontend.js</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <SimpleGrid
              columns={{
                base: 1,
                sm: 1,
                md: 2,
                lg: 2,
                xl: 3,
              }}
              gap={"40px"}
            >
              {projects.map((project) => (
                <ProjectItem key={project.picture} project={project} />
              ))}
            </SimpleGrid>
          </TabPanel>
        </TabPanels>
      </Tabs>
      <Box></Box>
    </Box>
  );
};
