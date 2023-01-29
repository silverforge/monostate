import { useEffect } from "react";
import { useAppDispatch } from "../../store/hooks";
import { getPostListAsync } from "../../store/thunks/getPostListAsync";

export const PostList = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPostListAsync());
  }, [dispatch]);

  return (
    <div>
      POSTSTTT
    </div>
  );
}