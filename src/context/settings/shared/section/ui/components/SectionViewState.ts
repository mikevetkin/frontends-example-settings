import { SettingViewState } from '../../../setting/ui/components/SettingViewState';

export class SectionViewState {
  heading: string;
  list: SettingViewState[];

  constructor({ list, heading }: SectionViewState) {
    this.heading = heading;
    this.list = list;
  }
}
