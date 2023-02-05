import { FC } from "react";
import { Post } from "../../../typedefs";
import { Card } from "@monostate/components";
import { DeleteIcon, EditIcon } from "@monostate/icons";

import styles from './post-list-item.module.css';

export type PostListItemProps = {
  post: Post;
}

export const PostListItem: FC<PostListItemProps> = ({ post }) => {
  return (
    <Card>
      <div className={styles['post-list-item']}>
        <div className={styles['post-list-item__header-box']}>
          <span className={styles['post-list-item__title']} >{post.title}</span>
          <div className={styles['post-list-item__icon-box']}>
            <EditIcon />
            <DeleteIcon />
          </div>
        </div>
        <span className={styles['post-list-item__text']}>{post.text}</span>
      </div>
    </Card>
  );
}
