import { memo, useCallback, type FC } from "react";
import { useNavigate, useParams } from "react-router";
import { FlexBox } from "components/atom/div/FlexBox";
import { Pagination } from "components/Pagination";
import { DogsRouteDefinition } from "router/definition/dogs/DogsRouteDefinition";

export const DogsListIndex: FC = memo(() => {
  const navigate = useNavigate();
  const { index } = useParams();

  const handleChangePagination = useCallback(
    (newIndex: string) => navigate(`${DogsRouteDefinition.LIST.path}/${newIndex}`),
    [navigate]
  );

  return (
    <FlexBox className='w-full'>
      {index}
      <Pagination
        currentIndex={index ?? "1"}
        targetLength={100}
        perPageCount={10}
        onChange={handleChangePagination}
      ></Pagination>
    </FlexBox>
  );
});
