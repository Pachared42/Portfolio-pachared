import { useInView } from "react-intersection-observer";
import { HERO } from "../constants";
import pachara from "../assets/pachara.jpg";
import { motion } from "framer-motion";

// Variants for container animations
const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      delay: delay,
      ease: "easeOut",
    },
  },
});

const Hero = () => {
  const { ref: heroRef, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.1, // When 10% of the element is visible
  });

  return (
    <section className="flex min-h-screen flex-wrap items-center">
      <div className="w-full md:w-1/2" ref={heroRef}>
        <motion.h2
          variants={container(0)}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="my-8 p-2 text-5xl font-bold md:text-5xl lg:text-[8rem]"
        >
          {HERO.name}
        </motion.h2>
        <motion.span
          variants={container(0.5)}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="p-2 text-3xl tracking-tighter lg:text-5xl bg-gradient-to-r from-rose-400 to-orange-400 bg-clip-text text-transparent"
        >
          {HERO.greet}
        </motion.span>
        <motion.p
          variants={container(1)}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-8 p-2 text-balance"
        >
          {HERO.description}
        </motion.p>
      </div>
      <div className="w-full md:w-1/2 lg:p-8">
        <div className="flex justify-center">
          <motion.img
            initial={{ x: 100, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
            src={pachara}
            width={550}
            height={550}
            alt="pachara"
            className="rounded-3xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

