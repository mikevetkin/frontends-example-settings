import { SaveOrDiscardViewState } from '../components/SaveOrDiscard/SaveOrDiscardViewState';
import { SectionViewState } from '../components/Section/SectionViewState';
import { SkeletonListViewState } from '@/core/view-state/SkeletonListViewState';

export class SettingsPageViewState {
  sections: SectionViewState[] | SkeletonListViewState[];
  actions: SaveOrDiscardViewState | undefined;

  constructor({ sections, actions }: SettingsPageViewState) {
    this.sections = sections;
    this.actions = actions;
  }
}
