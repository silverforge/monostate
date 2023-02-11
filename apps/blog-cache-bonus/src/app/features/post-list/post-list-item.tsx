import { FC } from "react";
import { Card } from "@monostate/components";
import { DeleteIcon, EditIcon } from "@monostate/icons";

import styles from './post-list-item.module.css';
import { Post } from "@monostate/client";
import { useSetAtom } from "jotai";
import { openDeleteDialogAtom, openEditDialogAtom } from "../../stores/dialog-atoms";

export type PostListItemProps = {
  post: Post;
}

export const PostListItem: FC<PostListItemProps> = ({ post }) => {
  const openEditDialog = useSetAtom(openEditDialogAtom);
  const openDeleteDialog = useSetAtom(openDeleteDialogAtom);

  return (
    <Card>
      <div className={styles['post-list-item']}>
        <div className={styles['post-list-item__header-box']}>
          <span className={styles['post-list-item__title']} >{post.title}</span>
          <div className={styles['post-list-item__icon-box']}>
            <EditIcon onClick={() => openEditDialog(post.id)} />
            <DeleteIcon onClick={() => openDeleteDialog(post.id)} />
          </div>
        </div>
        <span className={styles['post-list-item__text']}>{post.text}</span>
      </div>
    </Card>
  );
}
