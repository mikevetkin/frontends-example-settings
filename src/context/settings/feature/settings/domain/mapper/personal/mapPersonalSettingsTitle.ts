import { PersonalSettingsKey } from '../../entity/personal/PersonalSettingsKey';

export const mapPersonalSettingsTitle: Record<PersonalSettingsKey, string> = {
  [PersonalSettingsKey.FirstName]: 'First Name',
  [PersonalSettingsKey.LastName]: 'Last Name',
  [PersonalSettingsKey.ShowPersonalInfo]: 'Show Personal Information',
};
