import { User } from "../../../domain/models/User";

export class UserRepository {
  async createUser(data: Partial<User>): Promise<User> {
    return await User.create(data);
  }

  async findByEmail(email: string): Promise<User | null> {
    return User.findOne({ where: { email } });
  }

  async getUserById(uuid: string): Promise<User | null> {
    return await User.findByPk(uuid);
  }

  async getUsers(): Promise<User[]> {
    return await User.findAll();
  }

  async updateUserStatus(uuid: string, status_uuid: string): Promise<void> {
    const user = await User.findByPk(uuid);
    if (user) {
      user.status_uuid = status_uuid;
      await user.save();
    }
  }
}
