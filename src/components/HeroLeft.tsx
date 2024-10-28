import { SiGithub, SiLinkedin, SiGmail } from "react-icons/si";
import { Button } from "./ui/button";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { FileDown, ArrowDown, Eye } from "lucide-react";

const socials = [
  { title: "Github Homepage", href: "https://github.com/mkhotamirais", Icon: SiGithub },
  { title: "LinkedIn Profile", href: "https://www.linkedin.com/in/mkhotami-rais/", Icon: SiLinkedin },
  { title: "Email me", href: "mailto:tami01.job@gmail.com", Icon: SiGmail },
];

export default function HeroLeft() {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const v = useInView(heroRef);

  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: v ? 1 : 0, y: v ? 0 : -100, transition: { duration: 0.5 } }}
      ref={heroRef}
      className="flex flex-col justify-between text-center lg:text-left space-y-6 lg:space-y-4 py-4"
    >
      <div className="flex justify-center lg:justify-start">
        <div className="relative">
          <motion.img
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1, transition: { delay: 0.2 } }}
            src="https://github.com/mkhotamirais.png"
            alt="mkhotami github profile foto"
            className="size-24 rounded-full shadow"
          />
          <motion.span
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1, transition: { delay: 0.8 } }}
            className="absolute text-3xl -bottom-2 left-0"
          >
            👋
          </motion.span>
        </div>
      </div>
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1, transition: { duration: 0.5 } }}
        className="prose"
      >
        <h1 className="font-barlowCondensed">I am Mkhotami, a Web Developer</h1>
        <p>I Built dynamic, responsive web applications and created seamless user experiences with efficient code.</p>
      </motion.div>
      <motion.div
        initial={{ y: 200, opacity: 0 }}
        animate={{ y: 0, opacity: 1, transition: { delay: 0.5, duration: 0.1 } }}
        className="flex gap-4 justify-center lg:justify-start"
      >
        {socials.map(({ title, href, Icon }, i) => (
          <a key={i} title={title} href={href} target="_blank" rel="noopener">
            <Icon size={20} />
          </a>
        ))}
      </motion.div>
      <div
        // initial={{ y: 200, opacity: 0 }}
        // animate={{ y: 0, opacity: 1, transition: { delay: 0.7, duration: 0.1 } }}
        className="flex flex-col lg:flex-row gap-4 items-center justify-center lg:justify-start"
      >
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="w-44">
              <FileDown className="mr-1" />
              <div>Download CV</div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-44">
            <DropdownMenuItem asChild className="flex justify-center">
              <a
                title="cv mkhotami"
                href="https://docs.google.com/document/d/18R2NTNaj5GlKRRw_xSlzLVVWltXp4V6p3-f9dNR8aHY/export?format=pdf"
              >
                <ArrowDown className="size-4 mr-2" />
                Download
              </a>
            </DropdownMenuItem>
            <DropdownMenuItem className="flex justify-center">
              <a
                title="cv mkhotami"
                href="https://docs.google.com/document/d/18R2NTNaj5GlKRRw_xSlzLVVWltXp4V6p3-f9dNR8aHY/preview"
                className="flex items-center justify-center"
              >
                <Eye className="size-4 mr-2" /> Preview
              </a>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>{" "}
        <Button variant={"outline"} asChild className="w-44">
          <a href="#contact">Contact me</a>
        </Button>
      </div>
    </motion.div>
  );
}
