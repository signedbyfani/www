import Image from "next/image";
import { motion } from "framer-motion";

export default function Logo() {
  return (
    <motion.div
      whileHover={{ scale: 0.95 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className="filter drop-shadow-[0_0_10px_rgba(0,0,0,0.12)]"
    >
      <Image
        src="/favicon.svg"
        alt="Fanindra Logo"
        width={40}
        height={40}
        priority
      />
    </motion.div>
  );
} 