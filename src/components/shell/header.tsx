import { NavLink } from "react-router-dom";
import { AppPage } from "../../models";
import { pages } from "../../pages";

export function Header(): JSX.Element {
  return (
    <div className="app-shell-header">
      {"{{LOGO HERE}}"}
      {pages.map((page: AppPage) => {
        const { route, title } = page;
        return (
          <NavLink to={route} className="app-shell-header-link">{title}</NavLink>
        );
      })}
    </div>
  )
}