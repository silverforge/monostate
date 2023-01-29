import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getPostListAsync } from "../../store/thunks/getPostListAsync";

export const PostList = () => {
  const dispatch = useAppDispatch();
  const posts = useAppSelector(state => state.postList.posts);

  useEffect(() => {
    dispatch(getPostListAsync());
  }, [dispatch]);

  return (
    <div>
      {posts.map(p => (
        <div key={p.id}>{p.title}</div>
      ))}
    </div>
  );
}