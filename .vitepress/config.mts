import { defineConfig } from "vitepress";
import { withSidebar } from "vitepress-sidebar";

const vitePressOptions = {
  title: "prototype-daigakuka",
  description: "MADE WITH TEKITOU MIND",
  themeConfig: {
    nav: [{ text: "Home", link: "/" }],
    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
  base: "/prototype-daigakuka/",
};

const vitePressSidebarOptions = {
  documentRootPath: "/",
  collapsed: false,
  capitalizeFirst: true,
};

export default defineConfig(
  withSidebar(vitePressOptions, vitePressSidebarOptions),
);
