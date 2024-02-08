import { PersonalSettingsKey } from './PersonalSettingsKey';

export interface PersonalSettings {
  [PersonalSettingsKey.FirstName]: string;
  [PersonalSettingsKey.LastName]: string;
  [PersonalSettingsKey.ShowPersonalInfo]: boolean;
}

export const personalSettings = (
  data: Partial<PersonalSettings> = {}
): PersonalSettings => ({
  firstName: '',
  lastName: '',
  showPersonalInfo: false,
  ...data,
});
