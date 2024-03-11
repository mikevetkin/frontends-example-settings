import { SwitcherViewState } from '@/core/view-state/SwitcherViewState';
import { InputViewState } from '@/core/view-state/InputViewState';
import { SettingKey } from '../../../domain/entity/setting/SettingKey';

export class SettingViewState {
  key: SettingKey;
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
