import './App.css';
import Home from './Home';
import { LanguageProvider } from './LanguageContext';
function App() {
  return (
    <LanguageProvider>
      <Home/>
    </LanguageProvider>
  );
}

export default App;
