import { SaveOrDiscardViewState } from '@/context/settings/shared/save-or-discard/ui/components/SaveOrDiscardViewState';
import { SettingsSectionViewState } from '../../../../shared/section/ui/components/SettingsSectionViewState';
import { SkeletonListViewState } from '@/core/view-state/SkeletonListViewState';

export class EmailSettingsViewState {
  settings: SettingsSectionViewState | SkeletonListViewState;
  saveOrDiscard: SaveOrDiscardViewState | undefined;

  constructor({ settings, saveOrDiscard }: EmailSettingsViewState) {
    this.settings = settings;
    this.saveOrDiscard = saveOrDiscard;
  }
}
