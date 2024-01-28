import { EmailSettingsState } from './EmailSettingsState';
import {
  EmailSettingsEvent,
  ReceiveEmailSettingsEvent,
  ToggleEmailSettingsEvent,
} from './EmailSettingsEvent';

export const emailSettingsReducer = (
  state: EmailSettingsState,
  event: EmailSettingsEvent
) => {
  switch (event.type) {
    case 'SaveEvent':
      return saveEvent(state);
    case 'DiscardEvent':
      return discardEvent(state);
    case 'ReceiveEmailSettingsEvent':
      return receiveEmailSettings(state, event);
    case 'ToggleEmailSettingsEvent':
      return toggleEmailSetting(state, event);
  }
};

function toggleEmailSetting(
  state: EmailSettingsState,
  event: ToggleEmailSettingsEvent
): EmailSettingsState {
  return {
    ...state,
    draftSettings: {
      ...state.draftSettings,
      [event.key]: !state.draftSettings[event.key],
    },
  };
}

function saveEvent(state: EmailSettingsState): EmailSettingsState {
  return {
    ...state,
    originalSettings: state.draftSettings,
  };
}

function discardEvent(state: EmailSettingsState): EmailSettingsState {
  return {
    ...state,
    draftSettings: state.originalSettings,
  };
}

function receiveEmailSettings(
  state: EmailSettingsState,
  event: ReceiveEmailSettingsEvent
): EmailSettingsState {
  return {
    ...state,
    status: 'idle',
    originalSettings: event.data,
    draftSettings: event.data,
  };
}
