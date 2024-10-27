import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function AboutMe() {
  const aboutMeRef = useRef<HTMLDivElement | null>(null);
  const v = useInView(aboutMeRef);

  return (
    <section id="about" className="bg-woven min-h-[50vh] py-16">
      <article className="prose container text-center">
        <motion.h1
          ref={aboutMeRef}
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: v ? 1 : 0, x: v ? 0 : -100, transition: { duration: 0.3 } }}
          className="font-barlowCondensed"
        >
          About Me
        </motion.h1>
        <motion.div initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1, transition: { duration: 0.3 } }}>
          <p>
            I Built <b>dynamic</b>, <b>responsive</b> web applications and created seamless user experiences with{" "}
            <b>efficient code.</b>
          </p>
          <p>
            Graduated from UIN Jakarta in 2022 then worked at a photocopy shop while learning web programming from
            scratch including HTML, CSS, Javascript. Joined Eduwork <b>ReactJS/NodeJS</b> bootcamp, focusing on the{" "}
            <b>MERN Stack</b> including libraries and frameworks like <b>Next.js</b>, Tailwind, Redux, ect. and Have
            built fullstack MERN projects, <b>REST APIs</b>, Todo List, Fetch <b>Public API</b>. Skilled in MS Office,
            especially Word and Excel since high school. Committed to advancing my web programming career and
            continuously <b>exploring new technologies.</b>
          </p>
        </motion.div>
      </article>
    </section>
  );
}
