import { LazyToDoSection } from '../components/LazyToDoSection';
import { EmailNotificationSettings } from '../views/EmailNotificationSettings';

export const SettingsPage: React.FC = () => {
  return (
    <div className="w-full space-y-6">
      <h1 className="mb-4 text-left text-4xl font-medium">Settings</h1>
      <LazyToDoSection />
      <section>
        <h3 className="mb-4 text-left text-lg font-medium">
          Email Notifications
        </h3>
        <EmailNotificationSettings />
      </section>
      <LazyToDoSection />
    </div>
  );
};
