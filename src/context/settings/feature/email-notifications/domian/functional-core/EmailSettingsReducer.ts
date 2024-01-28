import { EmailNotificationSettingsState } from './EmailSettingsState';
import {
  EmailSettingsEvent,
  ReceiveEmailSettingsEvent,
  ToggleEmailSettingsEvent,
} from './EmailSettingsEvent';

export const emailSettingsReducer = (
  state: EmailNotificationSettingsState,
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
  state: EmailNotificationSettingsState,
  event: ToggleEmailSettingsEvent
): EmailNotificationSettingsState {
  return {
    ...state,
    draftSettings: {
      ...state.draftSettings,
      [event.key]: !state.draftSettings[event.key],
    },
  };
}

function saveEvent(
  state: EmailNotificationSettingsState
): EmailNotificationSettingsState {
  return {
    ...state,
    originalSettings: state.draftSettings,
  };
}

function discardEvent(
  state: EmailNotificationSettingsState
): EmailNotificationSettingsState {
  return {
    ...state,
    draftSettings: state.originalSettings,
  };
}

function receiveEmailSettings(
  state: EmailNotificationSettingsState,
  event: ReceiveEmailSettingsEvent
): EmailNotificationSettingsState {
  return {
    ...state,
    status: 'idle',
    originalSettings: event.data,
    draftSettings: event.data,
  };
}
