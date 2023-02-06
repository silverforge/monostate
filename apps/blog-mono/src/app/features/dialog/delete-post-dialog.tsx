import styles from './delete-post-dialog.module.css';
import { Button, Card, Dialog } from "@monostate/components";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { postListActions } from "../post-list/post-list-slice";
import { deletePostAsync } from "../../store/thunks/deletePostAsync";
import { useState } from 'react';

export const DeletePostDialog = () => {
  const dispatch = useAppDispatch();
  const isDeleteDialogOpen = useAppSelector(state => state.postList.isDeleteDialogOpen);
  const markedAsDeletedId = useAppSelector(state => state.postList.markedAsDeletedId);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onOkClick = async () => {
    setIsLoading(true);
    const response = await (await dispatch(deletePostAsync({ id: markedAsDeletedId }))).payload;
    console.log(' ::: delete response payload :::', response);
    dispatch(postListActions.closeDeleteDialog());
    setIsLoading(false);
  }

  const onCancelClick = () => {
    dispatch(postListActions.closeDeleteDialog());
  }

  return (
    <Dialog isOpen={isDeleteDialogOpen}>
      <Card>
        <div className={styles['delete-dialog__container']}>
          <span>Are you sure you want to delete this post?</span>
          {isLoading && <div>Deleting post...</div>}
          <div className={styles['button-box']}>
            <Button onClick={onOkClick} text="Ok" />
            <Button onClick={onCancelClick} text="Cancel" />
          </div>
        </div>
      </Card>
    </Dialog>
  );
}