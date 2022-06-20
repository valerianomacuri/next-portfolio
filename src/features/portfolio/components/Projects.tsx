import { projects } from "@/db"
import {
  Box,
  Progress,
  SimpleGrid,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { ProjectItem } from "./ProjectItem"

export const Projects = () => {
  const [repositories, setRepositories] = useState<any[]>([])
  useEffect(() => {
    fetch("https://gh-pinned-repos.egoist.sh/?username=valerianomacuri")
      .then(res => res.json())
      .then(setRepositories)
  }, [])
  return (
    <Box>
      <Tabs>
        <TabList>
          <Tab>frontend.js</Tab>
          <Tab>backend.go</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <SimpleGrid
              columns={{
                base: 1,
                sm: 2,
                md: 3,
              }}
              gap={"40px"}
            >
              {projects.map(project => (
                <ProjectItem
                  key={project.picture}
                  project={project}
                />
              ))}
            </SimpleGrid>
          </TabPanel>
          <TabPanel>
            <SimpleGrid
              columns={{
                base: 1,
                sm: 2,
                md: 3,
              }}
              gap={"40px"}
            >
              {
                (repositories.length != 0) ? repositories.map((project: any, i: number) => (
                  <ProjectItem
                    key={i + 1}
                    project={{
                      picture: project.image,
                      description: project.description,
                      repository: project.link,
                    }}
                  />
                )) : <Progress size='xs' isIndeterminate />
              }
            </SimpleGrid>
          </TabPanel>
        </TabPanels>
      </Tabs>
      <Box></Box>
    </Box>
  )
}
