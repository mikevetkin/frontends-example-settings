import { EmailSettingsKey } from '../entity/EmailSettingsKey';

export const mapEmailSettingsDescription: Record<EmailSettingsKey, string> = {
  [EmailSettingsKey.YourEmail]:
    'Specify your email address to which the emails will be sent',
  [EmailSettingsKey.MarketingEmails]:
    'Receive emails about new products, features, and more.',
  [EmailSettingsKey.SecurityEmails]:
    'Receive emails about your account security.',
  [EmailSettingsKey.NewFeatureEmails]:
    'Receive emails aboute new our features.',
};
