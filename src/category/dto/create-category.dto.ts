import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsOptional } from "class-validator";

export class CreateCategoryDto {
    @ApiProperty({
        description: "Kategoriya nomi.",
        example: "Action",
    })
    @IsString()
    @IsNotEmpty()
    readonly name: string;

    @ApiProperty({
        description: "Kategoriya haqida qisqacha ma'lumot.",
        example: "Jangari filmlar va seriallar to‘plami.",
    })
    @IsString()
    @IsOptional()
    readonly description?: string;
}
