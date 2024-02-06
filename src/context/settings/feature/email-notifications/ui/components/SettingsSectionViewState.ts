import { SettingViewState } from '../../../../shared/setting/ui/components/SettingViewState';

// FIXME: Общая вынести, положить рядом с компонентом
export class SettingsSectionViewState {
  heading: string;
  list: SettingViewState[];

  constructor({ list, heading }: SettingsSectionViewState) {
    this.heading = heading;
    this.list = list;
  }
}
