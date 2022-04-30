import {
  Button,
  ButtonProps,
  ComponentWithAs,
  forwardRef,
} from "@chakra-ui/react"

export const NavItem: ComponentWithAs<
  "button",
  ButtonProps
> = forwardRef(({ children, ...props }, ref) => {
  return (
    <Button
      variant="ghost"
      border="1px solid #1E2D3D"
      w="120px"
      borderRadius="0"
      margin="0"
      height={"56px"}
      fontSize="16px"
      fontWeight={"450"}
      lineHeight="21px"
      color="#fff"
      {...props}
      ref={ref}
    >
      {children}
    </Button>
  )
})
