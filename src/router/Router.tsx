import { type FC } from "react";
import { Route, Routes } from "react-router";
import { RouteDefinition } from "router/definition/RouteDefinition";

export const Router: FC = () => (
  <Routes>
    {Object.values(RouteDefinition).map(({ element, path, childRoutes }) =>
      childRoutes ? (
        <Route element={element} path={path}>
          {childRoutes.map((childRoute) =>
            childRoute.childRoutes ? (
              <Route element={childRoute.element} path={childRoute.path}>
                {childRoutes.map((grandChildRoute) => (
                  <Route key={grandChildRoute.path} element={grandChildRoute.element} path={grandChildRoute.path} />
                ))}
              </Route>
            ) : (
              <Route element={childRoute.element} path={childRoute.path} />
            )
          )}
        </Route>
      ) : (
        <Route element={element} path={path} />
      )
    )}
  </Routes>
);
