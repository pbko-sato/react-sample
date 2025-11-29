import { type FC } from "react";
import { RouteDefinition } from "router/definition/RouteDefinition";

export const Index: FC = () => (
  <div>
    <div>
      <h1>「{RouteDefinition.INDEX.path}」へようこそ!</h1>
    </div>
  </div>
);
