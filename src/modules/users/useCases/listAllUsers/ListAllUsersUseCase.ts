import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const userExist = this.usersRepository.findById(user_id);
    if(!userExist){
      throw new Error('Mensagem do erro');
    }
    if(userExist.admin==false){
      throw new Error('Mensagem do erro');
    }
    const list = this.usersRepository.list();
    return list;
  }
}

export { ListAllUsersUseCase };
