import { SwitcherViewState } from '@/core/view-state/SwitcherViewState';
import { EmailSettingsKey } from '../../../../feature/email-notifications/domian/entity/EmailSettingsKey';
import { InputViewState } from '@/core/view-state/InputViewState';

export class SettingViewState {
  key: EmailSettingsKey;
  title: string;
  description: string;
  control: SwitcherViewState | InputViewState;

  constructor({
    key,
    title,
    description,
    control: switcher,
  }: SettingViewState) {
    this.key = key;
    this.title = title;
    this.description = description;
    this.control = switcher;
  }
}
