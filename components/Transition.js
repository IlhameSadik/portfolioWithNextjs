import { motion } from "framer-motion";

const transitionVariable = {
  initial: { x: "100%", width:'100%' },
  animate: { x: "0%", width:'0%' },
  exit: { x: ['0%',"100%"], width:['0%', '100%']},
};

const Transition = () => {
  return (
    <>
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-[#473879]"
        variants={transitionVariable}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.2, duration: 0.6, ease: "easeInOut" }}
      />
       <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-[#2f1c6e]"
        variants={transitionVariable}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.4, duration: 0.6, ease: "easeInOut" }}
      />
       <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-[#2e2257]"
        variants={transitionVariable}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.6, duration: 0.6, ease: "easeInOut" }}
      />
    </>
  );
};

export default Transition;
