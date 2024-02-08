import { LazyToDoSection } from '../components/LazyToDoSection/LazyToDoSection';
import { SectionViewState } from '../components/Section/SectionViewState';
import { useSettings } from '../store/useSettings';
import { Section } from '@/context/settings/feature/settings/ui/components/Section/Section';
import { SkeletonListViewState } from '@/core/view-state/SkeletonListViewState';
import { SectionSkeleton } from '../components/SectionSkeleton/SectionSkeleton';

export const SettingsPage: React.FC = () => {
  const { viewState, dispatch } = useSettings();

  return (
    <div className="w-full space-y-6">
      <h1 className="mb-4 text-left text-4xl font-medium">Settings</h1>
      <LazyToDoSection />
      {viewState.sections.map((section, index) => {
        switch (section.constructor) {
          case SectionViewState:
            return (
              <Section
                viewState={section as SectionViewState}
                onChangeSetting={(section, setting, value) =>
                  dispatch({
                    type: 'ChangeSettingEvent',
                    sectionKey: section,
                    key: setting,
                    value,
                  })
                }
                key={index}
              />
            );
          case SkeletonListViewState:
            return <SectionSkeleton viewState={section} key={index} />;
        }
      })}
      <LazyToDoSection />
    </div>
  );
};
