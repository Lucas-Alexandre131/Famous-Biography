import { IsString, IsEmail, IsNotEmpty, Length, IsBoolean } from "class-validator";

export class GetNewsDto {
  @IsBoolean()
  active!: boolean

  @IsBoolean()
  national!: boolean;
}