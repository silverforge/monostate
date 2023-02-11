import { useEffect, useState } from 'react';
import styles from './edit-post-dialog.module.css';
import { Button, Card, Dialog, InputText, InputTextArea } from "@monostate/components";
import { usePostQuery } from '../../data-access/usePostQuery';
import { useUpdatePostMutation } from '../../data-access/useUpdatePostMutation';
import { useAtom, useAtomValue } from 'jotai';
import { closeEditDialogAtom, selectedPostIdAtom } from '../../stores/dialog-atoms';

export const EditPostDialog = () => {
  const postId = useAtomValue(selectedPostIdAtom);
  const [isEditDialogOpen, closeEditDialog] = useAtom(closeEditDialogAtom);

  const [title, setTitle] = useState<string>("");
  const [text, setText] = useState<string>("");

  const { data: postResult } = usePostQuery(postId);

  useEffect(() => {
    if (postResult) {
      setTitle(postResult.title);
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