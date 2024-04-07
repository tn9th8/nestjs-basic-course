import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { IUser } from './users.interface';
import { ResponseMessage, User } from 'src/decorator/customize';

@Controller('users') // /users
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post() // ""
  @ResponseMessage('Create a new User')
  async create(@Body() userDto: CreateUserDto, @User() userReq: IUser) {
    let newUser = await this.usersService.create(userDto, userReq);
    return {
      _id: newUser?._id,
      createdAt: newUser?.createdAt,
    };
    // userDto: lấy các trường trong dto và có sức mạnh @Body (dựa vào req.body để lấy giá trị trả về)
    // @Body('email') email: string // const email: sting = req.body.email // overload với @Body khác
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
    // TS: @Param('id')
    // JS: const id: sting = req.param.id
  }

  @Patch()
  update(@Body() userDto: UpdateUserDto, @User() userReq: IUser) {
    let newUser = this.usersService.update(userDto, userReq);
    return {
      _id: newUser?._id,
      createdAt: newUser?.createdAt,
    };
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }

  // Note: với @Get(':id') và @Get('/getAll'), Nest.js sẽ chạy từ trên xuống dưới, thằng nào map sẽ enter vào
  // So: cái nào cần (2 @Get có route) sẽ chuyển sang @Post và đưa data vào body
}