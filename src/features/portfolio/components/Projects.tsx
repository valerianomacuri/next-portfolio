import { projects } from "@/db"
import {
  Box,
  SimpleGrid,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react"
import { ProjectItem } from "./ProjectItem"

export const Projects = () => {
  return (
    <Box>
      <Tabs>
        <TabList>
          <Tab>projects.js</Tab>
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
                <ProjectItem project={project} />
              ))}
            </SimpleGrid>
          </TabPanel>
        </TabPanels>
      </Tabs>
      <Box></Box>
    </Box>
  )
}
