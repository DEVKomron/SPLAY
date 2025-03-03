import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreatePaymentMethodDto {
    @ApiProperty({
        description: "To‘lov usulining nomi. Bu maydon majburiy.",
        example: "Click",
    })
    @IsString()
    @IsNotEmpty()
    readonly name: string;
}
