import { SettingsState } from '@/context/settings/feature/settings/domain/functional-core/SettingsState';
import { SaveOrDiscardViewState } from '../ui/components/SaveOrDiscardViewState';
import { ButtonViewState } from '@/core/view-state/ButtonViewState';
import _ from 'lodash';

export function saveOrDiscardPresenatation(
  state: SettingsState
): SaveOrDiscardViewState | undefined {
  return _.isEqual(state.draft, state.original)
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
