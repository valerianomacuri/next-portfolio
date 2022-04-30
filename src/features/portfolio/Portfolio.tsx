import { Container } from "@chakra-ui/react"
import { Fragment } from "react"
import { Hello } from "./components/Hello"
import { Navbar } from "./components/Navbar"

export const Portfolio = () => {
  return (
    <Fragment>
      <Navbar />
      <div
        style={{
          height: 56,
        }}
      />
      <Container
        maxW="container.2xl"
        minH={"calc(100vh - 56px)"}
      >
        <Hello />
      </Container>
    </Fragment>
  )
}
