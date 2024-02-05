import { EmailSettingsKey } from '@/context/settings/feature/email-notifications/domian/entity/EmailSettingsKey';
import { PersonalSettingsKey } from '@/context/settings/feature/personal/domain/entity/PersonalSettingsKey';

export const AllSettingsKey = Object.assign(
  {},
  EmailSettingsKey,
  PersonalSettingsKey
);
export type AllSettingsKey = EmailSettingsKey | PersonalSettingsKey;
