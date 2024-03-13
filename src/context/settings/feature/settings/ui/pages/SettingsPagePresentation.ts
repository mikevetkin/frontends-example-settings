import { SkeletonListViewState } from '@/core/view-state/SkeletonListViewState';
import { SettingsState } from '../../domain/functional-core/SettingsState';
import { SettingsPageViewState } from './SettingsPageViewState';
import { SkeletonViewState } from '@/core/view-state/SkeletonViewState';
import _ from 'lodash';
import { sectionPresentation } from '../components/Section/SectionPresentation';
import { saveOrDiscardPresenatation } from '../components/SaveOrDiscard/SaveOrDiscardPresentation';
import { SectionList } from '../../domain/entity/section/SectionList';

export const settingsPagePresentation = (state: SettingsState) => {
  const { original, draft, status } = state;

  return new SettingsPageViewState({
    sections: (SectionList).map((section) => {
      switch (status) {
        case 'loading':
          return new SkeletonListViewState({
            key: section.key,
            list: section.settings.map(
              () => new SkeletonViewState()
            ),
          });
        case 'idle':
          return sectionPresentation(state, section);
        case 'pending':
          return sectionPresentation(state, section);
      }
    }),
    actions: !_.isEqual(draft, original)
      ? saveOrDiscardPresenatation(state)
      : undefined,
  });
};
