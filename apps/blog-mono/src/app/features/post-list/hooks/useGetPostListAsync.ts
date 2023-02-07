import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { getPostListAsync } from "../../../store/thunks/getPostListAsync";

export const useGetPostListAsync = () => {
  const dispatch = useAppDispatch();
  const posts = useAppSelector(state => state.post.posts);

  useEffect(() => {
    dispatch(getPostListAsync());
  }, [dispatch]);

  return {
    posts
  };
}
