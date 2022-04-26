import { Button } from "@chakra-ui/react"
import type { NextPage } from "next"
import { Portfolio } from "@/features/portfolio/Portfolio"
import { Fragment } from "react"

const Home: NextPage = () => {
  return (
    <Fragment>
      <Portfolio />
    </Fragment>
  )
}

export default Home
