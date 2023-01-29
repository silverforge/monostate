import { Route, Routes } from "react-router-dom";
import { PostListPage } from "../pages/post-list-page";

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
          <div>EDIT</div>
        }
      />
    </Routes>
  );
}
