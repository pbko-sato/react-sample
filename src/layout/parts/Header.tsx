import { memo, type FC } from "react";
import { Link } from "react-router";
import { RouteDefinition } from "router/definition/RouteDefinition";

export const Header: FC = memo(() => (
  <header
    style={{
      width: "100%",
      height: "100px",
      top: 0,
      left: 0,
      position: "sticky",
      opacity: 1,
      backgroundColor: "#FFFFFF",
      zIndex: 1000
    }}
  >
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "5px",
        borderBottom: "1px solid #000000"
      }}
    >
      <div>
        <h1>サンプルアプリ</h1>
      </div>
      <div>
        <nav>
          <ul style={{ listStyle: "none" }}>
            <li>
              <Link to={RouteDefinition.INDEX.path}>「{RouteDefinition.INDEX.path}」</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
));
