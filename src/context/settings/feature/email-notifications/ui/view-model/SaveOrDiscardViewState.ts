import { ButtonViewState } from '@/core/view-state/ButtonViewState';

export class SaveOrDiscardViewState {
  save: ButtonViewState;
  discard: ButtonViewState;

  constructor({ save, discard }: SaveOrDiscardViewState) {
    this.save = save;
    this.discard = discard;
  }
}
