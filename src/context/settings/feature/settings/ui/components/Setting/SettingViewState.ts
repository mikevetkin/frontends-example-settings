import { SwitcherViewState } from '@/core/view-state/SwitcherViewState';
import { EmailSettingsKey } from '../../../domain/entity/email-notifications/EmailSettingsKey';
import { InputViewState } from '@/core/view-state/InputViewState';
import { SettingsSectionKey } from '@/context/settings/feature/settings/domain/entity/SettingsSectionKey';
import { PersonalSettingsKey } from '@/context/settings/feature/settings/domain/entity/personal/PersonalSettingsKey';

export class SettingViewState {
  sectionKey: SettingsSectionKey;
  key: EmailSettingsKey | PersonalSettingsKey;
  title: string;
  description: string;
  control: SwitcherViewState | InputViewState;

  constructor({
    sectionKey,
    key,
    title,
    description,
    control,
  }: SettingViewState) {
    this.sectionKey = sectionKey;
    this.key = key;
    this.title = title;
    this.description = description;
    this.control = control;
  }
}
