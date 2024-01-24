import { AppError } from "../../domain/entity/appError";

export class AppErrorViewState {
  label: string;

  constructor(error: AppError) {
    this.label = error.message;
  }
}