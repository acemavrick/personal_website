// sitewide configuration - single source of truth
export const site = {
  name: "Shubh Randeria",
  pfp: "https://avatars.githubusercontent.com/acemavrick",
  url: "https://randeria.dev",
  tagline: `Hello! My name is Shubh. 
This is a preview branch of my website that is under active and frequent development.
As such, it is not fully functional and may contain incorrect information.
Feel free to give feedback (my socials are linked below) and you can also check out
the actual website located at <a href="https://randeria.dev">randeria.dev</a>.`,
  socials: [
    { href: "https://github.com/acemavrick", handle: "acemavrick", icon: "github" },
    { href: "https://www.youtube.com/channel/UCv9H6UivmaxVSGd0ayGwV7w", handle: "@acemavrick5020", icon: "youtube" },
    { href: "https://instagram.com/shubh.randeria", handle: "shubh.randeria", icon: "instagram" },
    { href: "mailto:shubh@randeria.dev", handle: "shubh@randeria.dev", icon: "mail" },
  ],
} as const;

export type Social = typeof site.socials[number];
