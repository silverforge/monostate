import { Menu, MenuItem, NavBar } from '@monostate/components';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './store/store';
import { setSelectedMenuItem } from './store/app-slice';

export function App() {
  const selectedMenuItem = useSelector((state: RootState) => state.app.selectedMenuItem);
  const dispatch = useDispatch();

  const menuItems: MenuItem[] = [
    { id: 'home', path: '/', label: 'Home', onClick: () => handleOnLinkClick('/') },
    { id: 'edit', path: '/edit', label: 'Add post', onClick: () => handleOnLinkClick('/edit') },
  ];

  const handleOnLinkClick = (path: string) => {
    dispatch(setSelectedMenuItem(path));
  }

  return (
    <section id="blog-mono-app">
      <NavBar title='BLOG-MONO'>
        <Menu menuItems={menuItems} selectedMenuItem={selectedMenuItem} />
      </NavBar>
    </section>
  );
}

export default App;
