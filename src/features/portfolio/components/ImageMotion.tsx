import { motion } from "framer-motion";
import { useRef } from "react";

export const ImageMotion = () => {
  return (
    <motion.div
      style={{
        backgroundImage: "url(./photo.png)",
        borderRadius: "50%",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "220px",
        height: "220px",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
      }}
    />
  );
};
