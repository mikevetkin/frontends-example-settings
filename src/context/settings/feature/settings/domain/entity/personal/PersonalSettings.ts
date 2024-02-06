import { PersonalSettingsKey } from './PersonalSettingsKey';

export interface PersonalSettings {
  [PersonalSettingsKey.FirstName]: string;
  [PersonalSettingsKey.LastName]: string;
}

export const personalSettings = (
  data: Partial<PersonalSettings> = {}
): PersonalSettings => ({
  firstName: '',
  lastName: '',
  ...data,
});
