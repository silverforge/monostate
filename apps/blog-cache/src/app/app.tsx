import { Menu, MenuItem, NavBar } from '@monostate/components';
import { MainRoute, MainRouter } from './routes/main-router';
import { useAppStore } from './stores/useAppStore';

export function App() {
  const [selectedMenuItem, setSelectedMenuItem] = useAppStore(state => [state.selectedMenuItem, state.setSelectedMenuItem]);

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
