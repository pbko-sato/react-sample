import { memo, type FC } from "react";

export const Footer: FC = memo(() => (
  <footer
    style={{
      width: "100%",
      height: "30px",
      bottom: 0,
      left: 0,
      position: "sticky",
      opacity: 1,
      backgroundColor: "#FFFFFF",
      zIndex: 1000,
      textAlign: "center",
      borderTop: "1px solid #000000"
    }}
  >
    <span>サンプ ルアプリ</span>
  </footer>
));
