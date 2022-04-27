import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react"
import { FC } from "react"

type ModalImageProps = {
  onClose: () => void
  isOpen: boolean
  children: React.ReactNode
}
export const ModalImage: FC<ModalImageProps> = ({
  onClose,
  isOpen,
  children,
}) => {
  return (
    <Modal onClose={onClose} size={"2xl"} isOpen={isOpen}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Zoom</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{children}</ModalBody>
        <ModalFooter>
          <Button onClick={onClose}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
