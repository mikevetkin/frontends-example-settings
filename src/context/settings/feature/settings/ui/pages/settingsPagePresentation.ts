import { SkeletonListViewState } from '@/core/view-state/SkeletonListViewState';
import { SettingsSectionKey } from '../../domain/entity/SettingsSectionKey';
import { SettingsState } from '../../domain/functional-core/SettingsState';
import { SettingsPageViewState } from './SettingsPageViewState';
import { SkeletonViewState } from '@/core/view-state/SkeletonViewState';
import { sectionPresentation } from '../components/Section/SectionPresentation';

export const settingsPagePresentation = (state: SettingsState) => {
  const { draft, status } = state;

  return new SettingsPageViewState({
    sections: (Object.keys(draft) as SettingsSectionKey[]).map((section) => {
      switch (status) {
        case 'loading':
          return new SkeletonListViewState({
            list: Object.values(draft[section]).map(
              () => new SkeletonViewState()
            ),
          });
        case 'idle':
          return sectionPresentation(state, section);
        case 'pending':
          return sectionPresentation(state, section);
      }
    }),
  });
};
