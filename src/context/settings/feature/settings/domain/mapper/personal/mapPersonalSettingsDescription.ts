import { PersonalSettingsKey } from '../../entity/personal/PersonalSettingsKey';

export const mapPersonalSettingsDescription: Record<
  PersonalSettingsKey,
  string
> = {
  [PersonalSettingsKey.FirstName]: 'Input your first name',
  [PersonalSettingsKey.LastName]: 'Input your last name',
  [PersonalSettingsKey.ShowPersonalInfo]: 'Show publicly available information',
};
