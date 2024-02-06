import { LazyToDoSection } from '../components/LazyToDoSection/LazyToDoSection';
import { useSettings } from '../store/useSettings';
import { Section } from '@/context/settings/feature/settings/ui/components/Section/Section';

export const SettingsPage: React.FC = () => {
  const { viewState, dispatch } = useSettings();

  return (
    <div className="w-full space-y-6">
      <h1 className="mb-4 text-left text-4xl font-medium">Settings</h1>
      <LazyToDoSection />
      {viewState.sections.map((section) => (
        <Section
          viewState={section}
          onChangeSetting={(section, setting, value) =>
            dispatch({
              type: 'ChangeSettingEvent',
              sectionKey: section,
              key: setting,
              value,
            })
          }
        />
      ))}
      <LazyToDoSection />
    </div>
  );
};
