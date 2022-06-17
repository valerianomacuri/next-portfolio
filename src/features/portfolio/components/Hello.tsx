import {
  Box,
  ScaleFade,
  SimpleGrid,
  SlideFade,
  Container,
  Icon,
  Flex,
  chakra,
} from "@chakra-ui/react"
import {
  FiFacebook,
  FiGithub,
  FiLinkedin,
} from "react-icons/fi"
import { BodyText } from "./BodyText"
import { HeadlineText } from "./HeadlineText"
import { ImageMotion } from "./ImageMotion"
import { SubheadlineText } from "./SubheadlineText"
export const Hello = () => {
  return (
    <Container
      maxW="container.2xl"
      minH={"calc(100vh - 56px)"}
      style={{
        backgroundImage: "url(./background-blur.svg)",
        backgroundRepeat: "repeat-y",
        backgroundSize: "cover",
      }}
    >
      <SimpleGrid
        margin={"auto"}
        paddingTop="180px"
        maxW="container.xl"
        alignContent={"center"}
        justifyContent="center"
        columns={{
          base: 1,
          md: 2,
        }}
      >
        <Box>
          <BodyText>Hi all. I am</BodyText>
          <ScaleFade initialScale={0.9} in={true}>
            <HeadlineText
              fontSize={{
                base: "52px",
                md: "62px",
              }}
            >
              Leonardo Valeriano
            </HeadlineText>
          </ScaleFade>
          <SlideFade in={true} offsetY="60px">
            <SubheadlineText
              color="#4D5BCE"
              fontSize={{
                base: "20px",
                md: "32px",
              }}
            >
              {">"} Full-stack developer
            </SubheadlineText>
          </SlideFade>
          <Flex my="2">
            <chakra.a
              href="https://github.com/valerianomacuri"
              mx="2"
              color="gray.600"
              _dark={{
                color: "gray.300",
                _hover: { color: "gray.400" },
              }}
              _hover={{
                color: "gray.500",
              }}
              aria-label="Github"
            >
              <Icon
                boxSize="5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <FiGithub />
              </Icon>
            </chakra.a>

            <chakra.a
              href="https://www.linkedin.com/in/valerianomacuri/"
              target={"_blank"}
              mx="2"
              color="gray.600"
              _dark={{
                color: "gray.300",
                _hover: { color: "gray.400" },
              }}
              _hover={{
                color: "gray.500",
              }}
              aria-label="Linkedin"
            >
              <Icon
                boxSize="5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <FiLinkedin />
              </Icon>
            </chakra.a>

            <chakra.a
              href="https://www.facebook.com/macuri.2140"
              target={"_blank"}
              mx="2"
              color="gray.600"
              _dark={{
                color: "gray.300",
                _hover: { color: "gray.400" },
              }}
              _hover={{
                color: "gray.500",
              }}
              aria-label="Facebook"
            >
              <Icon
                boxSize="5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <FiFacebook />
              </Icon>
            </chakra.a>
          </Flex>
        </Box>
        <Box
          justifyContent="center"
          alignItems={"center"}
          display={{
            base: "none",
            md: "flex",
          }}
        >
          <Box position={"relative"} cursor={"pointer"}>
            <ImageMotion />
          </Box>
        </Box>
      </SimpleGrid>
    </Container>
  )
}
