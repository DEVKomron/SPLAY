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

}
