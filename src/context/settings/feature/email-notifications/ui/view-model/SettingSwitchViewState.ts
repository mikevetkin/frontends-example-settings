import { SwitcherViewState } from '@/core/view-state/SwitcherViewState';
import { EmailSettingsKey } from '../../domian/entity/EmailSettingsKey';

export class SettingSwitchViewState {
  key: EmailSettingsKey;
  title: string;
  description: string;
  switcher: SwitcherViewState;

  constructor({ key, title, description, switcher }: SettingSwitchViewState) {
    this.key = key;
    this.title = title;
    this.description = description;
    this.switcher = switcher;
  }
}
