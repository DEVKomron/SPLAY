import { PartialType } from '@nestjs/swagger';
import { CreateEpisodeAudioDto } from './create-episode-audio.dto';

export class UpdateEpisodeAudioDto extends PartialType(CreateEpisodeAudioDto) {}
