class ApiResponse<T> {
  public readonly statusCode: number;
  public readonly sucess: boolean;
  public readonly message: string;
  public readonly data: T;

  constructor(statusCode: number, data: T, message: string = "success") {
    this.statusCode = statusCode;
    this.sucess = statusCode >= 200 && statusCode <= 400;
    this.message = message;
    this.data = data;
  }
}

export { ApiResponse };
