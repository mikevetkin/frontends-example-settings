import { LazyToDoSection } from '../components/LazyToDoSection';
import { useSettings } from '../store/useSettings';
import { Section } from '@/context/settings/shared/section/ui/components/Section';

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
