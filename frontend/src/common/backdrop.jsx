"use client";
import { motion } from "framer-motion"

export default function Backdrop({children, onClick})
{
    return (
        <motion.div className="fixed flex top-0 left-0 right-0 items-center justify-center bottom-0 z-[70] bg-black/80 backdrop-blur-[3px]"
            onClick={onClick}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
        >
            {children}
        </motion.div>
    )
}