export class ButtonViewState {
  label: string;
  onClick: () => void;

  constructor({ label, onClick }: ButtonViewState) {
    this.label = label;
    this.onClick = onClick;
  }
}
