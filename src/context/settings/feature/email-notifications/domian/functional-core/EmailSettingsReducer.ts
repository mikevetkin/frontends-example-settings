import { EmailSettingsState } from './EmailSettingsState';
import {
  EmailSettingsEvent,
  ReceiveEmailSettingsEvent,
  ChangeEmailSettingEvent,
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
    case 'ChangeEmailSettingEvent':
      return changeEmailSetting(state, event);
  }
};

function changeEmailSetting(
  state: EmailSettingsState,
  event: ChangeEmailSettingEvent
): EmailSettingsState {
  return {
    ...state,
    draftSettings: {
      ...state.draftSettings,
      [event.key]: event.value,
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
