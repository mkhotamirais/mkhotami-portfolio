import { MouseEvent, useState } from "react";
import { projects } from "./lib/projects";
import { Input } from "./components/ui/input";
import { Badge } from "./components/ui/badge";
import { Link } from "react-router-dom";
import { Button } from "./components/ui/button";
import { LuHome } from "react-icons/lu";
import { ModeToggle } from "./components/theme/ModeToggle";
import ItemsProjectProjects from "./components/ItemsProjectProjects";

export default function Projects() {
  const [cari, setCari] = useState("");
  const [selectedBadge, setSelectedBadge] = useState<string[]>([]);

  //   const badges = [...new Set(projects.flatMap((project) => project.tools))];
  const badges = Array.from(new Set(projects.flatMap((project) => project.tools)));

  const filteredProjects = projects
    .filter((item) => item.title.toLowerCase().includes(cari.toLowerCase()))
    .filter((item) => selectedBadge.every((badge) => item.tools.includes(badge)));

  const onBadge = (e: MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    const badge: string = target?.innerText;
    if (selectedBadge.includes(badge)) {
      setSelectedBadge((prev) => prev.filter((p) => p !== badge));
    } else setSelectedBadge((prev) => [...prev, badge]);
  };

  return (
    <section className="py-4">
      <article className="prose min-w-full">
        <div className="container">
          <div className="flex h-full justify-between items-center mb-4">
            <h2 className="my-0">Projects</h2>
            <div className="flex gap-2">
              <Button asChild size="icon" variant="ghost" className="rounded-full">
                <Link to="/" title="home">
                  <LuHome className="text-primary" />
                </Link>
              </Button>
              <ModeToggle />
            </div>
          </div>

          <div className="flex gap-2 lg:gap-2 items-start">
            {/* skills badges */}
            <div className="border-r pr-2">
              <Button variant={"outline"} className="w-full mb-4 text-primary">
                Skills
              </Button>
              <div className="w-32 flex gap-1 flex-wrap justify-center h-[calc(100vh-9rem)] overflow-y-scroll">
                {badges
                  ?.sort((a, b) => a.localeCompare(b))
                  .map((item, i) => (
                    <Badge
                      variant={selectedBadge.includes(item) ? "secondary" : "default"}
                      key={i}
                      className="cursor-pointer lowercase"
                      onClick={onBadge}
                    >
                      {item}
                    </Badge>
                  ))}
              </div>
            </div>

            <div className="w-full">
              {/* search input */}
              <Input
                value={cari}
                onChange={(e) => setCari(e.target.value)}
                placeholder="Search project.."
                className="bg-cyan-100/15 mb-4"
              />
              <div className="h-[calc(100vh-9rem)] overflow-y-scroll">
                {/* content */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 mb-8">
                  {filteredProjects.map((item, i) => (
                    <ItemsProjectProjects key={i} item={item} />
                  ))}
                </div>

                {/* reset */}
                {filteredProjects.length === 0 && (
                  <div className="flex justify-center items-center flex-col gap-2 italic text-xl mt-12">
                    <div>No Result</div>
                    <Button
                      onClick={() => {
                        setCari("");
                        setSelectedBadge([]);
                      }}
                      type="button"
                      className=""
                    >
                      Reset
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}
