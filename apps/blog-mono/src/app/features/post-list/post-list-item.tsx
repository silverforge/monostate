import { FC } from "react";
import { Post } from "../../../typedefs";
import { Card } from "@monostate/components";

import styles from './post-list-item.module.css';

export type PostListItemProps = {
  post: Post;
}

export const PostListItem: FC<PostListItemProps> = ({ post }) => {
  return (
    <Card>
      <div className={styles['post-list-item']}>
        <span className={styles['post-list-item__title']} >{post.title}</span>
        <span className={styles['post-list-item__text']}>{post.text}</span>
      </div>
    </Card>
  );
}
