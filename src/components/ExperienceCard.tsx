import { FaReact, FaMicrosoft, FaGlobe } from "react-icons/fa6";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    title: "Freelance Web Developer",
    by: "Tamionweb",
    place: "Tangerang",
    year: "2024-now",
    description: `As a freelancer, I’ve worked on several website projects for various clients. Among these are a corporate website with the domain saikindo.co.id and a school website with the domain handinalmusri.com.`,
    icon: FaGlobe,
  },
  {
    title: "ReactJs and NodeJs (Bootcamp)",
    by: "Eduwork",
    place: "Jogjakarta",
    year: "2023-2024",
    description: `I graduated after 5 months of studying in a React and Node.js class, covering topics from basic web programming to project development, including building an online store using various React libraries.`,
    icon: FaReact,
  },
  {
    title: "Ultimate Microsoft Office (Pre-Recorded Videos)",
    by: "Udemy",
    place: "Bandung",
    year: "2021-2022",
    description: `I have completed the course material delivered in the form of pre-recorded videos from Udemy, covering Microsoft Office, particularly Microsoft Word and Excel, from basic to advanced levels.`,
    icon: FaMicrosoft,
  },
];

export default function ExperienceCard() {
  const ref1 = useRef<HTMLDivElement | null>(null);
  const ref2 = useRef<HTMLDivElement | null>(null);
  const ref3 = useRef<HTMLDivElement | null>(null);

  const v1 = useInView(ref1);
  const v2 = useInView(ref2);
  const v3 = useInView(ref3);

  const refs = [ref1, ref2, ref3];
  const vs = [v1, v2, v3];

  return (
    <div className="flex flex-col gap-4">
      {experiences.map(({ icon: Icon, title, by, place, year, description }, i) => (
        <motion.div
          ref={refs[i]}
          key={i}
          initial={{ y: 100, opacity: 0, scale: 0.7 }}
          animate={{
            y: vs[i] ? 0 : 100,
            opacity: vs[i] ? 1 : 0,
            scale: vs[i] ? 1 : 0.7,
            // transition: { delay: i * 0.2 },
          }}
          className="flex gap-4"
        >
          <div className="p-4 bg-woven h-fit rounded-full border shadow-lg hidden lg:block">
            <Icon className="text-primary size-6" />
          </div>
          <div className="w-full bg-woven border-l-4 border-blue-500 p-4 rounded-lg">
            <h3 className="mt-0">{title}</h3>
            <h4 className="mb-0">{by}</h4>
            <h5>
              {place}, {year}
            </h5>
            <p>{description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
