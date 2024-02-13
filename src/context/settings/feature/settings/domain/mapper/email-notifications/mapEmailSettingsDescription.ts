import { EmailSettingsKey } from '../../entity/email-notifications/EmailSettingsKey';

export const mapEmailSettingsDescription: Record<EmailSettingsKey, string> = {
  [EmailSettingsKey.MarketingEmails]:
    'Receive emails about new products, features, and more.',
  [EmailSettingsKey.SecurityEmails]:
    'Receive emails about your account security.',
};
