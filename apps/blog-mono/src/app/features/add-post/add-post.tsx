import { Button, Card, InputText, InputTextArea } from "@monostate/components"

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
    console.log(' ::: save response payload ::: ', response);
    setTitle("");
    setText("");
  }

  return (
    <Card>
      <div className={styles['add-post']}>
        <InputText text="title" value={title} onValueChange={setTitle} />
        <InputTextArea text="text" value={text} onValueChange={setText} />
        <Button onClick={handleOnSaveClick} text="Save" />
      </div>
    </Card>
  );
}
