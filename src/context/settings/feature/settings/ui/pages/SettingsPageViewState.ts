import { SectionViewState } from '../../../../shared/section/ui/components/SectionViewState';

export class SettingsPageViewState {
  sections: SectionViewState[];

  constructor({ sections }: SettingsPageViewState) {
    this.sections = sections;
  }
}
