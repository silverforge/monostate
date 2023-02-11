import styles from './delete-post-dialog.module.css';
import { Button, Card, Dialog } from "@monostate/components";
import { useDialogStore } from '../../stores/useDialogStore';
import { useDeletePostMutation } from '@monostate/client';

export const DeletePostDialog = () => {
  const [postId, isDeleteDialogOpen, closeDeleteDialog] = useDialogStore(state => [state.selectedPostId, state.isDeleteDialogOpen, state.closeDeleteDialog]);

  const { mutateAsync: deletePostAsync, isLoading } = useDeletePostMutation();

  const onOkClick = async () => {
    const response = await deletePostAsync({ id: postId || "" });
    console.log(' ::: delete response payload :::', response);
    closeDeleteDialog();
  }

  return (
    <Dialog isOpen={isDeleteDialogOpen}>
      <Card>
        <div className={styles['delete-dialog__container']}>
          <span>Are you sure you want to delete this post?</span>
          {isLoading && <div>Deleting post...</div>}
          <div className={styles['button-box']}>
            <Button onClick={onOkClick} text="Ok" />
            <Button onClick={closeDeleteDialog} text="Cancel" />
          </div>
        </div>
      </Card>
    </Dialog>
  );
}