// sitewide configuration - single source of truth
export const site = {
  name: "Shubh Randeria",
  // TODO find a better pfp
  pfp: "https://avatars.githubusercontent.com/acemavrick",
  url: "https://randeria.dev",
  // picked at random per load; the first is canonical and feeds meta/previews
  taglines: [
    `Stanford '30. I seek to advance cutting-edge work while building infrastructure that extends its reach.`,
    `Stanford '30. I seek to advance cutting-edge work while building infrastructure that extends its reach.`,
    `Stanford '30. I seek to advance cutting-edge work while building infrastructure that extends its reach.`,
    `Stanford '30. I seek to advance cutting-edge work while building infrastructure that extends its reach.`,
    `Stanford '30. I like to learn new things and build to solve problems I encounter.`,
    `Stanford '30. I like to learn new things and build to solve problems I encounter.`,
    `Stanford '30. I like to learn new things and build to solve problems I encounter.`,
    `Stanford '30. I like to learn new things and build to solve problems I encounter.`,
    `Stanford '30. Have you checked out my new website? It's at: http://localhost:4321/`,
  ],

  // `icon` is any iconify name from simple-icons or lucide - see icon-sets.iconify.design
  links: {
    primary: [
      { href: "/resume", handle: "Résumé", icon: "lucide:file-text" },
      { href: "https://github.com/acemavrick", handle: "GitHub", icon: "simple-icons:github" },
      { href: "https://www.linkedin.com/in/shubh-randeria/", handle: "LinkedIn", icon: "simple-icons:linkedin" },
    ],
    secondary: [
      { href: "mailto:shubh@randeria.dev", handle: "Email", icon: "lucide:mail" },
      { href: "https://instagram.com/shubh.randeria", handle: "Instagram", icon: "simple-icons:instagram" },
      { href: "https://www.youtube.com/channel/UCv9H6UivmaxVSGd0ayGwV7w", handle: "YouTube", icon: "simple-icons:youtube" },
    ],
  },
} as const;

/** canonical tagline - meta description, og/twitter cards, JSON-LD */
export const tagline = site.taglines[0];

export type Link = (typeof site.links.primary)[number];

/**
 * Project order. Earlier buckets rank higher; unlisted ids fall into an implicit last one.
 * A normal bucket leaks - in-progress members are promoted to the top of the page.
 * An `absolute` bucket holds them in place. Ties break by date, undated last.
 */
export const ordering: readonly { ids: readonly string[]; absolute?: boolean }[] = [
  { ids: ["simulations", "songbook", "uildl", "mustang-bucks"] },
  { ids: ["wf-screensaver", "n-body"] },
];
