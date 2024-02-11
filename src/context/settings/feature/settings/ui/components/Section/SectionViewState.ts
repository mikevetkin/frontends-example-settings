import { SettingsSectionKey } from '../../../domain/entity/SettingsSectionKey';
import { SaveOrDiscardViewState } from '../SaveOrDiscard/SaveOrDiscardViewState';
import { SettingViewState } from '../Setting/SettingViewState';

export class SectionViewState {
  key: SettingsSectionKey;
  heading: string;
  list: SettingViewState[];
  actions: SaveOrDiscardViewState | undefined;

  constructor({ key, list, heading, actions }: SectionViewState) {
    this.key = key;
    this.heading = heading;
    this.list = list;
    this.actions = actions;
  }
}
