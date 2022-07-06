import React from "react"

import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  HStack,
  useDisclosure,
  IconButton,
  CloseButton,
} from "@chakra-ui/react"
import { AiOutlineMenu } from "react-icons/ai"
import { NavItem } from "./NavItem"
import { BodyText } from "./BodyText"
import { Lables } from "./Lables"
import NextLink from "next/link"
import { useRouter } from "next/router"
import { portfolio } from "@/db"

export function Navbar() {
  const mobileNav = useDisclosure()
  const router = useRouter()

  return (
    <React.Fragment>
      <chakra.header
        bg="#011627"
        w="full"
        position={"fixed"}
        zIndex={"docked"}
        borderBottom="1px solid #1E2D3D"
        height="56px"
      >
        <Flex
          alignItems="center"
          justifyContent={{
            base: "space-between",
            md: "flex-start",
          }}
          height={"100%"}
          mx="auto"
        >
          <Lables
            as="h1"
            maxW="311px"
            w="100%"
            padding="17px 32px"
            color="#607B96"
          >
            valeriano-macuri
          </Lables>
          <HStack
            display="flex"
            alignItems="center"
            height={"100%"}
            spacing={1}
          >
            <Box
              height={"100%"}
              color="brand.500"
              display={{ base: "none", md: "inline-flex" }}
            >
              <NextLink href="/" prefetch>
                <NavItem
                  borderBottom={
                    router.pathname === "/"
                      ? "3px solid #FEA55F"
                      : ""
                  }
                >
                  _hello
                </NavItem>
              </NextLink>
              <NextLink href="/about" prefetch>
                <NavItem
                  borderBottom={
                    router.pathname === "/about"
                      ? "3px solid #FEA55F"
                      : ""
                  }
                >
                  _about-me
                </NavItem>
              </NextLink>
              <NextLink href="/projects" prefetch>
                <NavItem
                  borderBottom={
                    router.pathname === "/projects"
                      ? "3px solid #FEA55F"
                      : ""
                  }
                >
                  _projects
                </NavItem>
              </NextLink>
              <a
                href={portfolio}
                target={"_blank"}
                rel="noreferrer"
              >
                <NavItem>_cv</NavItem>
              </a>
            </Box>
            <Box
              display={{ base: "inline-flex", md: "none" }}
            >
              <IconButton
                display={{ base: "flex", md: "none" }}
                aria-label="Open menu"
                fontSize="20px"
                color={useColorModeValue(
                  "gray.800",
                  "inherit",
                )}
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
              />
              <Box
                pos="absolute"
                top={0}
                left={0}
                right={0}
                display={mobileNav.isOpen ? "flex" : "none"}
                flexDirection="column"
                alignItems={"center"}
                bg="#011627"
                rounded="sm"
                shadow="sm"
              >
                <CloseButton
                  aria-label="Close menu"
                  onClick={mobileNav.onClose}
                  height="56px"
                />
                <NextLink href="/" prefetch>
                  <NavItem
                    w="full"
                    justifyContent={"flex-start"}
                  >
                    _hello
                  </NavItem>
                </NextLink>

                <NextLink href="/about" prefetch>
                  <NavItem
                    justifyContent={"flex-start"}
                    w="full"
                    borderTop={"none"}
                    borderBottom="none"
                  >
                    _about-me
                  </NavItem>
                </NextLink>
                <NextLink href="/projects" prefetch>
                  <NavItem
                    w="full"
                    justifyContent={"flex-start"}
                  >
                    _projects
                  </NavItem>
                </NextLink>
                <a
                  href={portfolio}
                  target={"_blank"}
                  rel="noreferrer"
                  style={{
                    width: "100%",
                  }}
                >
                  <NavItem
                    w="full"
                    justifyContent={"flex-start"}
                  >
                    _cv
                  </NavItem>
                </a>
              </Box>
            </Box>
          </HStack>
        </Flex>
      </chakra.header>
    </React.Fragment>
  )
}
