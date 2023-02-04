import { AddPost } from "../features/add-post/add-post";

import styles from './add-post-page.module.css';

export const AddPostPage = () =>
  <div className={styles['container']}>
    <AddPost />
  </div>;
