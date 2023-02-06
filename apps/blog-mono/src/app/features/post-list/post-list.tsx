import styles from './post-list.module.css';

import { LoadingScreen } from "@monostate/components";
import { useAppSelector } from "../../store/hooks";
import { useGetPostListAsync } from "./hooks/useGetPostListAsync";
import { PostListItem } from "./post-list-item";
import { DeletePostDialog } from "../dialog/delete-post-dialog";

export const PostList = () => {
  const isPostListLoading = useAppSelector(state => state.postList.isPostListLoading);
  const { posts } = useGetPostListAsync();

  if (isPostListLoading) return <LoadingScreen />

  return (
    <>
      <div className={styles['post-list']}>
        {posts.map(p => (
          <PostListItem key={p.id} post={p} />
        ))}
      </div>

      <DeletePostDialog />
    </>
  );
}