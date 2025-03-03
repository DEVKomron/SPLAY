import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateSearchHistoryDto } from './dto/create-search-history.dto';
import { UpdateSearchHistoryDto } from './dto/update-search-history.dto';

@Injectable()
export class SearchHistoryService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createSearchHistoryDto: CreateSearchHistoryDto) {
    return await this.prisma.searchHistory.create({
      data: createSearchHistoryDto,
    });
  }

  async findAll() {
    return await this.prisma.searchHistory.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.searchHistory.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateSearchHistoryDto: UpdateSearchHistoryDto) {
    return await this.prisma.searchHistory.update({
      where: { id },
      data: updateSearchHistoryDto,
    });
  }

  async remove(id: number) {
    return await this.prisma.searchHistory.delete({
      where: { id },
    });
  }
}