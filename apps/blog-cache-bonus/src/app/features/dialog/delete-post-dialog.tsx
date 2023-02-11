import styles from './delete-post-dialog.module.css';
import { Button, Card, Dialog } from "@monostate/components";
import { useDeletePostMutation } from '../../data-access/useDeletePostMutation';
import { closeDeleteDialogAtom, selectedPostIdAtom } from '../../stores/dialog-atoms';
import { useAtom, useAtomValue } from 'jotai';

export const DeletePostDialog = () => {
  const postId = useAtomValue(selectedPostIdAtom);
  const [isDeleteDialogOpen, closeDeleteDialog] = useAtom(closeDeleteDialogAtom);

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