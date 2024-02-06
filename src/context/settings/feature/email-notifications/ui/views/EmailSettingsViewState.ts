import { SaveOrDiscardViewState } from '@/context/settings/shared/save-or-discard/ui/components/SaveOrDiscardViewState';
import { SectionViewState } from '../../../../shared/section/ui/components/SectionViewState';
import { SkeletonListViewState } from '@/core/view-state/SkeletonListViewState';

export class EmailSettingsViewState {
  settings: SectionViewState | SkeletonListViewState;
  saveOrDiscard: SaveOrDiscardViewState | undefined;

  constructor({ settings, saveOrDiscard }: EmailSettingsViewState) {
    this.settings = settings;
    this.saveOrDiscard = saveOrDiscard;
  }
}
