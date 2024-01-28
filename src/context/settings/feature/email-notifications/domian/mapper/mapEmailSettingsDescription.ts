import { EmailSettingsKey } from '../entity/EmailSettingsKey';

export const mapEmailSettingsDescription: Record<EmailSettingsKey, string> = {
  [EmailSettingsKey.MarketingEmails]:
    'Receive emails about new products, features, and more.',
  [EmailSettingsKey.SecurityEmails]:
    'Receive emails about your account security.',
  [EmailSettingsKey.NewFeatureEmails]:
    'Receive emails aboute new our features.',
};
