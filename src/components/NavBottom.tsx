import { Button } from "@/components/ui/button";
import { menu } from "@/lib/menu";
import { useEffect, useRef, useState } from "react";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa6";
import { useLocation } from "react-router-dom";
import { ModeToggle } from "./theme/ModeToggle";
import HomeBtn from "./ui/HomeBtn";

export default function NavBottom() {
  const location = useLocation();
  const menuRef = useRef<HTMLDivElement | null>(null);

  const [canScrollLeft, setCanScrollLeft] = useState(true);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Function to check scroll position
  const checkScrollPosition = () => {
    const menuEl = menuRef.current;
    if (menuEl) {
      setCanScrollLeft(menuEl.scrollLeft > 0);
      setCanScrollRight(menuEl.scrollWidth > menuEl.clientWidth + menuEl.scrollLeft);
    }
  };

  // Scroll event listener
  useEffect(() => {
    checkScrollPosition(); // Initial check on mount
    const menuEl = menuRef.current;
    if (menuEl) {
      menuEl.addEventListener("scroll", checkScrollPosition);
    }
    return () => {
      if (menuEl) {
        menuEl.removeEventListener("scroll", checkScrollPosition);
      }
    };
  }, []);

  const scrollLeft = () => {
    menuRef.current?.scrollBy({ left: -100, behavior: "smooth" });
  };

  const scrollRight = () => {
    menuRef.current?.scrollBy({ left: 100, behavior: "smooth" });
  };

  return (
    <div
      id="nav-bottom"
      className="flex sm:hidden z-50w-full fixed bottom-0 left-0 right-0 bg-background/70 backdrop-blur"
    >
      <div className="container h-16 flex items-center justify-center">
        {/* left arrow */}
        {canScrollLeft && (
          <button type="button" title="nav left" className="p-1" onClick={scrollLeft}>
            <FaCaretLeft />
          </button>
        )}

        {/* menu */}
        <div ref={menuRef} className="menu flex overflow-x-scroll">
          <HomeBtn />
          <ModeToggle align="start" />
          {menu.map((item, i) => (
            <div key={i} className="relative">
              <Button variant="link" asChild className="capitalize">
                <a href={`#${item}`} key={i} className="">
                  {item}
                </a>
              </Button>
              {location.hash === `#${item}` && <div className="bg-primary/15 rounded-lg absolute inset-0" />}
            </div>
          ))}
        </div>

        {/* right arrow */}
        {canScrollRight && (
          <button type="button" title="nav right" className="p-1" onClick={scrollRight}>
            <FaCaretRight />
          </button>
        )}
      </div>
    </div>
  );
}
