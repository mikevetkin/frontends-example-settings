import { SettingsState } from '@/context/settings/feature/settings/domain/functional-core/SettingsState';
import { SaveOrDiscardViewState } from './SaveOrDiscardViewState';
import { ButtonViewState } from '@/core/view-state/ButtonViewState';

export function saveOrDiscardPresenatation(
  state: SettingsState
): SaveOrDiscardViewState {
  return new SaveOrDiscardViewState({
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
