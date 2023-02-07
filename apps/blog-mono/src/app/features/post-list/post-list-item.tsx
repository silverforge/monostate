import { FC } from "react";
import { Post } from "../../../typedefs";
import { Card } from "@monostate/components";
import { DeleteIcon, EditIcon } from "@monostate/icons";

import styles from './post-list-item.module.css';
import { useAppDispatch } from "../../store/hooks";
import { dialogActions } from "../../store/slices/dialog.slice";

export type PostListItemProps = {
  post: Post;
}

export const PostListItem: FC<PostListItemProps> = ({ post }) => {
  const dispatch = useAppDispatch();

  const handleOnEditClick = (id: string) => {
    dispatch(dialogActions.openEditDialog(id));
  }

  const handleOnDeleteClick = (id: string) => {
    dispatch(dialogActions.openDeleteDialog(id));
  }

  return (
    <Card>
      <div className={styles['post-list-item']}>
        <div className={styles['post-list-item__header-box']}>
          <span className={styles['post-list-item__title']} >{post.title}</span>
          <div className={styles['post-list-item__icon-box']}>
            <EditIcon onClick={() => handleOnEditClick(post.id)} />
            <DeleteIcon onClick={() => handleOnDeleteClick(post.id)} />
          </div>
        </div>
        <span className={styles['post-list-item__text']}>{post.text}</span>
      </div>
    </Card>
  );
}
