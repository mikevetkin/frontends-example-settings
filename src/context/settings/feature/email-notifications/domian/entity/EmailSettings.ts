import { EmailSettingsKey } from './EmailSettingsKey';

export interface EmailSettings {
  [EmailSettingsKey.YourEmail]: string;
  [EmailSettingsKey.MarketingEmails]: boolean;
  [EmailSettingsKey.SecurityEmails]: boolean;
  [EmailSettingsKey.NewFeatureEmails]: boolean;
}

export const emailSettings = (
  data: Partial<EmailSettings> = {}
): EmailSettings => ({
  yourEmail: '',
  marketingEmails: false,
  securityEmails: false,
  newFeatureEmails: false,
  ...data,
});
