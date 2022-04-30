import {
  ComponentWithAs,
  Text,
  TextProps,
} from "@chakra-ui/react"

export const Lables: ComponentWithAs<"p", TextProps> = ({
  children,
  ...props
}) => {
  return (
    <Text
      fontSize="16px"
      fontWeight={"450"}
      lineHeight="21px"
      color="#fff"
      {...props}
    >
      {children}
    </Text>
  )
}
