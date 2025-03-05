import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateEpisodeAudioDto } from './dto/create-episode-audio.dto';
import { UpdateEpisodeAudioDto } from './dto/update-episode-audio.dto';

@Injectable()
export class EpisodeAudioService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createEpisodeAudioDto: CreateEpisodeAudioDto) {
    return this.prisma.episodeAudio.create({
      data: createEpisodeAudioDto,
    });
  }

  async findAll() {
    return this.prisma.episodeAudio.findMany();
  }

  async findOne(id: number) {
    return this.prisma.episodeAudio.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateEpisodeAudioDto: UpdateEpisodeAudioDto) {
    return this.prisma.episodeAudio.update({
      where: { id },
      data: updateEpisodeAudioDto,
    });
  }

  async remove(id: number) {
    return this.prisma.episodeAudio.delete({
      where: { id },
    });
  }
}
