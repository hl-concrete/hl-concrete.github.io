import { Route, Switch } from "react-router";
import { AppPage } from "../../models";

export interface MainContentRouterProps {
  pages: AppPage[];
}

export function MainContentRouter(props: MainContentRouterProps) {
  const pageToRoute = (page: AppPage): JSX.Element => {
    const { route, component } = page;
    return (
      <Route path={route} exact component={component} />
    )
  };

  return (

    <div className="app-shell-main-content">
      <Switch>
        {props.pages.map(pageToRoute)}
      </Switch>
    </div>
  )
}
