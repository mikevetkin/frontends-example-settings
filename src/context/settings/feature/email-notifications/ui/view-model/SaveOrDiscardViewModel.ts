import { ButtonViewModel } from '@/core/view-model/ButtonViewModel';

export class SaveOrDiscardViewModel {
  save: ButtonViewModel;
  discard: ButtonViewModel;

  constructor({ save, discard }: SaveOrDiscardViewModel) {
    this.save = save;
    this.discard = discard;
  }
}
