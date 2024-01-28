import { SettingViewState } from '../components/SettingViewState';
import { SaveOrDiscardViewState } from '@/context/settings/feature/email-notifications/ui/components/SaveOrDiscardViewState';
import { SkeletonViewState } from '@/core/view-state/SkeletonViewState';

export class EmailSettingsViewState {
  settings: SettingViewState[] | SkeletonViewState[];
  saveOrDiscard: SaveOrDiscardViewState | undefined;

  constructor({ settings, saveOrDiscard }: EmailSettingsViewState) {
    this.settings = settings;
    this.saveOrDiscard = saveOrDiscard;
  }
}
