import { EmailSettingsKey } from '../entity/EmailSettingsKey';

export const mapEmailSettingsTitle: Record<EmailSettingsKey, string> = {
  [EmailSettingsKey.MarketingEmails]: 'Marketing emails',
  [EmailSettingsKey.SecurityEmails]: 'Security emails',
};
