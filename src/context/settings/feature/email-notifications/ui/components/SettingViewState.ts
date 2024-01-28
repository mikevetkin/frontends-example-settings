import { SwitcherViewState } from '@/core/view-state/SwitcherViewState';
import { EmailSettingsKey } from '../../domian/entity/EmailSettingsKey';

export class SettingViewState {
  key: EmailSettingsKey;
  title: string;
  description: string;
  control: SwitcherViewState;

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
