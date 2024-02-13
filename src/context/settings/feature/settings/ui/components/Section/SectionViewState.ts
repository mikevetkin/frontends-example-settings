import { SettingsSectionKey } from '../../../domain/entity/SettingsSectionKey';
import { SettingViewState } from '../Setting/SettingViewState';

export class SectionViewState {
  key: SettingsSectionKey;
  heading: string;
  list: SettingViewState[];

  constructor({ key, list, heading }: SectionViewState) {
    this.key = key;
    this.heading = heading;
    this.list = list;
  }
}
