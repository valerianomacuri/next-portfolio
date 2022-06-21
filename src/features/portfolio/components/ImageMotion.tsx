import { motion } from "framer-motion"
import { useRef } from "react"

export const ImageMotion = ({
  children,
}: {
  children?: React.ReactNode
}) => {
  const constraintsRef = useRef(null)

  return (
    <motion.div ref={constraintsRef}>
      <motion.div
        style={{
          backgroundImage: "url(./photo.png)",
          borderRadius: "50%",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "220px",
          height: "220px",
          position: "absolute",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        }}
        drag
        dragConstraints={constraintsRef}
      />
    </motion.div>
  )
}
