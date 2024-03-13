export class AppError {
  code: string;
  message: string;
  path: string[];
  
  constructor(props: AppError) {
    this.code = props.code;
    this.message = props.message;
    this.path = props.path;
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
