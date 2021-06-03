import { AppPage } from "../models";
import { AboutPage } from "./about";
import { ContactPage } from "./contact";
import { GalleryPage } from "./gallery";
import { HomePage } from "./home";

export const pages: AppPage[] = [
  {
    title: "Home",
    route: "/",
    component: HomePage,
  },
  {
    title: "About",
    route: "/about",
    component: AboutPage,
  },
  {
    title: "Gallery",
    route: "/gallery",
    component: GalleryPage,
  },
  {
    title: "Contact Us",
    route: "/contact",
    component: ContactPage,
  }
];