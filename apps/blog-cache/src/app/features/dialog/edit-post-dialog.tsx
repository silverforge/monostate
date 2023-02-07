import { useEffect, useState } from 'react';
import styles from './edit-post-dialog.module.css';
import { Button, Card, Dialog, InputText, InputTextArea } from "@monostate/components";
import { useDialogStore } from '../../stores/useDialogStore';
import { usePostQuery } from '../../data-access/usePostQuery';
import { useUpdatePostMutation } from '../../data-access/useUpdatePostMutation';

export const EditPostDialog = () => {
  const [postId, isEditDialogOpen, closeEditDialog] = useDialogStore(state => [state.selectedPostId, state.isEditDialogOpen, state.closeEditDialog]);

  const [title, setTitle] = useState<string>("");
  const [text, setText] = useState<string>("");

  const { data: postResult } = usePostQuery(postId);

  useEffect(() => {
    if (postResult) {
      setTitle(postResult.text);
      setText(postResult.text);
    }
  }, [postResult]);

  const { mutateAsync: updatePostAsync, isLoading: isSaving } = useUpdatePostMutation();

  const cleanUpAndCloseDialog = () => {
    setTitle("");
    setText("");
    closeEditDialog();
  }

  const onOkClick = async () => {
    console.log(' ::: markedAsEditId ::: ', postId);
    const response = await updatePostAsync({
      id: postResult?.id || "",
      title,
      text
    });
    console.log(' ::: update response payload :::', response);
    cleanUpAndCloseDialog();
  }

  const onCancelClick = () => {
    cleanUpAndCloseDialog();
  }

  return (
    <Dialog isOpen={isEditDialogOpen}>
      <Card>
        <div className={styles['edit-dialog__container']}>
          <InputText text="title" value={title} onValueChange={setTitle} />
          <InputTextArea text="text" value={text} onValueChange={setText} fixed />
          {isSaving && <div>Saving post...</div>}
          <div className={styles['button-box']}>
            <Button onClick={onOkClick} text="Ok" />
            <Button onClick={onCancelClick} text="Cancel" />
          </div>
        </div>
      </Card>
    </Dialog>
  );
}