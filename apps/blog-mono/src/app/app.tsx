import { Menu, MenuItem, NavBar } from '@monostate/components';
import { setSelectedMenuItem } from './store/app-slice';
import { MainRoute, MainRouter } from './routes/main-router';
import { useAppDispatch, useAppSelector } from './store/hooks';

export function App() {
  const selectedMenuItem = useAppSelector(state => state.app.selectedMenuItem);
  const dispatch = useAppDispatch();

  const menuItems: MenuItem[] = [
    { id: 'home', path: MainRoute.home, label: 'Home', onClick: () => handleOnLinkClick(MainRoute.home) },
    { id: 'edit', path: MainRoute.edit, label: 'Add post', onClick: () => handleOnLinkClick(MainRoute.edit) },
  ];

  const handleOnLinkClick = (path: MainRoute) => {
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
