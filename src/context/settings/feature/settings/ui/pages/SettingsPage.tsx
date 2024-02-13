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
    <div className="w-full space-y-6">
      <h1 className="mb-4 text-left text-4xl font-medium">Settings</h1>
      <LazyToDoSection />
      {viewState.sections.map((section) => renderSection(section))}
      <LazyToDoSection />
      {viewState.actions && (
        <SaveOrDiscard
          viewState={viewState.actions}
          onClickSave={saveSettings}
          onClickDiscard={discardSettings}
        />
      )}
    </div>
  );
};
