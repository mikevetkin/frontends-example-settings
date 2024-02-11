import { SaveOrDiscardViewState } from '../SaveOrDiscard/SaveOrDiscardViewState';
import { SettingViewState } from '../Setting/SettingViewState';

export class SectionViewState {
  heading: string;
  list: SettingViewState[];
  actions: SaveOrDiscardViewState | undefined;

  constructor({ list, heading, actions }: SectionViewState) {
    this.heading = heading;
    this.list = list;
    this.actions = actions;
  }
}
