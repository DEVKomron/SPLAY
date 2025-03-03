import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsDateString, IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateWatchHistoryDto {
    @ApiProperty({
        description: "Profil ID si",
        example: 1,
    })
    @IsInt()
    @IsNotEmpty()
    readonly profile_id: number;

    @ApiProperty({
        description: "Tomosha qilingan kontent ID si",
        example: 101,
    })
    @IsInt()
    @IsNotEmpty()
    readonly content_id: number;

    @ApiProperty({
        description: "Epizod ID si (ixtiyoriy)",
        example: 5,
    })
    @IsInt()
    @IsOptional()
    readonly episode_id?: number;

    @ApiProperty({
        description: "Tomosha qilingan vaqt (soniyada)",
        example: 1200,
    })
    @IsInt()
    @IsNotEmpty()
    readonly watched_seconds: number;

    @ApiProperty({
        description: "Oxirgi tomosha qilingan sana va vaqt",
        example: "2025-03-03T14:30:00Z",
    })
    @IsDateString()
    @IsNotEmpty()
    readonly last_watched: string;

    @ApiProperty({
        description: "Tomosha to‘liq tugatilganmi?",
        example: false,
    })
    @IsBoolean()
    @IsNotEmpty()
    readonly is_completed: boolean;

    @ApiProperty({
        description: "Kontent turi (masalan, film, serial)",
        example: "film",
    })
    @IsString()
    @IsNotEmpty()
    readonly content_type: string;
}
