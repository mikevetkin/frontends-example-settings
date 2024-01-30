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
import { SettingsSectionViewState } from '../ui/components/SettingsSectionViewState';
import { SkeletonListViewState } from '@/core/view-state/SkeletonListViewState';
import { InputViewState } from '@/core/view-state/InputViewState';

export const emailSettingsPresentation = (
  state: EmailSettingsState
): EmailSettingsViewState => {
  return {
    settings: getSetting(state),
    saveOrDiscard: getSaveOrDiscard(state),
  };
};

function getSetting(
  state: EmailSettingsState
): SettingsSectionViewState | SkeletonListViewState {
  const { status, originalSettings } = state;

  switch (status) {
    case 'loading':
      return new SkeletonListViewState({
        list: [new SkeletonViewState(), new SkeletonViewState()],
      });
    case 'idle':
    case 'pending':
      return new SettingsSectionViewState({
        list: (Object.keys(originalSettings) as EmailSettingsKey[]).map(
          (key) =>
            new SettingViewState({
              key: key,
              title: mapEmailSettingsTitle[key],
              description: mapEmailSettingsDescription[key],
              control: mapControl(state, key),
            })
        ),
      });
  }
}

function mapControl(
  state: EmailSettingsState,
  key: EmailSettingsKey
): SwitcherViewState | InputViewState {
  const { status, draftSettings } = state;
  const value = draftSettings[key];

  switch (typeof value) {
    case 'boolean':
      return new SwitcherViewState({
        checked: draftSettings[key] as boolean,
        disabled: status === 'pending',
      });
    case 'string':
      return new InputViewState({
        value: draftSettings[key] as string,
        disabled: status === 'pending',
      });
  }
}

function getSaveOrDiscard(
  state: EmailSettingsState
): SaveOrDiscardViewState | undefined {
  return _.isEqual(state.draftSettings, state.originalSettings)
    ? undefined
    : new SaveOrDiscardViewState({
        save: new ButtonViewState({
          icon: state.status === 'pending' ? 'pending' : undefined,
          label: state.status === 'pending' ? 'Pending' : 'Save',
          disabled: state.status === 'pending',
        }),
        discard: new ButtonViewState({
          label: 'Discard',
          disabled: state.status === 'pending',
        }),
      });
}
