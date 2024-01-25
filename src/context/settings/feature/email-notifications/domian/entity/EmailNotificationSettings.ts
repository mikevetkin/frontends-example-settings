import { EmailSettingsKey } from './EmailSettingsKey';

export type EmailNotificationSettings = Record<EmailSettingsKey, boolean>;

export const emailNotificationSettings = (
  data: Partial<EmailNotificationSettings> = {}
): EmailNotificationSettings => ({
  marketingEmails: false,
  securityEmails: false,
  ...data,
});
