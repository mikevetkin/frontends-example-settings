import { SettingViewState } from '../../../../shared/setting/ui/components/SettingViewState';

export class SettingsSectionViewState {
  heading: string;
  list: SettingViewState[];

  constructor({ list, heading }: SettingsSectionViewState) {
    this.heading = heading;
    this.list = list;
  }
}
