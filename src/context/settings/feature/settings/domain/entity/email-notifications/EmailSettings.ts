import { EmailSettingsKey } from './EmailSettingsKey';

export type EmailSettings = Record<EmailSettingsKey, boolean>;

export const emailSettings = (
  data: Partial<EmailSettings> = {}
): EmailSettings => ({
  marketingEmails: false,
  securityEmails: false,
  ...data,
});
