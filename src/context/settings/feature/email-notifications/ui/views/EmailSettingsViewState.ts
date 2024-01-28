import { SettingSwitchViewState } from '../components/SettingSwitchViewState';
import { SaveOrDiscardViewState } from '@/context/settings/feature/email-notifications/ui/components/SaveOrDiscardViewState';
import { SkeletonViewState } from '@/core/view-state/SkeletonViewState';

export class EmailNotificationSettingsViewState {
  settings: SettingSwitchViewState[] | SkeletonViewState[];
  saveOrDiscard: SaveOrDiscardViewState | undefined;

  constructor({ settings, saveOrDiscard }: EmailNotificationSettingsViewState) {
    this.settings = settings;
    this.saveOrDiscard = saveOrDiscard;
  }
}
