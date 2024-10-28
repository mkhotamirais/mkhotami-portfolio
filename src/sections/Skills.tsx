import SkillsCard from "@/components/SkillsCard";
import { Skill, skills } from "@/lib/skills";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Skills() {
  const frontEnd = skills.filter((item) => item.type === "front-end");
  const backEnd = skills.filter((item) => item.type === "back-end");
  const fullstack = skills.filter((item) => item.type === "fullstack");
  const database = skills.filter((item) => item.type === "database");

  const skillList = [
    { skills: frontEnd, title: "Front-End" },
    { skills: backEnd, title: "Back-End" },
    { skills: fullstack, title: "Full-Stack" },
    { skills: database, title: "Database" },
  ];

  const skillRef = useRef<HTMLDivElement | null>(null);
  const v = useInView(skillRef);

  const skillRef1 = useRef<HTMLDivElement | null>(null);
  const skillRef2 = useRef<HTMLDivElement | null>(null);
  const skillRef3 = useRef<HTMLDivElement | null>(null);
  const skillRef4 = useRef<HTMLDivElement | null>(null);

  const v1 = useInView(skillRef1);
  const v2 = useInView(skillRef2);
  const v3 = useInView(skillRef3);
  const v4 = useInView(skillRef4);

  const skillRefs = [skillRef1, skillRef2, skillRef3, skillRef4];
  const vArr = [v1, v2, v3, v4];

  return (
    <section id="skills" className="min-h-[50vh] py-16 w-full overflow-hidden">
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
            {skillList.map(({ skills, title }, i) => (
              <motion.div
                ref={skillRefs[i]}
                initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }}
                animate={vArr[i] ? { opacity: 1, x: 0, transition: { duration: 0.7 } } : { opacity: 0 }}
                key={i}
                className="bg-woven h-full rounded-xl shadow-xl p-4"
              >
                <SkillsCard key={i} skills={skills} title={title} />
              </motion.div>
            ))}
          </motion.div>
        </article>
      </div>
    </section>
  );
}

export const SkillsItem = ({ skills, title }: { skills: Skill[]; title: string }) => {
  return <SkillsCard skills={skills} title={title} />;
};
