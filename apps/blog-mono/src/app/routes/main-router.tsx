import { Route, Routes } from "react-router-dom";

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
          <div>HOME</div>
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
