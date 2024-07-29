import { IUsersRepository } from "../IUsersRepository";
import { User } from "../../entities/User";

export class PostgresUsersRepository implements IUsersRepository {
  private users: User[] = [];

  async findByEmail(email: string): Promise<User | undefined> {
    const user = this.users.find(user => user.email === email);
    // Verifica se encontrou um usuário com o email especificado
    if (user) {
      return user;
    } else {
      return undefined; // Retorna undefined se nenhum usuário foi encontrado
    }
  }

  async save(user: User): Promise<void> {
    this.users.push(user);
  }
}