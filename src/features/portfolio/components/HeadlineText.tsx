import {
  ComponentWithAs,
  Text,
  TextProps,
} from "@chakra-ui/react"

export const HeadlineText: ComponentWithAs<
  "p",
  TextProps
> = ({ children, ...props }) => {
  return (
    <Text
      as="h1"
      fontSize="62px"
      fontWeight={"450"}
      lineHeight="81px"
      color="#fff"
      {...props}
    >
      {children}
    </Text>
  )
}
