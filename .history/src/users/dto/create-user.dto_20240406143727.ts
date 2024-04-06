import {
  IsEmail,
  IsNotEmpty,
  IsNotEmptyObject,
  IsObject,
  ValidateNested,
} from 'class-validator';
import mongoose from 'mongoose';

export class Company {
  @IsNotEmpty({ message: 'ID không được để trống' })
  _id: mongoose.Schema.Types.ObjectId;

  @IsNotEmpty({ message: 'Name không được để trống' })
  name: string;
}

export class CreateUserDto {
  @IsNotEmpty({ message: 'Name không được để trống' })
  name: string;

  @IsEmail({}, { message: 'Email phải đúng định dạng' })
  @IsNotEmpty({ message: 'Email không được để trống' })
  email: string;

  @IsNotEmpty({ message: 'Password không được để trống' })
  password: string;

  @IsNotEmpty({ message: 'Age không được để trống' })
  age: number;

  @IsNotEmpty({ message: 'Gender không được để trống' })
  gender: string;

  @IsNotEmpty({ message: 'Address không được để trống' })
  address: string;

  @IsNotEmpty({ message: 'Role không được để trống' })
  role: string;

  @IsNotEmptyObject()
  @IsObject()
  @ValidateNested()
  @Type(() => MultiLanguageDTO)
  name!: MultiLanguageDTO;
}

export class RegisterUserDto {
  @IsNotEmpty({ message: 'Name không được để trống' })
  name: string;

  @IsEmail({}, { message: 'Email phải đúng định dạng' })
  @IsNotEmpty({ message: 'Email không được để trống' })
  email: string;

  @IsNotEmpty({ message: 'Password không được để trống' })
  password: string;

  @IsNotEmpty({ message: 'Age không được để trống' })
  age: number;

  @IsNotEmpty({ message: 'Gender không được để trống' })
  gender: string;

  @IsNotEmpty({ message: 'Address không được để trống' })
  address: string;
}
