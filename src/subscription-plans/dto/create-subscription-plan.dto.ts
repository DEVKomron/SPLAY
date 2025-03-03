import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsDecimal, IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateSubscriptionPlanDto {
    @ApiProperty({
        description: "Obuna rejasi nomi",
        example: "Premium",
    })
    @IsString()
    @IsNotEmpty()
    readonly name: string;

    @ApiProperty({
        description: "Reja haqida batafsil ma’lumot",
        example: "Premium reja barcha funksiyalarni o‘z ichiga oladi.",
    })
    @IsString()
    @IsNotEmpty()
    readonly description: string;

    @ApiProperty({
        description: "Oylik narxi",
        example: 9.99,
    })
    @IsDecimal()
    @IsNotEmpty()
    readonly monthly_price: number;

    @ApiProperty({
        description: "Maksimal profil soni",
        example: 5,
    })
    @IsInt()
    @IsNotEmpty()
    readonly max_profile: number;

    @ApiProperty({
        description: "Maksimal ekran soni",
        example: 3,
    })
    @IsInt()
    @IsNotEmpty()
    readonly max_screens: number;

    @ApiProperty({
        description: "Yuklab olish funksiyasi mavjudligi",
        example: true,
    })
    @IsBoolean()
    @IsNotEmpty()
    readonly download_enabled: boolean;

    @ApiProperty({
        description: "Rejada reklama bor yoki yo‘qligi",
        example: false,
    })
    @IsBoolean()
    @IsNotEmpty()
    readonly ads_enabled: boolean;

    @ApiProperty({
        description: "Obuna rejasi aktiv yoki yo‘qligi",
        example: true,
    })
    @IsBoolean()
    @IsNotEmpty()
    readonly is_active: boolean;

    @ApiProperty({
        description: "Tegishli obuna ID si (ixtiyoriy)",
        example: 1,
    })
    @IsInt()
    @IsOptional()
    readonly subscriptionId?: number;
}
