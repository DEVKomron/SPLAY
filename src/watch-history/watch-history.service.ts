import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateWatchHistoryDto } from './dto/create-watch-history.dto';
import { UpdateWatchHistoryDto } from './dto/update-watch-history.dto';

@Injectable()
export class WatchHistoryService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createWatchHistoryDto: CreateWatchHistoryDto) {
    return await this.prisma.watchHistory.create({
      data: createWatchHistoryDto,
    });
  }

  async findAll() {
    return await this.prisma.watchHistory.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.watchHistory.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateWatchHistoryDto: UpdateWatchHistoryDto) {
    return await this.prisma.watchHistory.update({
      where: { id },
      data: updateWatchHistoryDto,
    });
  }

  async remove(id: number) {
    return await this.prisma.watchHistory.delete({
      where: { id },
    });
  }
}
