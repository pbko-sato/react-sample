import { DogsDetail } from "pages/dogs/detail";
import { DogsDetailBreed } from "pages/dogs/detail/:breed";
import { DogsList } from "pages/dogs/list";
import { DogsListIndex } from "pages/dogs/list/:index";

export const DogsRouteDefinition = {
  LIST: {
    element: <DogsList />,
    path: "/dogs/list",
    title: "わんこ一覧",
    childRoutes: [{ element: <DogsListIndex />, title: "わんこ一覧", path: "/dogs/list/:index" }]
  },
  DETAIL: {
    element: <DogsDetail />,
    path: "/dogs/detail",
    title: "わんこ詳細",
    childRoutes: [{ element: <DogsDetailBreed />, title: "わんこ詳細", path: "/dogs/detail/:breed" }]
  }
} as const;
