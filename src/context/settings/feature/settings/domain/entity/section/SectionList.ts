import { EmailSettingsList } from "../setting/EmailSettings";
import { FeatureFlagSettingsList } from "../setting/FeatureFlags";
import { Section } from "./Section";

const EmailSettingsSection: Section = {
    heading: 'Email notifications',
    key: 'emailSettings',
    settings: EmailSettingsList,
} as const;

const FeatureFlagSettingsSction: Section = {
    heading: 'Feeature flags',
    key: 'featureFlags',
    settings: FeatureFlagSettingsList,
} as const;

export const SectionList = [EmailSettingsSection, FeatureFlagSettingsSction];