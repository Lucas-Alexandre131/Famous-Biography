import { IsNotEmpty, IsInt, Length, IsDate, IsString, } from "class-validator";

export class BiographyDto {
    @IsString()
    @IsNotEmpty({ message: 'O titulo é obrigatório.' })
    @Length(10, 150, { message: 'O titulo deve ter entre 10 e 150 caracteres.' })
    title!: string;

    @IsString()
    @IsNotEmpty({message:"Um resumo é obrigatório"})
    @Length(50, 300, { message: 'O resumo deve ter entre 50 e 300 caracteres.' })
    summary!: string

    @IsString()
    @IsNotEmpty({message:"O conteudo é obrigatório"})
    @Length(500, 2000, { message: 'O conteudo deve ter entre 500 e 2000 caracteres.' })
    content!: string

    @IsInt()
    @IsNotEmpty({message: "O identificador do autor é necessário"})
    author_id!: number

    @IsDate()
    @IsNotEmpty({message: ""})
    publicationDate!: Date

    @IsInt()
    @IsNotEmpty({message: "O identificador da categoria é necessário"})
    id_category!: number

    @IsString()
    @IsNotEmpty({ message: "Uma imagem é obrigatório." })
    @Length(30, 255, { message: "Uma imagem deve ter entre 30 e 255 caracteres." })
    imageUrl!: string;
}