import { Skeleton } from '@/components/ui/skeleton';
import { LazyToDoSection } from '../components/LazyToDoSection/LazyToDoSection';
import { SectionViewState } from '../components/Section/SectionViewState';
import { useSettings } from '../store/useSettings';
import { Section } from '@/context/settings/feature/settings/ui/components/Section/Section';
import { SkeletonListViewState } from '@/core/view-state/SkeletonListViewState';

interface SkeletonSectionProps {
  viewState: SkeletonListViewState;
}

const SectionSkeleton: React.FC<SkeletonSectionProps> = ({ viewState }) => (
  <div className="flex flex-col gap-4">
    <Skeleton className="h-[20px] w-[100px] rounded-full" />
    {viewState.list.map(() => (
      <Skeleton className="h-[76px] w-[100%]" />
    ))}
  </div>
);

export const SettingsPage: React.FC = () => {
  const { viewState, dispatch } = useSettings();

  return (
    <div className="w-full space-y-6">
      <h1 className="mb-4 text-left text-4xl font-medium">Settings</h1>
      <LazyToDoSection />
      {viewState.sections.map((section) => {
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
              />
            );
          case SkeletonListViewState:
            return <SectionSkeleton viewState={section} />;
        }
      })}
      <LazyToDoSection />
    </div>
  );
};
