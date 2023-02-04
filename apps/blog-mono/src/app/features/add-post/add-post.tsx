import { Card } from "@monostate/components"

import styles from './add-post.module.css';

export const AddPost = () => {
  return (
    <Card>
      <div className={styles['add-post']}>
        <span>title</span>
        <input type="text" />
        <span>text</span>
        <textarea />
        <button type="button">Save</button>
      </div>
    </Card>
  );
}