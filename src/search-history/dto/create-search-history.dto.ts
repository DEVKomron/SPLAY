import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateSearchHistoryDto {
    @ApiProperty({
        description: "Foydalanuvchining ID si, ya'ni qidiruv amalga oshirgan shaxs.",
        example: 12,
    })
    @IsInt()
    @IsNotEmpty()
    readonly profile_id: number;  // Prisma modeli bilan bir xil nom

    @ApiProperty({
        description: "Foydalanuvchi tomonidan qidirilgan so‘z yoki ibora.",
        example: "Samsung telefon narxlari",
    })
    @IsString()
    @IsNotEmpty()
    readonly search_query: string;
}
