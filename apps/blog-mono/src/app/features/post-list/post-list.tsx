import { useGetPostListAsync } from "./hooks/useGetPostListAsync";
import { PostListItem } from "./post-list-item";

import styles from './post-list.module.css';

export const PostList = () => {
  const { posts } = useGetPostListAsync();

  return (
    <div className={styles['post-list']}>
      {posts.map(p => (
        <PostListItem key={p.id} post={p} />
      ))}
    </div>
  );
}