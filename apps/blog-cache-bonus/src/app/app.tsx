import { Menu, MenuItem, NavBar } from '@monostate/components';
import { MainRoute, MainRouter } from './routes/main-router';
import { selectedMenuItemAtom } from './stores/app-atoms';
import { useAtom } from 'jotai/react';

export function App() {
  const [selectedMenuItem, setSelectedMenuItem] = useAtom(selectedMenuItemAtom);

  const menuItems: MenuItem[] = [
    { id: 'home', path: MainRoute.home, label: 'Home', onClick: () => setSelectedMenuItem(MainRoute.home) },
    { id: 'edit', path: MainRoute.edit, label: 'Add post', onClick: () => setSelectedMenuItem(MainRoute.edit) },
  ];

  return (
    <section id="blog-cache-bonus-app">
      <NavBar title='BLOG-CACHE-BONUS'>
        <Menu menuItems={menuItems} selectedMenuItem={selectedMenuItem} />
      </NavBar>
      <MainRouter />
    </section>
  );
}

export default App;
