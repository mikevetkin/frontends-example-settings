import { Setting } from "./Setting";

export const Fiscalization: Setting = {
    key: 'fiscalization',
    name: 'Fiscalization',
    description: 'Enable fiscalization for your account.',
} as const;

export const OzonBonus: Setting = {
    key: 'ozonBonus',
    name: 'Ozon Bonus',
    description: 'Enable OzonBonus for your account in personal cabinet',
} as const;

export const FeatureFlagSettingsList: Setting[] = [Fiscalization, OzonBonus];