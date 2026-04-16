import { IsString, IsEmail, IsNotEmpty, Length, isString } from "class-validator";

export class UserDto{
  @IsString()
  @IsNotEmpty({ message: 'O nome é obrigatório.' })
  @Length(3, 50, { message: 'O nome deve ter entre 3 e 50 caracteres.' })
  name!: string;

  @IsEmail({}, { message: 'E-mail inválido.' })
  @IsNotEmpty({ message: 'O E-mail é obrigatório.' })
  @Length(5, 100, { message: 'O E-mail deve ter entre 5 e 100 caracteres.' })
  email!: string

  @IsString()
  @IsNotEmpty({ message: 'A senha é obrigatório.' })
  password!: string;
}