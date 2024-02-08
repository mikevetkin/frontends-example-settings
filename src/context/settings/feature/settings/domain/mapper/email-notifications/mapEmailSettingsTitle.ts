import { EmailSettingsKey } from '../../entity/email-notifications/EmailSettingsKey';

export const mapEmailSettingsTitle: Record<EmailSettingsKey, string> = {
  [EmailSettingsKey.YourEmail]: 'Your Email',
  [EmailSettingsKey.MarketingEmails]: 'Marketing emails',
  [EmailSettingsKey.SecurityEmails]: 'Security emails',
  [EmailSettingsKey.NewFeatureEmails]: 'New Feature emails',
};
