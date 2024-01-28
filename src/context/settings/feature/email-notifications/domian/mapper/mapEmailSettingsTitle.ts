import { EmailSettingsKey } from '../entity/EmailSettingsKey';

export const mapEmailSettingsTitle: Record<EmailSettingsKey, string> = {
  [EmailSettingsKey.YourEmail]: 'Your Email',
  [EmailSettingsKey.MarketingEmails]: 'Marketing emails',
  [EmailSettingsKey.SecurityEmails]: 'Security emails',
  [EmailSettingsKey.NewFeatureEmails]: 'New Feature emails',
};
