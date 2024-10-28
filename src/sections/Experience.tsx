import ExperienceCard from "@/components/ExperienceCard";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Experience() {
  const experienceRef = useRef<HTMLDivElement | null>(null);
  const v = useInView(experienceRef);

  return (
    <section id="experience" className="min-h-[50vh] py-16 bg-secondary">
      <article className="prose min-w-full">
        <div className="container max-w-6xl mx-auto">
          <motion.h1
            ref={experienceRef}
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: v ? 1 : 0, x: v ? 0 : -100, transition: { duration: 0.3 } }}
            className="font-barlowCondensed text-center"
          >
            Experience
          </motion.h1>
          <motion.div initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1, transition: { duration: 0.3 } }}>
            <ExperienceCard />
          </motion.div>
        </div>
      </article>
    </section>
  );
}
