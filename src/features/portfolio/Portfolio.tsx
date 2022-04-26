import { Fragment } from "react"
import { Footer } from "./components/Footer"
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
          height: 72,
        }}
      />
      <Hero />
      <ProjectList />
      <SkillList />
      <Footer />
    </Fragment>
  )
}
