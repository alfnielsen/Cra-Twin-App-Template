import { Home } from "../pages/Home"

export interface IRoute {
  name: string
  path: string
  getPath: (...arg: string[]) => string
  end: boolean // exact [don't ally paths after this route]
  element: React.ReactElement
}

export enum PageName {
  Home = "Home",
}

export const routes: { [pageName in PageName]: IRoute } = {
  [PageName.Home]: {
    name: PageName.Home,
    path: "/",
    getPath: (...args: string[]) => `/${args.join("/")}`,
    end: true,
    element: <Home />,
  },
}

export const routeList = Object.values(routes)
