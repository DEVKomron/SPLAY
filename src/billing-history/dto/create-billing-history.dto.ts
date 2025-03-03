import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsEnum, IsNotEmpty, IsNumber, IsOptional } from "class-validator";

enum PaymentStatus {
    PENDING = 'pending',
    COMPLETED = 'completed',
    FAILED = 'failed',
}

export class CreateBillingHistoryDto {
    @ApiProperty({
        description: "Foydalanuvchining ID raqami. Ushbu maydon ixtiyoriy.",
        example: 12,
    })
    @IsNumber()
    @IsOptional()
    readonly userId?: number;

    @ApiProperty({
        description: "Obuna ID raqami. Ushbu maydon majburiy.",
        example: 5,
    })
    @IsNumber()
    @IsNotEmpty()
    readonly subscription_id: number;

    @ApiProperty({
        description: "Tolov usuli ID raqami. Majburiy maydon.",
        example: 2,
    })
    @IsNumber()
    @IsNotEmpty()
    readonly payment_method_id: number;

    @ApiProperty({
        description: "Tolov summasi. Majburiy maydon.",
        example: 150000,
    })
    @IsNumber()
    @IsNotEmpty()
    readonly amount: number;

    @ApiProperty({
        description: "Tolov sanasi. Majburiy maydon.",
        example: "2025-03-03T12:00:00.000Z",
    })
    @IsDate()
    @IsNotEmpty()
    readonly date: Date;

    @ApiProperty({
        description: "Tolov holati. 'pending' (kutilmoqda), 'completed' (yakunlandi), 'failed' (muvaffaqiyatsiz) bolishi mumkin.",
        example: "completed",
        enum: PaymentStatus,
    })
    @IsEnum(PaymentStatus)
    @IsNotEmpty()
    readonly status: PaymentStatus;
}
