export class AppError {
  code: string;
  message: string;
  path: string[];
  
  constructor({ code, message, path}: { code: string, message: string, path: string[]}) {
    this.code = code;
    this.message = message;
    this.path = path;
  }
}

export const appError = (data: Partial<AppError>): AppError => {
  return new AppError({
    code: '',
    message: '',
    path: [],
    ...data,
  });
};
