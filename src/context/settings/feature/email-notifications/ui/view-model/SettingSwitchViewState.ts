import { SwitcherViewState } from '@/core/view-state/SwitcherViewState';

export class SettingSwitchViewState<E> {
  title: string;
  description: string;
  switcher: SwitcherViewState<E>;

  constructor({ title, description, switcher }: SettingSwitchViewState<E>) {
    this.title = title;
    this.description = description;
    this.switcher = switcher;
  }
}
