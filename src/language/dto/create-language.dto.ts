import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateLanguageDto {
    @ApiProperty({
        description: "Tilning to‘liq nomi. Bu maydon majburiy.",
        example: "O'zbek tili",
    })
    @IsString()
    @IsNotEmpty()
    readonly name: string;

    @ApiProperty({
        description: "Tilning xalqaro kodini bildiradi (ISO 639-1 standarti bo‘yicha). Bu maydon majburiy.",
        example: "uz",
    })
    @IsString()
    @IsNotEmpty()
    readonly code: string;

    @ApiProperty({
        description: "Tilni standart asosiy til sifatida belgilash. `true` bo‘lsa, standart til hisoblanadi. Bu maydon ixtiyoriy.",
        example: true,
    })
    @IsBoolean()
    @IsOptional()
    readonly is_default?: boolean;
}
