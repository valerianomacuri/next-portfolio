import {
  ComponentWithAs,
  Text,
  TextProps,
} from "@chakra-ui/react"

export const BodyText: ComponentWithAs<"p", TextProps> = ({
  children,
  ...props
}) => {
  return (
    <Text
      fontSize={"16px"}
      fontWeight={"450"}
      lineHeight="24px"
      color="#fff"
      {...props}
    >
      {children}
    </Text>
  )
}
