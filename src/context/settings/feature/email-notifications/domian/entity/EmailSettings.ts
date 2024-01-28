import { EmailSettingsKey } from './EmailSettingsKey';
// Ребята из сириуса сделали в этом месте неплохо. Нужно взять их типы
// Скорее всего там что-то типа { key: string, type: boolean }
// На основе которого делается контролы либо булевые, либо строковые
export interface EmailSettings {
  [EmailSettingsKey.YourEmail]: boolean;
  [EmailSettingsKey.MarketingEmails]: boolean;
  [EmailSettingsKey.SecurityEmails]: boolean;
  [EmailSettingsKey.NewFeatureEmails]: boolean;
}

export const emailSettings = (
  data: Partial<EmailSettings> = {}
): EmailSettings => ({
  yourEmail: false,
  marketingEmails: false,
  securityEmails: false,
  newFeatureEmails: false,
  ...data,
});
