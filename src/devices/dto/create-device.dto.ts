import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsIP, IsNotEmpty, IsOptional, IsString, IsUUID, IsDate } from "class-validator";

export class CreateDeviceDto {
    @ApiProperty({
        description: "Foydalanuvchiga tegishli bo‘lgan qurilma unikal identifikatori (UUID). Bu maydon majburiy.",
        example: "550e8400-e29b-41d4-a716-446655440000",
    })
    @IsUUID()
    @IsNotEmpty()
    readonly user_id: string;

    @ApiProperty({
        description: "Qurilma nomi (Masalan, iPhone 13, Samsung A13, MacBook Pro). Bu maydon majburiy.",
        example: "Samsung Galaxy A13",
    })
    @IsString()
    @IsNotEmpty()
    readonly device_name: string;

    @ApiProperty({
        description: "Qurilma turini bildiradi (mobil, planshet, kompyuter). Bu maydon majburiy.",
        example: "mobil",
    })
    @IsString()
    @IsNotEmpty()
    readonly device_type: string;

    @ApiProperty({
        description: "Foydalanuvchi kirgan IP manzili. Bu maydon ixtiyoriy.",
        example: "192.168.1.1",
    })
    @IsOptional()
    readonly ip_address: string;

    @ApiProperty({
        description: "Qurilma faol yoki yo‘qligini bildiradi. `true` bo‘lsa, aktiv hisoblanadi.",
        example: true,
    })
    @IsBoolean()
    @IsNotEmpty()
    readonly is_active: boolean;

    @ApiProperty({
        description: "Oxirgi faollik vaqti. Ixtiyoriy maydon.",
        example: "2024-03-03T14:30:00.000Z",
    })
    @IsOptional()
    readonly last_active?: Date | string;
}
