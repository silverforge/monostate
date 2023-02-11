import styles from './post-list.module.css';

import { LoadingScreen } from "@monostate/components";
import { PostListItem } from "./post-list-item";
import { DeletePostDialog } from "../dialog/delete-post-dialog";
import { EditPostDialog } from '../dialog/edit-post-dialog';
import { usePostListQuery } from '../../data-access/usePostListQuery';

export const PostList = () => {
  const { data: posts, isLoading: isPostListLoading } = usePostListQuery();

  if (isPostListLoading) return <LoadingScreen />

  return (
    <>
      <div className={styles['post-list']}>
        {posts?.map(p => (
          <PostListItem key={p.id} post={p} />
        ))}
      </div>

      <DeletePostDialog />
      <EditPostDialog />
    </>
  );
}