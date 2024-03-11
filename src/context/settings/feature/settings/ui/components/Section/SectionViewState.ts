
import { SectionKey } from '../../../domain/entity/section/SectionKey';
import { SettingViewState } from '../Setting/SettingViewState';

export class SectionViewState {
  key: SectionKey;
  heading: string;
  list: SettingViewState[];

  constructor({ key, list, heading }: SectionViewState) {
    this.key = key;
    this.heading = heading;
    this.list = list;
  }
}
