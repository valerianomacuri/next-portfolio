import { Lables } from "./Lables"
import {
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react"

import { CodeBlock, dracula } from "react-code-blocks"
import styles from "../styles/AboutTabs.module.css"
import { Code } from "./Code"

export const AboutTabs = () => {
  return (
    <Tabs>
      <TabList>
        <Tab>personal-info.js</Tab>
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
      </TabPanels>
    </Tabs>
  )
}
