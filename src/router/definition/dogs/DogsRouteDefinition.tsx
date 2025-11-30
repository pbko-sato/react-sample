import { DogsDetail } from "pages/dogs/detail";
import { DogsDetailBreed } from "pages/dogs/detail/:breed";
import { DogsList } from "pages/dogs/list";
import { DogsListIndex } from "pages/dogs/list/:index";

export const DogsRouteDefinition = {
  LIST: {
    element: <DogsList />,
    path: "/dogs/list",
    childRoutes: [{ element: <DogsListIndex />, path: "/dogs/list/:index" }]
  },
  DETAIL: {
    element: <DogsDetail />,
    path: "/dogs/detail",
    childRoutes: [{ element: <DogsDetailBreed />, path: "/dogs/detail/:breed" }]
  }
} as const;
