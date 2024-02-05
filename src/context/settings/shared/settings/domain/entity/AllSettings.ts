import { emailSettings } from '../../../../feature/email-notifications/domian/entity/EmailSettings';
import { personalSettings } from '../../../../feature/personal/domain/entity/PersonalSettings';
import { AllSettingsKey } from './AllSettingsKey';
import { AllSettingsValue } from './AllSettingsValue';

export type AllSettings = Record<AllSettingsKey, AllSettingsValue>;

export const allSettings = (data: Partial<AllSettings> = {}): AllSettings => ({
  ...emailSettings(),
  ...personalSettings(),
  ...data,
});
