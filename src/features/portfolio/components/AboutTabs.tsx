import { Lables } from "./Lables"
import {
  SimpleGrid,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react"

import { CodeBlock, dracula } from "react-code-blocks"
import styles from "../styles/AboutTabs.module.css"
import { Code } from "./Code"
import { education } from "@/db"
import { EducationCard } from "./EducationCard"

export const AboutTabs = () => {
  return (
    <Tabs defaultIndex={1}>
      <TabList>
        <Tab>personal-info.js</Tab>
        <Tab>education.js</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <Code>
            {`
/*
Hi, I introduce myself, I am a person who loves the world of programming, 
I am open to work, I excel at developing frontend applications with React.

I have had great achievements such as completing the School of Javascript, 
or the learning path Frontend with React at Platzi.
*/
            `}
          </Code>
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
              education.sort((a, b) => b.year - a.year).map(item => (
                <EducationCard key={item.name} education={item} />
              ))
            }
          </SimpleGrid>
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}
