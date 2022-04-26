import { Fragment } from "react"
import { Footer } from "./components/Footer"
import { Hero } from "./components/Hero"
import { Navbar } from "./components/Navbar"
import { ProjectList } from "./components/ProjectList"

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
      <Footer />
    </Fragment>
  )
}
