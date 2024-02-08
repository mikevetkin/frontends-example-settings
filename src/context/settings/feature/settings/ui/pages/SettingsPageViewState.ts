import { SectionViewState } from '../components/Section/SectionViewState';
import { SkeletonListViewState } from '@/core/view-state/SkeletonListViewState';

export class SettingsPageViewState {
  sections: SectionViewState[] | SkeletonListViewState[];

  constructor({ sections }: SettingsPageViewState) {
    this.sections = sections;
  }
}
