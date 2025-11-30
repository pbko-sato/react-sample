import { memo, useCallback, useRef, type FC, type ReactNode } from "react";
import { useNavigate } from "react-router";
import { LayoutView } from "layout/LayoutView";
import { DogsRouteDefinition } from "router/definition/dogs/DogsRouteDefinition";
import { RouteDefinition } from "router/definition/RouteDefinition";
import type { RouteObject } from "types/router/RouteDefinition";

interface LayoutProps {
  /**
   * 子要素
   * @type {ReactNode}
   */
  children: ReactNode;
}

export const Layout: FC<LayoutProps> = memo(({ children }) => {
  const navigate = useNavigate();

  const dropdownRef = useRef<HTMLElement>(null);
  const dropdownTarget = [
    RouteDefinition.INDEX,
    { ...DogsRouteDefinition.LIST, path: `${DogsRouteDefinition.LIST.path}/1` },
    DogsRouteDefinition.DETAIL
  ] as unknown as RouteObject[];

  const handleClickDropdown = useCallback(
    (path: string) => {
      navigate(path);
      dropdownRef.current?.click();
    },
    [navigate]
  );

  return (
    <LayoutView
      footerText='フッター'
      dropdownTarget={dropdownTarget}
      dropdownRef={dropdownRef}
      onClickDropdown={handleClickDropdown}
    >
      {children}
    </LayoutView>
  );
});
