import { Button, Card, Dialog, LoadingScreen } from "@monostate/components";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { useGetPostListAsync } from "./hooks/useGetPostListAsync";
import { PostListItem } from "./post-list-item";

import styles from './post-list.module.css';
import { postListActions } from "./post-list-slice";
import { deletePostAsync } from "../../store/thunks/deletePostAsync";

export const PostList = () => {
  const dispatch = useAppDispatch();
  const isPostListLoading = useAppSelector(state => state.postList.isPostListLoading);
  const isDeleteDialogOpen = useAppSelector(state => state.postList.isDeleteDialogOpen);
  const markedAsDeletedId = useAppSelector(state => state.postList.markedAsDeletedId);
  const { posts } = useGetPostListAsync();

  if (isPostListLoading) return <LoadingScreen />

  const onOkClick = async () => {
    console.log(' ::: ok ::: ');
    await dispatch(deletePostAsync({ id: markedAsDeletedId }));
    dispatch(postListActions.closeDeleteDialog());
  }

  const onCancelClick = () => {
    console.log(' ::: cancel ::: ');
    dispatch(postListActions.closeDeleteDialog());
  }

  return (
    <>
      <div className={styles['post-list']}>
        {posts.map(p => (
          <PostListItem key={p.id} post={p} />
        ))}
      </div>

      <Dialog isOpen={isDeleteDialogOpen}>
        <Card>
          <div className={styles['delete-dialog__container']}>
            <span>Are you sure you want to delete this post?</span>
            <div className={styles['button-box']}>
              <Button onClick={onOkClick} text="Ok" />
              <Button onClick={onCancelClick} text="Cancel" />
            </div>
          </div>
        </Card>
      </Dialog>
    </>
  );
}