import { SkeletonViewState } from '@/core/view-state/SkeletonViewState';
import { EmailSettingsState } from '../domian/functional-core/EmailSettingsState';
import { EmailSettingsViewState } from '../ui/views/EmailSettingsViewState';
import { SettingViewState } from '../ui/components/SettingViewState';
import { EmailSettingsKey } from '../domian/entity/EmailSettingsKey';
import { SwitcherViewState } from '@/core/view-state/SwitcherViewState';
import { SaveOrDiscardViewState } from '../ui/components/SaveOrDiscardViewState';
import { ButtonViewState } from '@/core/view-state/ButtonViewState';
import _ from 'lodash';
import { mapEmailSettingsTitle } from '../domian/mapper/mapEmailSettingsTitle';
import { mapEmailSettingsDescription } from '../domian/mapper/mapEmailSettingsDescription';

export const emailSettingsPresentation = (
  state: EmailSettingsState
): EmailSettingsViewState => {
  const { status, draftSettings, originalSettings } = state;

  switch (status) {
    case 'loading':
      return {
        settings: [new SkeletonViewState(), new SkeletonViewState()],
        saveOrDiscard: undefined,
      };
    case 'idle':
    case 'pending':
      return {
        settings: (Object.keys(originalSettings) as EmailSettingsKey[]).map(
          (key) =>
            new SettingViewState({
              key: key,
              title: mapEmailSettingsTitle[key],
              description: mapEmailSettingsDescription[key],
              control: new SwitcherViewState({
                checked: draftSettings[key],
                disabled: status === 'pending',
              }),
            })
        ),
        saveOrDiscard: _.isEqual(draftSettings, originalSettings)
          ? undefined
          : new SaveOrDiscardViewState({
              save: new ButtonViewState({
                icon: status === 'pending' ? 'pending' : undefined,
                label: status === 'pending' ? 'Pending' : 'Save',
                disabled: status === 'pending',
              }),
              discard: new ButtonViewState({
                label: 'Discard',
                disabled: status === 'pending',
              }),
            }),
      };
  }
};
