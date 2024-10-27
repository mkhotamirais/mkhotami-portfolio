import { Project } from "@/lib/projects";
import { useState } from "react";
import { Button } from "./ui/button";
import Modal from "./modals/Modal";
import { motion } from "framer-motion";

export default function ItemsProjectHero({ item, i }: { item: Project; i: number }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Modal open={open} setOpen={() => setOpen(false)} item={item} />
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1, transition: { delay: 1 + 0.2 * i, duration: 0.1 } }}
      >
        <div className="relative group hover:scale-105 transition">
          <div className="scale-0 group-hover:scale-100 transition absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/50 *:text-white flex gap-4">
            <Button variant={"link"} size="sm" onClick={() => setOpen(true)}>
              Detail
            </Button>
            <Button variant={"link"} size="sm">
              <a href={item.href} target="_blank" title="visit web">
                Visit
              </a>
            </Button>
          </div>
          <img src={item.imagePath} alt={"halo semua"} className="rounded-lg" />
        </div>
      </motion.div>
    </>
  );
}
