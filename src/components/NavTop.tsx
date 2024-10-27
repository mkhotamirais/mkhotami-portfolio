import { menu } from "@/lib/menu";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import { Button } from "./ui/button";
import { LuHome } from "react-icons/lu";
import { ModeToggle } from "./theme/ModeToggle";

export default function NavTop() {
  const { scrollDirection } = useScrollDirection();
  const [activeHover, setActiveHover] = useState<number | null>(null);

  const location = useLocation();
  const { hash } = location;

  return (
    <header className="flex z-40 fixed h-20 w-full items-center justify-center">
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: scrollDirection === "up" ? "-200%" : 0, transition: { duration: 0.3 } }}
        className="absolute shadow-md rounded-full overflow-hidden"
      >
        <div className="hidden sm:flex items-center gap-1 p-1 bg-background z-50">
          <Button asChild size="icon" variant="ghost" className="rounded-full">
            <Link to="/" title="home">
              <LuHome />
            </Link>
          </Button>
          {menu
            .filter((item) => item !== "projects")
            .map((item, i) => (
              <a
                onMouseEnter={() => setActiveHover(i)}
                onMouseLeave={() => setActiveHover(null)}
                href={`#${item}`}
                key={i}
                className="relative group rounded-full px-4 py-2"
              >
                <span
                  className={`z-10 relative capitalize text-sm text-muted-foreground group-hover:text-gray-500 transition ${
                    hash === `#${item}` ? "text-primary" : ""
                  }`}
                >
                  {item}
                </span>

                {/* active click */}
                {hash === `#${item}` && (
                  <motion.div
                    layoutId="activeClick"
                    className="z-10 absolute h-[0.2rem] bottom-1 inset-x-3 bg-muted-foreground rounded-full"
                  />
                )}

                {/* active hover */}
                <AnimatePresence>
                  {activeHover === i && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      layoutId="activeHover"
                      className="absolute inset-0 bg-woven rounded-full"
                    />
                  )}
                </AnimatePresence>
              </a>
            ))}
          <ModeToggle />
        </div>
      </motion.div>
    </header>
  );
}
