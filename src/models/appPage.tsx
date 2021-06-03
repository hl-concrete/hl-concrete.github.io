import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface AppPage {
  title: string;
  route: string;
  component: () => JSX.Element;
  icon?: IconDefinition;
}