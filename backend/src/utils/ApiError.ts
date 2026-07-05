class ApiError extends Error {
  public readonly statusCode: number;
  public readonly sucess: boolean;
  public readonly errors: unknown[];
  public readonly data: null;

  constructor(
    statusCode: number,
    message: string = "something went wrong",
    errors: unknown[],
    stack?: string,
  ) {
    super(message);

    this.statusCode = statusCode;
    this.sucess = false;
    this.errors = errors;
    this.data = null;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export { ApiError };
