import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const user_id: any = request.headers['user_id'];
    const list = this.listAllUsersUseCase.execute({user_id: user_id});
    return response.status(200).json(list);
  }
}

export { ListAllUsersController };
