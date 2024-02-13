import { EmailSettingsKey } from '../../entity/email-notifications/EmailSettingsKey';

export const mapEmailSettingsTitle: Record<EmailSettingsKey, string> = {
  [EmailSettingsKey.MarketingEmails]: 'Marketing emails',
  [EmailSettingsKey.SecurityEmails]: 'Security emails',
};
