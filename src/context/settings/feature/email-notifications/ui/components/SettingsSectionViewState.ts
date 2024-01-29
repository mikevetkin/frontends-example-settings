import { SettingViewState } from './SettingViewState';

export class SettingsSectionViewState {
  list: SettingViewState[];

  constructor({ list }: SettingsSectionViewState) {
    this.list = list;
  }
}
