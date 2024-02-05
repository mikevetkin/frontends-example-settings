import { EmailSettingsState } from '@/context/settings/feature/email-notifications/domian/functional-core/EmailSettingsState';
import { SaveOrDiscardViewState } from '../ui/components/SaveOrDiscardViewState';
import { ButtonViewState } from '@/core/view-state/ButtonViewState';
import _ from 'lodash';

export function saveOrDiscardPresenatation(
  state: EmailSettingsState // FIXME: Универсальный
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
