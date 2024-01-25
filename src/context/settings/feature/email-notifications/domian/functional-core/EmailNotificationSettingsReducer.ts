import { EmailNotificationSettingsState } from './EmailNotificationSettingsState';
import {
  EmailNotificationSettingsEvent,
  ReceiveEmailSettingsEvent,
  ToggleEmailSettingsEvent,
} from './EmailNotificationSettingsEvent';

export const emailNotificationSettingsReducer = (
  state: EmailNotificationSettingsState,
  event: EmailNotificationSettingsEvent
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
    status: 'pending',
    originalSettings: event.data,
    draftSettings: event.data,
  };
}
