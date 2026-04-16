import { IsString, IsEmail, IsNotEmpty, Length } from "class-validator";

export class GetAccountDto {
  @IsEmail({}, { message: 'E-mail inválido.' })
  @IsNotEmpty({ message: 'O E-mail é obrigatório.' })
  @Length(10, 100, { message: 'O E-mail deve ter entre 10 e 100 caracteres.' })
  email!: string

  @IsString()
  @IsNotEmpty({ message: 'A senha é obrigatório.' })
  password!: string;
}