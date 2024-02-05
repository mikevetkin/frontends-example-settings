import { PersonalSettingsKey } from '../entity/PersonalSettingsKey';

export const mapPersonalSettingsDescription: Record<
  PersonalSettingsKey,
  string
> = {
  [PersonalSettingsKey.FirstName]: 'Input your first name',
  [PersonalSettingsKey.LastName]: 'Input your last name',
};
