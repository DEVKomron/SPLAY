import { IsInt } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateContentGenresDto {
  @ApiProperty({ example: 1 })
  @IsInt()
  content_id: number;

  @ApiProperty({ example: 2 })
  @IsInt()
  genre_id: number;
}
