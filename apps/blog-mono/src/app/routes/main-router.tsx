import { Route, Routes } from "react-router-dom";
import { PostListPage } from "../pages/post-list-page";
import { AddPostPage } from "../pages/add-post-page";

export enum MainRoute {
  home = '/',
  edit = '/edit'
}

export const MainRouter = () => {
  return (
    <Routes>
      <Route
        path={MainRoute.home}
        element={
          <PostListPage />
        }
      />
      <Route
        path={MainRoute.edit}
        element={
          <AddPostPage />
        }
      />
    </Routes>
  );
}
