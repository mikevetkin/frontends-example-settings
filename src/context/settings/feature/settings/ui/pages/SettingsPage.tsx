import { LazyToDoSection } from '../components/LazyToDoSection/LazyToDoSection';
import { SectionViewState } from '../components/Section/SectionViewState';
import { useSettings } from '../store/useSettings';
import { Section } from '@/context/settings/feature/settings/ui/components/Section/Section';
import { SkeletonListViewState } from '@/core/view-state/SkeletonListViewState';
import { SectionSkeleton } from '../components/SectionSkeleton/SectionSkeleton';
import { SaveOrDiscard } from '../components/SaveOrDiscard/SaveOrDiscard';

export const SettingsPage: React.FC = () => {
  const { viewState, changeSetting, saveSettings, discardSettings } =
    useSettings();

  const renderSection = (section: SectionViewState | SkeletonListViewState) => {
    switch (section.constructor) {
      case SectionViewState:
        return (
          <Section
            viewState={section as SectionViewState}
            onChangeSetting={changeSetting}
            key={section.key}
          />
        );
      case SkeletonListViewState:
        return <SectionSkeleton viewState={section} key={section.key} />;
    }
  };

  return (
    <div className="relative h-[100vh] w-full space-y-6 p-4 sm:p-8">
      <h1 className="mb-4 text-left text-4xl font-medium">Settings</h1>
      {viewState.sections.map((section) => renderSection(section))}
      <LazyToDoSection />
      {viewState.actions && (
        <div className="sticky bottom-8 left-8 right-8 rounded-lg border bg-background px-3 py-3 text-sm">
          <SaveOrDiscard
            viewState={viewState.actions}
            onClickSave={saveSettings}
            onClickDiscard={discardSettings}
          />
        </div>
      )}
    </div>
  );
};
