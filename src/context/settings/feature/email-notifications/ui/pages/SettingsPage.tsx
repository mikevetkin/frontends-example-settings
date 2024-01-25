import { LazyToDoSection } from '../components/LazyToDoSection';
import { EmailNotificationSettings } from '../views/email-notification-settings/view';

export const SettingsPage: React.FC = () => {
  return (
    <div className="w-full space-y-6">
      <h1 className="mb-4 text-left text-4xl font-medium">Settings</h1>
      <LazyToDoSection />
      <EmailNotificationSettings />
      <LazyToDoSection />
    </div>
  );
};
