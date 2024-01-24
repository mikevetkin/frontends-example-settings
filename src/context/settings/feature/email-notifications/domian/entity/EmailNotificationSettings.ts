export interface EmailNotificationSettings {
  isEnabledMarketingEmails: boolean;
  isEnabledSecurityEmails: boolean;
}

export const emailNotificationSettings = (
  data: Partial<EmailNotificationSettings> = {}
): EmailNotificationSettings => ({
  isEnabledMarketingEmails: false,
  isEnabledSecurityEmails: false,
  ...data,
});
