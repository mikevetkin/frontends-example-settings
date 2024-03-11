import { SettingKey } from "./SettingKey";

export interface Setting {
    key: SettingKey;
    name: string;
    description: string;
}

export const setting = (data: Partial<Setting> = {}): Setting => ({
  ...data,
  key: 'marketingEmails',
  name: '',
  description: '',
});
