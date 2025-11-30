import { memo, type FC } from "react";
import { Link } from "react-router";
import { FlexBox } from "components/atom/div/FlexBox";
import { RouteDefinition } from "router/definition/RouteDefinition";
import { ZIndex } from "styles/constants/ZIndex";

export const Header: FC = memo(() => (
  <header className={`navbar w-full h-[70px] top-0 left-0 py-0 sticky z-${ZIndex.LAYOUT} opacity-100 shadow-sm`}>
    <FlexBox horizontal justify='justify-between' className='w-full p-[5px]'>
      <div>
        <h1 className='text-5xl'>サンプルアプリ</h1>
      </div>
      <div>
        <nav>
          <ul className='list-none'>
            <li>
              <Link to={RouteDefinition.INDEX.path}>「{RouteDefinition.INDEX.path}」</Link>
            </li>
          </ul>
        </nav>
      </div>
    </FlexBox>
  </header>
));
