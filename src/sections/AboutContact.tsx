import { Button } from "@/components/ui/button";
import { SiGmail, SiWhatsapp } from "react-icons/si";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const contacts = [
  { title: "tami01.job@gmail.com", href: "mailto:tami01.job@gmail.com", Icon: SiGmail },
  { title: "087766606133", href: "https://wa.me/6287766606133", Icon: SiWhatsapp },
];

export default function AboutContact() {
  const contactMeRef = useRef<HTMLDivElement | null>(null);
  const v = useInView(contactMeRef);

  return (
    <section id="contact" className="py-16">
      <article className="prose min-w-full">
        <div className="container grid grid-cols-1 lg:grid-cols-5 gap-8">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { duration: 0.3 } }}
            className="col-span-1 lg:col-span-2"
          >
            <div className="bg-woven *:text-primary h-full flex flex-col items-center justify-center py-8 rounded-lg">
              <motion.h2
                ref={contactMeRef}
                initial={{ y: 100 }}
                animate={{ y: 0, opacity: v ? 1 : 0, x: v ? 0 : -100, transition: { duration: 0.3 } }}
                className="mt-0"
              >
                Contact Me
              </motion.h2>
              <div className="flex flex-col gap-4 items-center">
                {contacts.map(({ title, href, Icon }, i) => (
                  <Button key={i} asChild variant={"link"}>
                    <a href={href} className="text-primary no-underline flex gap-2 items-center">
                      <Icon className="min-w-max" />
                      <span>{title}</span>
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { duration: 0.3 } }}
            className="col-span-1 lg:col-span-3"
          >
            <h2 className="mt-0">About this website</h2>
            <p>
              This website is developed using React.js, leveraging Vite as the build tool for optimized performance.
              Iconography is implemented through React Icons, while styling is crafted with Tailwind CSS and ShadCN for
              a cohesive and responsive design. Framer Motion enhances the user experience with smooth, dynamic
              animations, providing a seamless and engaging interface.
            </p>
          </motion.div>
        </div>
      </article>
    </section>
  );
}
