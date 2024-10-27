import SkillsCard from "@/components/SkillsCard";
import { skills } from "@/lib/skills";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Skills() {
  const frontEnd = skills.filter((item) => item.type === "front-end");
  const backEnd = skills.filter((item) => item.type === "back-end");
  const fullstack = skills.filter((item) => item.type === "fullstack");
  const database = skills.filter((item) => item.type === "database");

  const skillRef = useRef<HTMLDivElement | null>(null);
  const v = useInView(skillRef);

  return (
    <section id="skills" className="min-h-[50vh] py-16">
      <div className="container *:font-barlowCondensed *:text-center">
        <article className="prose min-w-full">
          <motion.h1
            ref={skillRef}
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: v ? 1 : 0, x: v ? 0 : -100, transition: { duration: 0.3 } }}
            className=""
          >
            Skills
          </motion.h1>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { duration: 0.3 } }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            <SkillsCard skills={frontEnd} title="Front-End" />
            <SkillsCard skills={backEnd} title="Back-End" />
            <SkillsCard skills={fullstack} title="Fullstack" />
            <SkillsCard skills={database} title="Database" />
          </motion.div>
        </article>
      </div>
    </section>
  );
}
