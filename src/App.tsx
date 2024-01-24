import './App.css';
import { ThemeProvider } from './components/ui/theme-provider';
import { SettingsPage } from './context/settings/feature/email-notifications/ui/pages/SettingsPage';
function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <SettingsPage />
    </ThemeProvider>
  );
}

export default App;
