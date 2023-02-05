import { Card } from "@monostate/components"

import styles from './add-post.module.css';
import { useAppDispatch } from "../../store/hooks";
import { AddPostAsyncResponse, addPostAsync } from "../../store/thunks/addPostAsync";

export const AddPost = () => {
  const dispatch = useAppDispatch();

  const handleOnSaveClick = async () => {
    const response = await (await dispatch(addPostAsync())).payload as AddPostAsyncResponse;
    console.log(' ::: response payload ::: ', response);
  }

  return (
    <Card>
      <div className={styles['add-post']}>
        <span>title</span>
        <input type="text" />
        <span>text</span>
        <textarea />
        <button type="button" onClick={handleOnSaveClick}>Save</button>
      </div>
    </Card>
  );
}