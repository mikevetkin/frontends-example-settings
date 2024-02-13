import { EmailSettingsKey } from './EmailSettingsKey';

export interface EmailSettings {
  [EmailSettingsKey.MarketingEmails]: boolean;
  [EmailSettingsKey.SecurityEmails]: boolean;
}

export const emailSettings = (
  data: Partial<EmailSettings> = {}
): EmailSettings => ({
  marketingEmails: false,
  securityEmails: false,
  ...data,
});
