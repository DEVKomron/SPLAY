import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsEnum, IsNotEmpty, IsNumber, IsString } from "class-validator";

enum Gender {
    MALE = 'male',
    FEMALE = 'female',
}

export class CreateUserDto {
    @ApiProperty({ example: "user@example.com" })
    @IsEmail()
    @IsNotEmpty()
    readonly email: string;

    @ApiProperty({ example: 25 })
    @IsNumber()
    @IsNotEmpty()
    readonly age: number;

    @ApiProperty({ example: Gender.MALE, enum: Gender })
    @IsEnum(Gender)
    @IsNotEmpty()
    readonly gender: Gender;

    @ApiProperty({ example: "StrongP@ssw0rd" })
    @IsString()
    @IsNotEmpty()
    readonly password: string;

    @ApiProperty({ example: "StrongP@ssw0rd" })
    @IsString()
    @IsNotEmpty()
    readonly confirm_password: string;
}
