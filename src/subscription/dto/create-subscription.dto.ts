import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsDateString, IsDecimal, IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateSubscriptionDto {
    @ApiProperty({ example: 1, description: "Foydalanuvchining ID si." })
    @IsInt()
    @IsNotEmpty()
    readonly profile_id: number;

    @ApiProperty({ example: 3, description: "Obuna rejasi ID si." })
    @IsInt()
    @IsNotEmpty()
    readonly plan_id: number;

    @ApiProperty({ example: "2025-03-03T14:30:00Z", description: "Obuna boshlanish sanasi." })
    @IsDateString()
    @IsNotEmpty()
    readonly start_date: string;

    @ApiProperty({ example: "2025-09-03T14:30:00Z", description: "Obuna tugash sanasi." })
    @IsDateString()
    @IsNotEmpty()
    readonly end_date: string;

    @ApiProperty({ example: true, description: "Obuna avtomatik yangilanishi kerakmi?" })
    @IsBoolean()
    @IsNotEmpty()
    readonly auto_renew: boolean;

    @ApiProperty({ example: true, description: "Obuna aktiv yoki yo‘qligi." })
    @IsBoolean()
    @IsNotEmpty()
    readonly is_active: boolean;

    @ApiProperty({ example: 9.99, description: "So‘nggi to‘langan summa." })
    @IsDecimal()
    @IsNotEmpty()
    readonly last_amount_paid: number;

    @ApiProperty({ example: "App Store", description: "Obuna qayerdan amalga oshirilgan." })
    @IsString()
    @IsNotEmpty()
    readonly subscription_source: string;
}
