import { SettingsKey } from '../../../domain/entity/SettingsKey';
import { SettingsSectionKey } from '../../../domain/entity/SettingsSectionKey';
import { SettingsState } from '../../../domain/functional-core/SettingsState';
import { mapSettingsSectionHeading } from '../../../domain/mapper/mapSettingsSectionHeading';
import { saveOrDiscardPresenatation } from '../SaveOrDiscard/saveOrDiscardPresentation';
import { settingPresentation } from '../Setting/SettingPresentation';
import { SectionViewState } from './SectionViewState';
import _ from 'lodash';

export const sectionPresentation = (
  state: SettingsState,
  section: SettingsSectionKey
): SectionViewState => {
  return new SectionViewState({
    heading: mapSettingsSectionHeading[section],
    list: (Object.keys(state.draft[section]) as SettingsKey[]).map((setting) =>
      settingPresentation(state, section, setting)
    ),
    actions: !_.isEqual(state.draft[section], state.original[section])
      ? saveOrDiscardPresenatation(state)
      : undefined,
  });
};
