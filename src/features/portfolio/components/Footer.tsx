import React from "react"
import {
  chakra,
  Flex,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react"
import {
  FiFacebook,
  FiGithub,
  FiLinkedin,
} from "react-icons/fi"

export function Footer() {
  return (
    <Flex
      w="full"
      p={50}
      alignItems="center"
      justifyContent="center"
    >
      <Flex
        w="full"
        maxWidth="container.xl"
        as="footer"
        flexDir={{ base: "column", sm: "row" }}
        align="center"
        justify="space-between"
        px="6"
        py="4"
        bg="white"
        _dark={{
          bg: "gray.800",
        }}
      >
        <chakra.a
          href="#"
          fontSize="xl"
          fontWeight="bold"
          color="gray.600"
          _dark={{
            color: "white",
            _hover: {
              color: "gray.300",
            },
          }}
          _hover={{
            color: "gray.700",
          }}
        >
          VM
        </chakra.a>

        <chakra.p
          py={{ base: "2", sm: "0" }}
          color="gray.800"
          _dark={{ color: "white" }}
        >
          All rights reserved
        </chakra.p>

        <Flex mx="-2">
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
      </Flex>
    </Flex>
  )
}
