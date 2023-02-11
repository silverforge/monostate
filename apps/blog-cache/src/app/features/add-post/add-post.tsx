import { Button, Card, InputText, InputTextArea } from "@monostate/components"

import styles from './add-post.module.css';
import { useState } from "react";
import { useAddPostMutation } from "@monostate/client";

export const AddPost = () => {
  const [title, setTitle] = useState<string>("");
  const [text, setText] = useState<string>("");

  const { mutateAsync: addPostAsync } = useAddPostMutation();

  const handleOnSaveClick = async () => {
    const response = await addPostAsync({ title, text });
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
