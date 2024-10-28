export type Project = {
  title: string;
  href: string;
  description: string;
  tools: string[];
  imagePath?: string;
};

export const projects: Project[] = [
  {
    title: "Saikindo",
    href: "https://saikindo.co.id",
    description: `Saikindo company's website containing the company profile, products, and other services.`,
    tools: ["next", "react", "tailwind", "typescript", "shadcn", "zustand"],
    imagePath: "images/saikindo-shoot-1.jpg",
  },
  {
    title: "Next Jikan",
    href: "https://next-jikan.vercel.app",
    description: `Nextjs with anime data from public api jikan animae`,
    tools: ["next", "react", "tailwind", "typescript", "shadcn", "zustand"],
    imagePath: "images/next-jikan-shoot-1.jpg",
  },
  {
    title: "PublicApi",
    href: "https://tamipublicapi.vercel.app/",
    description: `The project retrieves data from a public API called OMDB API and presents it in a grid system. It includes features like searching, filtering, and detailed views for each item, offering a comprehensive and user-friendly interface.`,
    tools: [
      "shadcn",
      "zustand",
      "DummyJson",
      "FakestoreApi",
      "JikanAnime",
      "Jsonplaceholder",
      "NewsApi",
      "Reqres",
      "Sisko",
      "TMDB",
      "nextjs",
      "omdbapi",
    ],
    imagePath: "images/tamipublicapi-shoot-1.jpg",
  },
  {
    title: "Vite Firebase",
    href: "https://vite-firebase-tami.vercel.app",
    description: `Vite buildtool with database and storage from firebase and hosted by vercel.`,
    tools: ["vite", "firebase", "tailwind", "typescript", "shadcn", "zustand"],
    imagePath: "images/vite-firebase-shoot-1.jpg",
  },
  {
    title: "Hadin Al Musri`",
    href: "https://hadinalmusri.com",
    description: `Hadinalmusri school website located in Pagaden Subang, containing the school profile and other information.`,
    tools: ["next", "react", "tailwind", "typescript", "shadcn", "zustand"],
  },
  {
    title: "Next Shad",
    href: "https://next-shad-tami.vercel.app",
    description: `Nextjs with database and storage from vercel, include hosting`,
    tools: ["next", "vercel", "react", "tailwind", "typescript", "shadcn", "zustand"],
  },
  {
    title: "Next Appwrite",
    href: "https://next-appwrite.vercel.app",
    description: `Nextjs with database and storage from appwrite, and hosted by vercel`,
    tools: ["next", "appwrite", "react", "tailwind", "typescript", "shadcn", "zustand"],
  },
  {
    title: "Vite Shop Tami",
    href: "https://vite-shop-tami.vercel.app",
    description: `Using Vite for a React frontend, with a Node.js and Express backend connected to a MongoDB database, and hosting the project on Vercel.`,
    tools: ["vite", "mongodb", "express", "nodejs", "tailwind", "typescript", "shadcn", "zustand"],
  },
  {
    title: "Vite Shad",
    href: "https://vite-shad.vercel.app",
    description: "Vite buildtool contains components and tips with hosting from vercel.",
    tools: ["html", "css", "javascript", "tailwind", "shadcn", "zustand"],
  },
  {
    title: "Next Lang",
    href: "https://next-lang-tami.vercel.app",
    description:
      "This website is built using Next.js, with dynamic internationalization powered by next-intl, allowing seamless language switching between English, Arabic, and more",
    tools: ["next", "next-intl", "tailwind", "typescript", "shadcn", "zustand"],
  },
  {
    title: "MERN",
    href: "https://tamimern.vercel.app/",
    description: `This project involves implementing four todo apps, each with identical functionality but utilizing different tools for their respective implementations.`,
    tools: ["bcrypt", "cloudinary", "freesqldb", "jwt", "mongodb", "mongoose", "multer", "mysql", "railway", "react"],
  },
];
