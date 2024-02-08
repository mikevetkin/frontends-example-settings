import {
  ReceiveSettingsEvent,
  ChangeSettingEvent,
  SettingsEvent,
} from './SettingsEvent';
import { SettingsState } from './SettingsState';

export const settingsReducer = (state: SettingsState, event: SettingsEvent) => {
  switch (event.type) {
    case 'SaveEvent':
      return saveEvent(state);
    case 'DiscardEvent':
      return discardEvent(state);
    case 'ReceiveSettingsEvent':
      return receiveSettings(state, event);
    case 'ChangeSettingEvent':
      return changeSetting(state, event);
  }
};

function changeSetting(
  state: SettingsState,
  event: ChangeSettingEvent
): SettingsState {
  return {
    ...state,
    draft: {
      ...state.draft,
      [event.sectionKey]: {
        ...state.draft[event.sectionKey],
        [event.key]: event.value,
      },
    },
  };
}

function saveEvent(state: SettingsState): SettingsState {
  return {
    ...state,
    original: state.draft,
  };
}

function discardEvent(state: SettingsState): SettingsState {
  return {
    ...state,
    draft: state.original,
  };
}

function receiveSettings(
  state: SettingsState,
  event: ReceiveSettingsEvent
): SettingsState {
  return {
    ...state,
    status: 'idle',
    original: event.data,
    draft: event.data,
  };
}
