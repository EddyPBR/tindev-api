export class AppException {
  constructor(
    public readonly statusCode: number,
    public readonly message: string,
    public readonly trueError?: string,
  ) {}
}
