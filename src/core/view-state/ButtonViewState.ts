export class ButtonViewState {
  label: string;
  icon?: string;
  disabled?: boolean;

  constructor({ label, icon, disabled }: ButtonViewState) {
    this.label = label;
    this.icon = icon;
    this.disabled = disabled;
  }
}
