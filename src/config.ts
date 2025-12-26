// sitewide configuration - single source of truth
export const site = {
  name: "Shubh Randeria",
  pfp: "https://avatars.githubusercontent.com/acemavrick",
  url: "https://randeria.dev",
  tagline: `Hello! I'm Shubh, a high school senior. I like building software to learn new things and solve problems I encounter.  This site shows some of what I've worked on. Feel free to look around and don't hesitate to contact me if you have any feedback, questions, or just want to talk!`,
  socials: [
    { href: "https://github.com/acemavrick", handle: "acemavrick", icon: "github" },
    { href: "https://www.youtube.com/channel/UCv9H6UivmaxVSGd0ayGwV7w", handle: "@acemavrick5020", icon: "youtube" },
    { href: "https://instagram.com/shubh.randeria", handle: "shubh.randeria", icon: "instagram" },
    { href: "mailto:shubh@randeria.dev", handle: "shubh@randeria.dev", icon: "mail" },
  ],
} as const;

export type Social = typeof site.socials[number];
