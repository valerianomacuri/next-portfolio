import { Button, Container } from "@chakra-ui/react"
import { Fragment } from "react"
import { Footer } from "./components/Footer"
import { Hello } from "./components/Hello"
import { Hero } from "./components/Hero"
import { Navbar } from "./components/Navbar"
import { ProjectCardTwo } from "./components/ProjectCardTwo"
import { ProjectList } from "./components/ProjectList"
import { SkillList } from "./components/SkillList"

export const Portfolio = () => {
  return (
    <Fragment>
      <Navbar />
      <div
        style={{
          height: 56,
        }}
      />
      {/* <Hero />
      <Button>Hello</Button>
      <ProjectList />
      <SkillList />
      <Footer /> */}

      <Container
        maxW="container.2xl"
        minH={"calc(100vh - 56px)"}
      >
        <Hello />
      </Container>
    </Fragment>
  )
}
