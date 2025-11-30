import { Dogs } from "pages/dogs";
import { Index } from "pages/index";
import { DogsRouteDefinition } from "router/definition/dogs/DogsRouteDefinition";

export const RouteDefinition = {
  INDEX: { element: <Index />, title: "TOP", path: "/" },
  DOGS: { element: <Dogs />, title: "わんこ", path: "/dogs", childRoutes: Object.values(DogsRouteDefinition) }
} as const;
