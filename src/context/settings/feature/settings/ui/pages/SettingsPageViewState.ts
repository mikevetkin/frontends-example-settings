import { SectionViewState } from '../components/Section/SectionViewState';

export class SettingsPageViewState {
  sections: SectionViewState[];

  constructor({ sections }: SettingsPageViewState) {
    this.sections = sections;
  }
}
