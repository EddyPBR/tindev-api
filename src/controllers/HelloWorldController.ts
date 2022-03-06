import { Request, Response } from "express";

class HelloWorldController {
  index(request: Request, response: Response) {
    return response.status(200).json({ message: "Hello world!" });
  }
}

export { HelloWorldController };
