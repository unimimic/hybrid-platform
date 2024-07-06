import { dataSource } from "../appDataSource";
import { User } from "../entities/user.entity";
import { Body, Get, Post, Put, Delete, Path, Route, Tags } from "tsoa";


@Route("users")
@Tags("User")
export class UserController {
  @Get("/")
  public async getAllUsers(): Promise<User[]>  {
    const users = await dataSource.getRepository(User).find();
    return users
  }

  @Get("/{id}")
  public async getUserById(@Path() id: number): Promise<User | null> {
    const user = await dataSource.getRepository(User).findOneBy({
      id: id,
    })
    return user || null;
  }

  @Post("/")
  public async createUser(@Body() requestBody: User): Promise<User> {
    console.log(requestBody)
    const user = await dataSource.getRepository(User).create(requestBody);
    console.log(requestBody)
    const results = await dataSource.getRepository(User).save(user);
    return results;
  }

  @Put("/{id}")
  public async updateUser(
    @Path() id: number,
    @Body() requestBody: User
  ): Promise<User | null> {
    const user = await dataSource.getRepository(User).findOneBy({
      id,
    })
    if (!user) {
      return null;
    }
    dataSource.getRepository(User).merge(user, requestBody);
    return await dataSource.getRepository(User).save(user);
  }

  @Delete("/{id}")
  public async deleteUser(@Path() id: number): Promise<any> {
    const result = await dataSource.getRepository(User).delete(id);
    return result;
  }
}


