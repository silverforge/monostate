import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import styles from './edit-post-dialog.module.css';
import { Button, Card, Dialog } from "@monostate/components";
import { dialogActions } from './dialog.slice';

export const EditPostDialog = () => {
  const dispatch = useAppDispatch();
  const isEditDialogOpen = useAppSelector(state => state.dialog.isEditDialogOpen);
  const markedAsEditId = useAppSelector(state => state.dialog.postId);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onOkClick = () => {
    setIsLoading(true);
    console.log(' ::: markedAsEditId ::: ', markedAsEditId);
    // const response = await (await dispatch(deletePostAsync({ id: markedAsDeletedId }))).payload;
    // console.log(' ::: delete response payload :::', response);
    dispatch(dialogActions.closeEditDialog());
    setIsLoading(false);
  }

  const onCancelClick = () => {
    dispatch(dialogActions.closeEditDialog());
  }

  return (
    <Dialog isOpen={isEditDialogOpen}>
      <Card>
        <div className={styles['delete-dialog__container']}>
          <span>EDIT</span>
          {isLoading && <div>Saving post...</div>}
          <div className={styles['button-box']}>
            <Button onClick={onOkClick} text="Ok" />
            <Button onClick={onCancelClick} text="Cancel" />
          </div>
        </div>
      </Card>
    </Dialog>
  );
}