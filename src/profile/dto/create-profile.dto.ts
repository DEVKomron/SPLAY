import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsInt, IsNotEmpty, IsOptional, IsString, Min } from "class-validator";

export class CreateProfileDto {
    @ApiProperty({
        description: "Profilning nomi. Har bir profil uchun yagona bo‘lishi kerak.",
        example: "Ghalibullah",
    })
    @IsString()
    @IsNotEmpty()
    readonly name: string;

    @ApiProperty({
        description: "Foydalanuvchining ID raqami. Ushbu profil qaysi foydalanuvchiga tegishli ekanligini bildiradi.",
        example: 1,
    })
    @IsInt()
    @IsNotEmpty()
    readonly userId: number;

    @ApiProperty({
        description: "Profil uchun avatar rasmi URL manzili.",
        example: "https://example.com/avatar.png",
    })
    @IsString()
    @IsOptional()
    readonly avatar: string;

    @ApiProperty({
        description: "Foydalanuvchining asosiy foydalanadigan tili.",
        example: 2,
    })
    @IsInt()
    @IsNotEmpty()
    readonly languageId: number;

    @ApiProperty({
        description: "Foydalanuvchining yoshi.",
        example: 25,
    })
    @IsInt()
    @Min(0)
    @IsNotEmpty()
    readonly age: number;

    @ApiProperty({
        description: "Profil faol yoki yo‘qligini bildiradi.",
        example: true,
    })
    @IsBoolean()
    @IsOptional()
    readonly is_active: boolean;

    @ApiProperty({
        description: "Profil paroli.",
        example: "StrongPassword123!",
    })
    @IsString()
    @IsNotEmpty()
    readonly password: string;

    @ApiProperty({
        description: "Profil yaratilgan sana va vaqti.",
        example: "2025-03-03T12:00:00Z",
    })
    @IsString()
    @IsOptional()
    readonly created_at: string;

    @ApiProperty({
        description: "Agar `true` bo‘lsa, bu profil asosiy profil hisoblanadi.",
        example: false,
    })
    @IsBoolean()
    @IsOptional()
    readonly is_main: boolean;
}
