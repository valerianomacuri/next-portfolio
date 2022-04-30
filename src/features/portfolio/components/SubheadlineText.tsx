import {
  ComponentWithAs,
  Text,
  TextProps,
} from "@chakra-ui/react"

export const SubheadlineText: ComponentWithAs<
  "p",
  TextProps
> = ({ children, ...props }) => {
  return (
    <Text
      as="h2"
      fontSize="32px"
      fontWeight={"450"}
      lineHeight="42px"
      color="#fff"
      {...props}
    >
      {children}
    </Text>
  )
}
