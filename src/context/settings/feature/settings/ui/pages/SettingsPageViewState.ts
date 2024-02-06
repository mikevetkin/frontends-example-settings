import { SettingsSectionViewState } from '../../../../shared/section/ui/components/SettingsSectionViewState';

export class SettingsPageViewState {
  sections: SettingsSectionViewState[];

  constructor({ sections }: SettingsPageViewState) {
    this.sections = sections;
  }
}
