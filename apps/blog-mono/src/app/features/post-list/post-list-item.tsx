import { FC } from "react";
import { Post } from "../../../typedefs";
import { Card } from "@monostate/components";
import { DeleteIcon, EditIcon } from "@monostate/icons";

import styles from './post-list-item.module.css';
import { useAppDispatch } from "../../store/hooks";
import { deletePostAsync } from "../../store/thunks/deletePostAsync";

export type PostListItemProps = {
  post: Post;
}

export const PostListItem: FC<PostListItemProps> = ({ post }) => {
  const dispatch = useAppDispatch();

  const handleOnDeleteClick = (id: string) => {
    dispatch(deletePostAsync({ id }));
  }

  return (
    <Card>
      <div className={styles['post-list-item']}>
        <div className={styles['post-list-item__header-box']}>
          <span className={styles['post-list-item__title']} >{post.title}</span>
          <div className={styles['post-list-item__icon-box']}>
            <EditIcon />
            <DeleteIcon onClick={() => handleOnDeleteClick(post.id)} />
          </div>
        </div>
        <span className={styles['post-list-item__text']}>{post.text}</span>
      </div>
    </Card>
  );
}
