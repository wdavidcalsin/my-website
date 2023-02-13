import './App.css';
import { ThemeContextProvider } from './context';
import './global.d.ts';
import { Home } from './pages';

function App() {
  return (
    <ThemeContextProvider>
      <Home />
    </ThemeContextProvider>
  );
}

export default App;
