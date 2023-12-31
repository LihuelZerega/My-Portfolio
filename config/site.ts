export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Lihuel Zerega | Portfolio",
	description: "",
	navItems: [
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Contact",
      href: "/contact",
    }
	],
	navMenuItems: [
		{
			label: "Projects",
			href: "/projects",
		  },
		  {
			label: "About",
			href: "/about",
		  },
		  {
			label: "Contact",
			href: "/contact",
		  }
	],
	links: {
		github: "https://github.com/LihuelZerega",
		linkedin: "https://www.linkedin.com/in/lihuelzerega/",
		docs: "https://nextui.org",
		discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev"
	},
};
