import { Card } from "@monostate/components"

import styles from './add-post.module.css';
import { useAppDispatch } from "../../store/hooks";
import { AddPostAsyncResponse, addPostAsync } from "../../store/thunks/addPostAsync";
import { useState } from "react";

export const AddPost = () => {
  const [title, setTitle] = useState<string>("");
  const [text, setText] = useState<string>("");

  const dispatch = useAppDispatch();

  const handleOnSaveClick = async () => {
    const response = await (await dispatch(addPostAsync({ title, text }))).payload as AddPostAsyncResponse;
    console.log(' ::: response payload ::: ', response);
  }

  return (
    <Card>
      <div className={styles['add-post']}>
        <span>title</span>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        <span>text</span>
        <textarea value={text} onChange={(e) => setText(e.target.value)} />
        <button type="button" onClick={handleOnSaveClick}>Save</button>
      </div>
    </Card>
  );
}
