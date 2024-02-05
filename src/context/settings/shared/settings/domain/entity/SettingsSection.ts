import { emailSettings } from '../../../../feature/email-notifications/domian/entity/EmailSettings';
import { AllSettings } from './AllSettings';

export interface SettingsSection {
  title: string;
  settings: AllSettings;
}

export const SettingsSection = (
  data: Partial<SettingsSection> = {}
): SettingsSection => ({
  title: '',
  settings: emailSettings(),
  ...data,
});
