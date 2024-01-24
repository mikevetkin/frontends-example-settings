import { SwitcherViewModel } from '@/core/view-model/SwitcherViewModel';

export class SettingSwitchViewModel {
  title: string;
  description: string;
  switcher: SwitcherViewModel;

  constructor({ title, description, switcher }: SettingSwitchViewModel) {
    this.title = title;
    this.description = description;
    this.switcher = switcher;
  }
}
