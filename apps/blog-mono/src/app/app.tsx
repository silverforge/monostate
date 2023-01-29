import { Menu, MenuItem, NavBar } from '@monostate/components';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './store/store';
import { setSelectedMenuItem } from './store/app-slice';
import { MainRoute, MainRouter } from './routes/main-router';

export function App() {
  const selectedMenuItem = useSelector((state: RootState) => state.app.selectedMenuItem);
  const dispatch = useDispatch();

  const menuItems: MenuItem[] = [
    { id: 'home', path: MainRoute.home, label: 'Home', onClick: () => handleOnLinkClick(MainRoute.home) },
    { id: 'edit', path: MainRoute.edit, label: 'Add post', onClick: () => handleOnLinkClick(MainRoute.edit) },
  ];

  const handleOnLinkClick = (path: string) => {
    dispatch(setSelectedMenuItem(path));
  }

  return (
    <section id="blog-mono-app">
      <NavBar title='BLOG-MONO'>
        <Menu menuItems={menuItems} selectedMenuItem={selectedMenuItem} />
      </NavBar>
      <MainRouter />
    </section>
  );
}

export default App;
