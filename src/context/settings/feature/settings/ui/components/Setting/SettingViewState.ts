import { SwitcherViewState } from '@/core/view-state/SwitcherViewState';
import { EmailSettingsKey } from '../../../domain/entity/email-notifications/EmailSettingsKey';
import { InputViewState } from '@/core/view-state/InputViewState';
import { PersonalSettingsKey } from '@/context/settings/feature/settings/domain/entity/personal/PersonalSettingsKey';

export class SettingViewState {
  key: EmailSettingsKey | PersonalSettingsKey;
  title: string;
  description: string;
  control: SwitcherViewState | InputViewState;

  constructor({ key, title, description, control }: SettingViewState) {
    this.key = key;
    this.title = title;
    this.description = description;
    this.control = control;
  }
}
