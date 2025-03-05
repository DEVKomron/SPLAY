import { IsBoolean, IsInt, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateEpisodeAudioDto {
  @ApiProperty({ example: 1, description: 'Audio trek IDsi' })
  @IsInt()
  audio_track_id: number;

  @ApiProperty({ example: true})
  @IsBoolean()
  is_main: boolean;

  @ApiProperty({ example: 2 })
  @IsOptional()
  @IsInt()
  episodeId?: number;
}
