import { Setting } from '@/context/settings/shared/setting/ui/components/Setting';
import { LazyToDoSection } from '../../../email-notifications/ui/components/LazyToDoSection';
import { useSettings } from '../store/useSettings';

export const SettingsPage: React.FC = () => {
  const { viewState, dispatch } = useSettings();

  const settings = () => {
    return viewState.sections.map((section) => (
      <section>
        <h3 className="mb-4 text-left text-lg font-medium">
          {section.heading}
        </h3>
        {section.list.map((setting) => (
          <Setting
            viewState={setting}
            onChange={(value) =>
              dispatch({
                type: 'ChangeSettingEvent',
                key: setting.key,
                sectionKey: setting.sectionKey,
                value,
              })
            }
          />
        ))}
      </section>
    ));
  };

  return (
    <div className="w-full space-y-6">
      <h1 className="mb-4 text-left text-4xl font-medium">Settings</h1>
      <LazyToDoSection />
      {settings()}
      <LazyToDoSection />
    </div>
  );
};
