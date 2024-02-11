import {
  ReceiveSettingsEvent,
  ChangeSettingEvent,
  SettingsEvent,
  SaveEvent,
  DiscardEvent,
} from './SettingsEvent';
import { SettingsState } from './SettingsState';

export const settingsReducer = (state: SettingsState, event: SettingsEvent) => {
  switch (event.type) {
    case 'SaveEvent':
      return saveEvent(state, event);
    case 'DiscardEvent':
      return discardEvent(state, event);
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

function saveEvent(state: SettingsState, event: SaveEvent): SettingsState {
  return {
    ...state,
    original: {
      ...state.original,
      [event.section]: state.draft[event.section],
    },
  };
}

function discardEvent(
  state: SettingsState,
  event: DiscardEvent
): SettingsState {
  return {
    ...state,
    draft: {
      ...state.draft,
      [event.section]: state.original[event.section],
    },
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
