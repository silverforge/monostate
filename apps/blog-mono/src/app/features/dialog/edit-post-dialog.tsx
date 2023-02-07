import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import styles from './edit-post-dialog.module.css';
import { Button, Card, Dialog, InputText, InputTextArea } from "@monostate/components";
import { dialogActions } from '../../store/slices/dialog.slice';
import { getPostAsync } from '../../store/thunks/getPostAsync';
import { postActions } from '../../store/slices/post-slice';
import { updatePostAsync } from '../../store/thunks/updatePostAsync';

export const EditPostDialog = () => {
  const dispatch = useAppDispatch();
  const isEditDialogOpen = useAppSelector(state => state.dialog.isEditDialogOpen);
  const markedAsEditId = useAppSelector(state => state.dialog.postId);
  const post = useAppSelector(state => state.post.selectedPost);

  const [title, setTitle] = useState<string>("");
  const [text, setText] = useState<string>("");

  const [isSaving, setIsSaving] = useState<boolean>(false);

  useEffect(() => {
    if (markedAsEditId) {
      dispatch(getPostAsync({ id: markedAsEditId }));
    }
  }, [dispatch, markedAsEditId]);

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setText(post.text);
    }
  }, [post]);

  const cleanUpAndCloseDialog = () => {
    setTitle("");
    setText("");
    dispatch(postActions.clearSelectedPost());
    dispatch(dialogActions.closeEditDialog());
  }

  const onOkClick = async () => {
    setIsSaving(true);
    console.log(' ::: markedAsEditId ::: ', markedAsEditId);
    const response = (await dispatch(await updatePostAsync({ id: post?.id, title, text }))).payload;
    console.log(' ::: update response payload :::', response);
    setIsSaving(false);
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