import { SettingsSectionViewState } from '../../../email-notifications/ui/components/SettingsSectionViewState';

export class SettingsPageViewState {
  sections: SettingsSectionViewState[];

  constructor({ sections }: SettingsPageViewState) {
    this.sections = sections;
  }
}
