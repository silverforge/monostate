import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import styles from './edit-post-dialog.module.css';
import { Button, Card, Dialog, InputText, InputTextArea } from "@monostate/components";
import { dialogActions } from '../../store/slices/dialog.slice';
import { getPostAsync } from '../../store/thunks/getPostAsync';

export const EditPostDialog = () => {
  const dispatch = useAppDispatch();
  const isEditDialogOpen = useAppSelector(state => state.dialog.isEditDialogOpen);
  const markedAsEditId = useAppSelector(state => state.dialog.postId);
  const post = useAppSelector(state => state.post.selectedPost);

  const [title, setTitle] = useState<string>("");
  const [text, setText] = useState<string>("");

  const [isLoading, setIsLoading] = useState<boolean>(false);

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
        <div className={styles['edit-dialog__container']}>
          <InputText text="title" value={title} onValueChange={setTitle} />
          <InputTextArea text="text" value={text} onValueChange={setText} />
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