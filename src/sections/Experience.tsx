import ExperienceCard from "@/components/ExperienceCard";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section id="experience" className="min-h-[50vh] py-16 bg-secondary">
      <article className="prose min-w-full">
        <div className="container max-w-6xl mx-auto">
          <motion.h1
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { duration: 0.3 } }}
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
