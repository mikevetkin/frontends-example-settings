import {
  EmailSettings,
  emailSettings,
} from './email-notifications/EmailSettings';
import { SettingsSectionKey } from './SettingsSectionKey';

export type Settings = Record<SettingsSectionKey, >

export const settings = (data: Partial<Settings> = {}): Settings => ({
  emailSettings: emailSettings(),
  ...data,
});
