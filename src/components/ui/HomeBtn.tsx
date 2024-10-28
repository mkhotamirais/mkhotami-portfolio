import { LucideHome } from "lucide-react";
import { Button } from "./button";

export default function HomeBtn() {
  return (
    <Button asChild size="icon" variant="ghost" className="rounded-full min-w-10 text-primary">
      <a href="/" title="home">
        <LucideHome />
      </a>
    </Button>
  );
}
