import { Setting } from "./Setting";

export const Fiscalization: Setting = {
    key: 'fiscalization',
    name: 'Fiscalization',
    description: 'Enable fiscalization for your account.',
} as const;

export const FeatureFlagSettingsList = [Fiscalization];