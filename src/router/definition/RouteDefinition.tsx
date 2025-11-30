import { Dogs } from "pages/dogs";
import { Index } from "pages/index";
import { DogsRouteDefinition } from "router/definition/dogs/DogsRouteDefinition";

export const RouteDefinition = {
  INDEX: { element: <Index />, path: "/" },
  DOGS: { element: <Dogs />, path: "/dogs", childRoutes: Object.values(DogsRouteDefinition) }
} as const;
